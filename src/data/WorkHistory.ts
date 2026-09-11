export default [
  {
    role: 'Senior Software Engineer',
    company: 'Amira Learning',
    location: 'Lafayette, LA (remote)',
    startDate: '07/2022',
    endDate: 'Current',
    details: [
      {
        key: 0,
        description:
          'Own the core K-5 student reading and assessment client (5.5M+ students, 4,000+ districts nationwide)',
        responsibilities: [
          'Migrated the real-time assessment engine from a client-authoritative to a server-orchestrated architecture now serving all English-language assessments in production',
          'Shipped an LLM-powered conversational comprehension feature end-to-end, a WebGL-rendered animated tutor avatar system, and a 6-brand white-label platform serving enterprise partners including NWEA and HMH',
          'Led frontend development on the teacher/admin app for 16 months: bilingual (Spanish) assessment configuration, screening-window scheduling, and a client-side Word-document generator for intervention plans',
          'Built and maintained a parent portal and a district license-configuration grid, replacing per-stack feature flags with per-district license entitlement checks',
          'Delivered cross-platform frontend work during the Amira/Istation platform merger'
        ]
      },
      {
        key: 1,
        description: "Took lead on the team's AR/Unity and non-web projects",
        responsibilities: [
          "Sole Unity/C# expert on an acquired AR mobile game (Wonderscope) integrating Amira's tutor — taught Unity to coworkers from scratch, built a custom branching-path extension to the timeline editor, owned 5 production releases across 102 commits/48 PRs",
          'Helped design the early Amira Forge platform, contributed to the internal story-curation tool, and built a programmatic After Effects scripting pipeline that auto-generated hundreds of instructional letter-teaching videos',
          "Picked up backend/devops work as needed: GraphQL API contracts, a Lambda + DynamoDB microservice, a GraphQL layer inside a legacy ASP.NET MVC monolith, and lighter Python (Athena, S3) and C# (Istation's ISWeb) work"
        ]
      },
      {
        key: 2,
        description: 'AI-native engineering, daily',
        responsibilities: [
          'Work inside an org-wide AI agent-tooling and MCP-integration stack to debug production issues and build features',
          "Adopted early (ChatGPT, then Cursor) and led internal Cursor adoption when it was the leading tool; now run primarily through Claude Code, with Copilot, ChatGPT's coding agent, and Gemini as situational fallbacks",
          "Contribute to the team's shared agent-tooling collection; also build my own tools (Chrome extensions, CLI scripts, a project-management system) to unblock recurring friction"
        ]
      }
    ]
  },
  {
    role: 'Senior Software Engineer (Fullstack)',
    company: 'Marqeta',
    location: 'Oakland, CA',
    startDate: '2020',
    endDate: '07/2022',
    details: [
      {
        key: 0,
        description:
          'Owned and maintained the Three Domain Secure (3DS) admin configuration panel and customer-facing forms (React, NodeJS, MustacheJS)',
        responsibilities: [
          'Also contributed to the 3DS backend service (Java, Java Spark) and its AWS infrastructure (Terraform-managed Lambda, API Gateway, SNS, SQS, S3, DynamoDB, CloudWatch)',
          'Wrote integration and unit tests for the Java and JavaScript codebases, plus Gatling performance tests in Scala',
          'Created designs and documentation, ran Knowledge Sharing Sessions, and supported 3DS auditing',
          'Mentored a summer intern and served as primary onboarding mentor for two new hires starting Q1 2022'
        ]
      }
    ]
  },
  {
    role: 'Senior Software Engineer (Frontend)',
    company: 'Waitr, Inc.',
    location: 'Lafayette, LA',
    startDate: '2017',
    endDate: '2020',
    details: [
      {
        key: 0,
        description:
          "Contributed to Waitr's customer-facing web ordering application (React, Redux, Thunk)",
        responsibilities: [
          'Fixed bugs and implemented features from product/design specs',
          'Introduced Jest to the codebase and migrated existing Chai test suites',
          'Served as primary technical owner of an in-house AngularJS order-management product used internally and by restaurant partners — advised a small group of engineers, drove requirements into working solutions, supported deployment and configuration updates'
        ]
      }
    ]
  },
  {
    role: 'Associate Technical Consultant (Frontend)',
    company: 'Perficient, Inc.',
    location: 'Lafayette, LA',
    startDate: '2016',
    endDate: '2017',
    details: [
      {
        key: 0,
        description:
          'Built a single-page application for the Kaiser Permanente healthcare website',
        responsibilities: [
          'Used AngularJS 1.5, Angular 2, and TypeScript, styled with SASS/Bourbon-Neat against an existing styleguide',
          'Wrote unit tests in Karma/Jasmine/PhantomJS'
        ]
      }
    ]
  }
];
