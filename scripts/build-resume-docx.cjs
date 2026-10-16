// Builds resume/Tory-Hebert-Resume.docx from the resume sections of index.html,
// so the Word file never drifts from the site. Re-run after editing index.html:
//
//   NODE_PATH="$(npm root -g)" node scripts/build-resume-docx.cjs
//
// Needs the `docx` npm package (global or local). Parsing is regex over markup this
// repo controls: if you rename a class in index.html, update the matching pattern here.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType,
  LevelFormat, BorderStyle, TabStopType,
} = require('docx');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'resume', 'Tory-Hebert-Resume.docx');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// ---------- parsing ----------

const text = (s) =>
  s.replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&rsquo;/g, '’').replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ').trim();

const one = (re, s, label) => {
  const m = re.exec(s);
  if (!m) throw new Error(`index.html: could not find ${label}`);
  return m[1];
};
const all = (re, s) => [...s.matchAll(re)].map((m) => m[1]);
const section = (id) => one(new RegExp(`<section id="${id}"[^>]*>([\\s\\S]*?)</section>`), html, `#${id}`);

const name = text(one(/class="dj-hero-title">([\s\S]*?)</, html, 'name'));
const kicker = text(one(/class="dj-hero-kicker">([\s\S]*?)</, html, 'kicker'));
const summary = text(one(/class="dj-hero-lede">([\s\S]*?)<\/p>/, html, 'summary'))
  .replace(/\s*Most of it is open source, below\.$/, ' Selected open-source projects are listed below.');

// Each role body is a run of h4 / scope / ul blocks, kept in document order.
const roles = all(/<article class="role">([\s\S]*?)<\/article>/g, section('experience')).map((a) => {
  const body = one(/class="role-body">([\s\S]*)<\/div>\s*$/, a, 'role body');
  const blocks = [...body.matchAll(/<h4>([\s\S]*?)<\/h4>|<p class="role-scope">([\s\S]*?)<\/p>|<ul>([\s\S]*?)<\/ul>/g)]
    .map((m) => (m[1] ? { h: text(m[1]) } : m[2] ? { scope: text(m[2]) } : { items: all(/<li>([\s\S]*?)<\/li>/g, m[3]).map(text) }));
  return {
    when: text(one(/class="role-when">([\s\S]*?)</, a, 'role dates')),
    title: text(one(/<h3>([\s\S]*?)<\/h3>/, a, 'role title')),
    where: text(one(/class="role-where">([\s\S]*?)</, a, 'role company')),
    blocks,
  };
});

const projects = all(/<article class="project[^"]*">([\s\S]*?)<\/article>/g, section('projects')).map((a) => ({
  name: text(one(/<h3>([\s\S]*?)<\/h3>/, a, 'project name')),
  what: text(one(/class="project-what">([\s\S]*?)<\/p>/, a, 'project summary')),
  stack: text(one(/class="project-stack">([\s\S]*?)<\/p>/, a, 'project stack')),
  source: (/href="(https:\/\/github\.com\/[^"]+)"/.exec(a) || [])[1],
}));

const skills = all(/<li class="dj-badge[^"]*">([\s\S]*?)<\/li>/g, section('skills')).map(text);

const education = all(/<li class="dj-divided-item">([\s\S]*?)<\/li>/g, section('education')).map((li) => ({
  title: text(one(/<h3>([\s\S]*?)<\/h3>/, li, 'education title')),
  detail: text(one(/<p>([\s\S]*?)<\/p>/, li, 'education detail')),
}));

const contact = section('contact');
const email = one(/href="mailto:([^"]+)"/, contact, 'email');
const linkedin = one(/href="(https:\/\/www\.linkedin\.com[^"]+)"/, contact, 'linkedin');
const github = one(/href="(https:\/\/github\.com\/[^"/]+)"/, contact, 'github');
const siteHost = fs.readFileSync(path.join(ROOT, 'CNAME'), 'utf8').trim();
const location = one(/·\s*([^·]+, [A-Z]{2})\s*·/, kicker, 'location');

// ---------- document ----------
// Plain and ATS-safe: one column, real bullets, standard fonts. The brand shows up only
// as the light-mode accent (--dj-gold-600) on section labels.

const FONT = 'Calibri';
const INK = '1A1712';
const MUTED = '5A554C';
const ACCENT = 'A87A12';
const RIGHT = 10800; // text width in DXA: 12240 page minus two 720 margins

const run = (t, o = {}) => new TextRun({ text: t, font: FONT, color: INK, ...o });
const link = (label, href) =>
  new ExternalHyperlink({ link: href, children: [run(label, { color: INK, underline: {} })] });
const sep = () => run('  ·  ', { color: MUTED });

const sectionLabel = (t) =>
  new Paragraph({
    spacing: { before: 220, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCC5B5', space: 2 } },
    children: [run(t.toUpperCase(), { bold: true, size: 19, color: ACCENT, characterSpacing: 30 })],
  });

const bullet = (t) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 30 },
    children: [run(t, { size: 20 })],
  });

const children = [];

children.push(
  new Paragraph({ spacing: { after: 20 }, children: [run(name, { bold: true, size: 44 })] }),
  new Paragraph({ spacing: { after: 60 }, children: [run(kicker.replace(/ · [^·]+, [A-Z]{2} · Remote only$/, ''), { size: 21, color: MUTED })] }),
  new Paragraph({
    spacing: { after: 60 },
    children: [
      run(`${location} (remote only)`), sep(),
      link(email, `mailto:${email}`), sep(),
      link(siteHost, `https://${siteHost}`), sep(),
      link(linkedin.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, ''), linkedin), sep(),
      link(github.replace(/^https:\/\//, ''), github),
    ],
  }),
);

children.push(sectionLabel('Summary'), new Paragraph({ spacing: { after: 40 }, children: [run(summary, { size: 20 })] }));

children.push(sectionLabel('Experience'));
roles.forEach((r, i) => {
  children.push(
    new Paragraph({
      keepNext: true,
      spacing: { before: i ? 160 : 40, after: 0 },
      tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
      children: [run(r.title, { bold: true, size: 22 }), run('\t' + r.when, { size: 19, color: MUTED })],
    }),
    new Paragraph({ keepNext: true, spacing: { after: 60 }, children: [run(r.where, { size: 20, color: MUTED })] }),
  );
  r.blocks.forEach((b) => {
    if (b.h) children.push(new Paragraph({ keepNext: true, spacing: { before: 80, after: 30 }, children: [run(b.h, { bold: true, size: 20 })] }));
    if (b.scope) children.push(new Paragraph({ keepNext: true, spacing: { after: 30 }, children: [run(b.scope, { italics: true, size: 19, color: MUTED })] }));
    if (b.items) b.items.forEach((t) => children.push(bullet(t)));
  });
});

children.push(sectionLabel('Selected projects'));
projects.forEach((p) => {
  const head = [run(p.name, { bold: true, size: 20 }), run(' — ' + p.what, { size: 20 })];
  children.push(
    new Paragraph({ keepNext: true, spacing: { before: 60, after: 0 }, children: head }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        run(p.stack, { size: 18, color: MUTED }),
        ...(p.source ? [sep(), link(p.source.replace(/^https:\/\//, ''), p.source)]: [run('  ·  private repo', { size: 18, color: MUTED })]),
      ],
    }),
  );
});

children.push(sectionLabel('Skills'), new Paragraph({ children: [run(skills.join(', '), { size: 20 })] }));

children.push(sectionLabel('Education'));
education.forEach((e) =>
  children.push(new Paragraph({ spacing: { after: 40 }, children: [run(e.title, { bold: true, size: 20 }), run(' — ' + e.detail, { size: 20 })] })),
);

children.push(
  sectionLabel('Work preference'),
  new Paragraph({ children: [run('Remote only. Not open to on-site or hybrid roles. Location is listed for reference.', { size: 20 })] }),
);

const doc = new Document({
  creator: name,
  title: `${name} — Resume`,
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 300, hanging: 220 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 720, bottom: 720, left: 720, right: 720 },
      },
    },
    children,
  }],
});

fs.mkdirSync(path.dirname(OUT), { recursive: true });
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(OUT, buf);
  console.log(`wrote ${path.relative(ROOT, OUT)} — ${roles.length} roles, ${projects.length} projects, ${skills.length} skills`);
});
