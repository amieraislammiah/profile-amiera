// Type definitions for portfolio data

export interface Project {
  id: string;
  title: string;
  description: string;
  period?: string;
  overview?: string;
  objectives?: string[];
  tools: string[];
  role?: string;
  contributions?: string[];
  process?: {
    problem: string;
    solution: string;
    outcome: string;
  }[];
  documentation?: {
    label: string;
    url: string;
  }[];
  images?: string[];
  proofs?: string[];
  github?: string;
  demo?: string;
  thumbnail?: string;
  confidential?: boolean;
}

export interface Activity {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Nur Amiera Islammiah",
    title: "Professional Services Engineer | Business Analyst",
    tagline: "Building Scalable Systems with Data-Driven Precision.",
    summary:
      "Business analyst and implementation engineer with 2 years of experience across core banking delivery, government system documentation and front-end application support. I author functional specifications, configure and test financing modules, investigate production defects in Oracle and PL/SQL, and run requirement sessions with client finance, operations and IT teams. Seeking a project delivery, application maintenance or business development role in banking or enterprise software.",
    email: "amiera.islammiah@gmail.com",
    linkedin: "https://linkedin.com/in/nuramieraislammiah",
    github: "https://github.com/amieraislammiah",
    resumeUrl: "/Resume_Nur%20Amiera%20Islammiah.pdf",
  },
  skills: [
    {
      category: "Programming & Web",
      skills: [
        "SQL", "Oracle PL/SQL", "MySQL", "MSSQL", "Oracle", "MongoDB",
        "Python", "PHP", "JavaScript", "HTML/CSS",
        "Node.js", "ASP.NET Core", "Laravel", "Bootstrap",
        "PowerApps", "PowerBI"
      ],
    },
    {
      category: "Tools & Software",
      skills: [
        "Visual Studio", "JIRA", "ClickUp", "Git", "GitHub",
        "Microsoft Visio", "Lucidchart", "Draw.io", "SharePoint",
        "AI Studio", "R Studio", "WEKA"
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        "System Requirement & Analysis",
        "Functional Specification (FSD) Authoring",
        "Core Banking & GL Configuration",
        "Database Engineering",
        "Business Data Analytics",
        "System Design & Implementation",
        "Machine Learning",
        "Project Management"
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      id: "exp-juris",
      company: "JurisTech Sdn Bhd",
      role: "Professional Services Engineer",
      period: "May 2026 – Sep 2026",
      description: "Delivered and maintained modules on a core banking and lending platform for banking and financial services clients, across projects for OSK, Maybank and ACOM.",
      achievements: [
        "Ran four concurrent implementation, enhancement and maintenance engagements.",
        "Authored and version-controlled Functional Specification Documents and system interface specifications. Ran requirement sessions with client finance and operations stakeholders, issued minutes of meeting, and carried tracked-change amendments through joint review to sign-off.",
        "Configured General Ledger mappings and financing modules, then tested them against the platform financing APIs with documented test evidence.",
        "Investigated and fixed production defects: GL mis-postings, late batch runs that left GL files missing, e-Invoice submission rejections, and revenue recognition errors on early loan closure. Delivered remediation scripts in Oracle SQL and PL/SQL, deployed through Git-based release workflows.",
        "Prepared client-facing impact assessments, walkthrough scripts and stakeholder Q&A briefings, surfacing gaps that became scoped follow-on enhancements."
      ],
    },
    {
      id: "exp-0",
      company: "GeoInfo Services Sdn Bhd",
      role: "System Analyst (Contract)",
      period: "Dec 2025 – May 2026",
      description: "Lead system analysis and solution development for GIS-based and government-related digital projects.",
      achievements: [
        "Led analysis and solution design for GeoSeremban, Taiping Smart City, and Sime Darby Guthrie initiatives, supporting digital transformation and data-driven urban planning.",
        "Contributed to development of GIS-enabled platforms for urban planning, asset management, and spatial data visualization."
      ],
    },
    {
      id: "exp-1",
      company: "Maybank",
      role: "Business Analyst (Contract)",
      period: "July 2025 - August 2025",
      description: "Supported digital initiatives and process improvements at Menara Maybank.",
      achievements: [
        "Gathered and analyzed business requirements to support digital initiatives.",
        "Collaborated with developers, testers, and stakeholders to ensure technical feasibility.",
        "Ensured solutions aligned with business needs."
      ],
    },
    {
      id: "exp-2",
      company: "HeiTech Padu Berhad",
      role: "System Analyst (Protégé)",
      period: "Feb 2025 - July 2025",
      description: "Contributed to the National Integrated Immigration System (NIISe) project.",
      achievements: [
        "Involved in the design, development, and implementation of system solutions for NIISe.",
        "Prepared key system documentation: User Requirement Specification (URS), Software Requirement Specification (SRS), and System Design Document (SDD).",
        "Created User Acceptance Testing (UAT) plans and collaborated with stakeholders to align system functionalities with objectives."
      ],
    },
    {
      id: "exp-3",
      company: "PETRONAS",
      role: "Data Programmer (Intern - GPD/PD&T)",
      period: "Sep 2024 - Feb 2025",
      description: "Served as Data Programmer in the Construction & Fabrication department.",
      achievements: [
        "Developed 'GoldFinger', a PowerBI dashboard to track welder whereabouts.",
        "Created a DCF Budget Tracker dashboard for monthly budget monitoring via PowerBI.",
        "Improved the Productivity Calculator UI/UX using PowerApps and JavaScript for the ProTracks Solution.",
        "Active involvement in CDD Stakeholders Engagement and CDD Olympic Games."
      ],
    },
    {
      id: "exp-4",
      company: "PETRONAS Meranti Jaya",
      role: "Cashier (Part-Time)",
      period: "Mar 2020 - Sep 2024",
      description: "Provided excellent customer service and handled transactions efficiently.",
      achievements: [
       "Processed cash, card, and digital payments accurately using POS systems, ensuring transaction integrity and compliance with company procedures.",
  "Maintained accurate cash handling and end-of-shift reconciliation with minimal discrepancies.",
  "Supported daily operational efficiency by managing fuel, retail item transactions, and customer inquiries during peak hours."
      ],
    },
    {
      id: "exp-5",
      company: "Suriani Dental Clinic",
      role: "Dental Surgery Assistant (Part-Time)",
      period: "Jun 2021 - Oct 2022",
      description: "Assisted dental surgeons in clinical procedures while ensuring patient comfort, infection control, and smooth daily clinic operations.",
      achievements: [
         "Assisted dentists during dental procedures by preparing instruments, chairside support, and post-treatment cleanup in compliance with hygiene and safety standards.",
        "Maintained strict infection control protocols, including sterilization of dental instruments and preparation of treatment rooms.",
        "Provided clear explanations and reassurance to patients, improving patient comfort and overall clinic experience."
      ],
    },
  ] as Experience[],
  activities: [
    {
      id: "act-1",
      name: "CDD Stakeholder Engagement",
      role: "Committee Member",
      period: "During PETRONAS Internship",
      description: "Assisted in organizing and coordinating stakeholder engagement sessions to foster collaboration and alignment.",
    },
    {
      id: "act-2",
      name: "CDD Olympic Games",
      role: "Participant / Organizer",
      period: "During PETRONAS Internship",
      description: "Contributed to the planning and execution of team-building activities to enhance department morale.",
    },
    {
      id: "act-3",
      name: "CDD Townhall",
      role: "Committee Member",
      period: "During PETRONAS Internship",
      description: "Supported the logistics and coordination of townhall meetings for effective department-wide communication.",
    },
  ] as Activity[],
  certifications: [
    {
      id: "cert-1",
      name: "Oracle Database Certification",
      issuer: "Oracle",
      date: "2024",
    },
    {
      id: "cert-2",
      name: "MySQL Database Certification",
      issuer: "Oracle",
      date: "2024",
    },
  ] as Certification[],
  projects: [
    {
      id: "project-osk-core-banking",
      title: "Core Banking Implementation (OSK)",
      description: "GL configuration, multi-entity rollout and e-Invoice testing for OSK Group entities on a core banking and lending platform.",
      period: "May 2026 – Sep 2026",
      overview:
        "OSK Group runs several financing entities, including Islamic and conventional businesses, on a single core banking and lending platform. As Professional Services Engineer at JurisTech, I supported the rollout of new entities onto the platform, configured and tested their General Ledger (GL) postings, wrote the functional specifications for integration enhancements, and fixed production defects affecting GL output.",
      objectives: [
        "Configure accurate GL postings for each OSK entity, covering Islamic and conventional financing",
        "Separate data and postings correctly across entities sharing one platform",
        "Deliver e-Invoice submission to the national tax authority for each entity",
        "Specify integrations between OSK's front-end system and the core platform",
        "Resolve production GL defects without disrupting month-end reporting"
      ],
      tools: ["Oracle SQL", "PL/SQL", "GL Configuration", "FSD", "e-Invoice", "Git", "Toad", "WinSCP", "ClickUp"],
      role: "Professional Services Engineer",
      contributions: [
        "Configured GL posting rules across around 50 financing scenarios for a new Islamic financing entity, and tested them against the platform's financing APIs",
        "Retagged around 2,800 GL entry lines to the correct entity and scoped posting conditions by product entity after reviewer feedback",
        "Led end-to-end e-Invoice testing across the four-stage batch chain for the multi-entity release",
        "Authored a 14-chapter FSD for front-end-to-core integrations, with one-way integration rules and testable acceptance criteria",
        "Scoped new GL posting legs for another entity's deployment and flagged a missing GL account as a blocker for Finance",
        "Deployed PL/SQL changes through Git branches and SQL deployment files"
      ],
      process: [
        {
          problem: "Fee postings for one entity were silently skipping all Islamic financing accounts, leaving fee transactions unposted in the GL.",
          solution: "Traced the cause to a posting condition that excluded Islamic products, then reposted the missing entries through a manual GL script with a guard that makes it safe to re-run.",
          outcome: "All unposted fee transactions were reposted without duplicates, and the condition was corrected to prevent recurrence."
        },
        {
          problem: "A GL export file for one entity was generated with no entries for a business day.",
          solution: "Traced it to an upstream accrual batch that ran around 15 hours late, after the GL file had already been generated.",
          outcome: "Gave the client a clear root-cause explanation and the steps to regenerate the file."
        },
        {
          problem: "During multi-entity e-Invoice testing, submissions were rejected or mixed data between entities.",
          solution: "Tested the full batch chain entity by entity and logged defects, including cross-entity data on a single invoice, rejections with no reason returned, and incorrect seller details on one entity.",
          outcome: "Defects were logged with evidence and fixed before the release went live."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/osk.jpeg",
      confidential: true,
    },
    {
      id: "project-acom-fee-sst",
      title: "Attestation Fee & SST Enhancement (ACOM)",
      description: "Functional specification and GL defect analysis for a new attestation fee with SST on a core lending platform.",
      period: "May 2026 – Sep 2026",
      overview:
        "ACOM needed its core lending platform to charge a new attestation fee with Sales and Service Tax (SST) and post it correctly to the General Ledger. I led the Functional Specification Document from requirement sessions through joint review, and investigated a GL defect on early loan closure for ACOM's finance team.",
      objectives: [
        "Specify how the attestation fee and SST are calculated, charged and posted",
        "Align finance, operations and IT stakeholders on one agreed specification",
        "Surface gaps before development rather than during testing",
        "Explain GL defects clearly to client finance stakeholders"
      ],
      tools: ["FSD", "Requirement Gathering", "Stakeholder Management", "GL Analysis", "Oracle SQL", "Test Evidence"],
      role: "Professional Services Engineer",
      contributions: [
        "Ran requirement sessions with ACOM stakeholders over several days and issued minutes of meeting",
        "Authored the FSD and managed tracked-change amendments through several versions to joint review",
        "Prepared walkthrough scripts and open-questions documents for a mixed client and internal audience",
        "Identified gaps in the requirements, including inconsistent SST arithmetic, a contradictory GL account description, and no plan for accounts already live before release",
        "Investigated an early loan closure GL defect and prepared meeting materials and Q&A scripts for ACOM finance"
      ],
      process: [
        {
          problem: "The requirements treated the fee as both SST-inclusive and SST-exclusive in different places, and did not cover existing accounts.",
          solution: "Flagged each inconsistency in an open-questions document and walked stakeholders through them in joint review sessions.",
          outcome: "Issues were raised and resolved at specification stage, before any development effort was spent."
        },
        {
          problem: "Cancelling a loan after disbursement wrongly recognised interest income and created a receivable that should not exist.",
          solution: "Confirmed the behaviour with test evidence on a test account and traced it to the platform using its settlement path for cancellations.",
          outcome: "Presented the root cause and impact to ACOM finance with supporting evidence, forming the basis for a scoped fix."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/acom.png",
      confidential: true,
    },
    {
      id: "project-maybank-gl-variance",
      title: "GL Variance Analysis (Maybank)",
      description: "Technical debugging support for GL and transaction variance on a banking platform.",
      period: "May 2026 – Sep 2026",
      overview:
        "Supported technical debugging with Maybank to analyse variances between GL and transaction records on the platform.",
      objectives: [
        "Identify the source of variances between GL and transaction data",
        "Support the team with data investigation during debugging sessions"
      ],
      tools: ["Oracle SQL", "GL Analysis", "Defect Investigation"],
      role: "Professional Services Engineer",
      contributions: [
        "Took part in technical debugging sessions analysing GL and transaction variances",
        "Ran Oracle SQL queries to compare GL and transaction records"
      ],
      process: [],
      documentation: [],
      images: [],
      thumbnail: "/maybank.jpg",
      confidential: true,
    },
    {
      id: "project-gis-taiping",
      title: "GIS Urban Planning System (Taiping)",
      description: "Confidential government project to centralize urban planning spatial data and workflows.",
      
      overview:
        "The GIS Urban Planning System for Taiping was developed to support Bandar Perancang in managing spatial planning data, infrastructure information, and development-related records through a centralized digital platform. The system integrates geospatial data with planning workflows, enabling planners to visualize, analyze, and manage planning information more efficiently. By replacing fragmented manual processes, the system enhances data accessibility, planning transparency, and decision-making for municipal development initiatives.",
      objectives: [
        "Support Bandar Perancang in managing spatial planning data efficiently",
        "Enable GIS-based visualization for planning zones and development areas",
        "Improve accessibility and accuracy of planning information",
        "Streamline planning workflows and reduce manual processes",
        "Support better urban planning decision-making through geospatial insights"
      ],
      tools: ["System Analysis", "GIS", "SRS", "URS", "SDS", "Process Modeling", "RBAC", "UAT", "Urban Planning Data Management"],
      role: "System Analyst (Contract)",
      contributions: [
        "Conducted requirements gathering sessions with Bandar Perancang stakeholders and operational users",
        "Defined functional and non-functional requirements within the Software Requirements Specification (SRS)",
        "Designed system workflows, process models, and role-based access control structures",
        "Collaborated with developers to ensure accurate implementation of GIS and planning functionalities",
        "Supported system validation, testing, and User Acceptance Testing (UAT)"
      ],
      process: [
        {
          problem: "Urban planning data and infrastructure information were previously managed across multiple manual records and disconnected systems, limiting access, visibility, and coordination.",
          solution: "Designed a GIS-enabled planning management system that centralizes spatial data and supports operational workflows with interactive mapping, a centralized repository, structured data validation/update workflows, and role-based access control.",
          outcome: "Provided centralized access to planning information, enhanced GIS visualization of development areas and infrastructure, enabled more data-driven decisions, reduced manual processing, improved data accuracy, and strengthened coordination among stakeholders."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/taiping-logo.png",
      confidential: true,
    },
    {
      id: "project-land-management-sd",
      title: "Land Management System (Sime Darby Guthrie)",
      description:
        "Digitization of land management processes to centralize records, workflows, and reporting for Sime Darby Guthrie.",
      overview:
        "The Land Management System project was initiated to digitize and streamline land-related processes within Sime Darby Guthrie. The system improves visibility, accuracy, and efficiency in managing land records, workflows, and reporting, replacing fragmented manual processes with an integrated digital platform. The solution enhances data accessibility, strengthens governance over land information, and enables better decision-making through centralized and structured data management.",
      objectives: [
        "Digitize and centralize land management records and workflows",
        "Improve data accuracy, traceability, and reporting capabilities",
        "Enhance operational efficiency by reducing manual processes",
        "Provide scalable system architecture to support future enhancements",
        "Strengthen monitoring and visibility of land-related activities"
      ],
      tools: ["System Analysis", "Requirements Engineering", "Solution Architecture", "Process Modeling"],
      role: "System Analyst (Contract)",
      contributions: [
        "Contributed to solution proposal preparation, including scope definition and high-level system approach",
        "Engaged with stakeholders to elicit, analyze, and document business and system requirements",
        "Produced high-level system architecture and solution design aligned with business needs",
        "Defined development approach, workflow, and technical considerations for implementation",
        "Ensured the proposed system supports operational efficiency and governance requirements",
        "Prepared structured analysis and design artefacts to support the development lifecycle"
      ],
      process: [
        {
          problem:
            "Land data and workflows were managed through fragmented, manual processes, limiting visibility, consistency, and governance.",
          solution:
            "Designed a centralized land management system with structured workflows, clear data ownership, and scalable architecture for future enhancements.",
          outcome:
            "Enabled clearer visibility of land data through centralized management, reduced dependency on manual tracking, and established a scalable foundation for future digital improvements."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      thumbnail: "/sd-logo.png",
      confidential: true,
    },
    {
      id: "project-geo-seremban",
      title: "Asset Infrastructure Management System (Geo Seremban)",
      description: "Digitized and centralized asset registration, tracking, and lifecycle management across operational locations.",
      period: "Dec 2025 - Feb 2026",
      overview:
        "The Asset Infrastructure Management System (Geo Seremban) replaces manual, fragmented asset records with a structured system. It improves data accuracy, asset visibility, lifecycle tracking, and audit readiness through standardized workflows and role-based access.",
      objectives: [
        "Centralize asset data and standardize registration/update/disposal workflows",
        "Improve asset visibility, ownership, and location tracking",
        "Strengthen audit readiness and reduce manual errors",
        "Enable role-based accountability across Registrar, Reviewer, Approver, Admin"
      ],
      tools: ["System Analysis", "SRS", "Process Modeling", "RBAC", "UAT"],
      role: "System Analyst (Contract)",
      contributions: [
        "Gathered and validated requirements from stakeholders and end users",
        "Defined functional and non-functional requirements in the SRS",
        "Designed workflows, process flows, and role-based access control",
        "Coordinated with developers to clarify requirements and validate system behavior",
        "Supported system testing, verification, and UAT activities"
      ],
      process: [
        {
          problem:
            "Asset records maintained manually across units led to inconsistent/outdated data, limited status visibility, and audit challenges.",
          solution:
            "Designed a centralized system with structured workflows (registration, updates, maintenance, disposal) and role-based dashboards.",
          outcome:
            "Improved data accuracy and consistency, enhanced lifecycle/status visibility, reduced manual processing, and stronger audit readiness."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      thumbnail: "/mbs-logo.png",
      confidential: true,
    },
    {
      id: "project-1",
      title: "NIISe System Documentation & Analysis",
      description:
        "Comprehensive system analysis and documentation for the National Integrated Immigration System (NIISe).",
      overview:
        "As part of the NIISe project at HeiTech Padu, I was responsible for bridging the gap between client requirements and technical implementation through rigorous documentation and analysis.",
      objectives: [
        "Ensure accurate translation of user needs into technical specifications.",
        "Standardize documentation across the development lifecycle.",
        "Facilitate smooth UAT processes."
      ],
      tools: ["SRS", "SDD", "UAT", "System Analysis"],
      role: "System Analyst",
      contributions: [
        "Authored the Software Requirement Specification (SRS) and System Design Document (SDD).",
        "Designed detailed UAT test plans.",
        "Collaborated with government stakeholders to validate requirements."
      ],
      process: [
        {
          problem: "Complex government immigration processes needed digitization.",
          solution: "Detailed requirement gathering and structured documentation.",
          outcome: "Approved SRS and SDD documents serving as the blueprint for development."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/niise-logo.png",
      confidential: true,
    },
    {
      id: "project-dcf",
      title: "DCF Budget Tracker Dashboard",
      description:
        "A PowerBI dashboard for monitoring monthly budget allocations and expenditures.",
      overview:
        "Developed a centralized dashboard to track and visualize budget data for the Construction & Fabrication department, enabling better financial oversight.",
      objectives: [
        "Monitor monthly budget utilization in real-time.",
        "Identify variances between planned and actual spend.",
        "Simplify financial reporting for management."
      ],
      tools: ["PowerBI", "DAX", "Excel"],
      role: "Data Programmer (Intern)",
      contributions: [
        "Designed data models to integrate various budget sources.",
        "Created interactive visualizations for key financial metrics.",
        "Automated data refresh schedules for up-to-date reporting."
      ],
      process: [
        {
          problem: "Budget tracking was manual, prone to errors, and lacked visual insights.",
          solution: "Built a PowerBI dashboard with automated data feeds.",
          outcome: "Enabled instant visibility into financial health and faster decision-making."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/petronas-logo.png",
      confidential: true,
    },
    {
      id: "project-goldfinger",
      title: "GoldFinger Welder Tracking",
      description:
        "A PowerBI solution to track the whereabouts and status of welders.",
      overview:
        "GoldFinger is a dashboard designed to provide real-time visibility into the deployment and availability of welders across different project sites.",
      objectives: [
        "Track welder locations and assignment status.",
        "Optimize workforce allocation.",
        "Reduce downtime due to unavailable personnel."
      ],
      tools: ["PowerBI", "DAX", "Data Modeling"],
      role: "Data Programmer (Intern)",
      contributions: [
        "Developed the dashboard layout and navigation.",
        "Implemented logic to track movement and status changes.",
        "Collaborated with site supervisors to ensure data accuracy."
      ],
      process: [
        {
          problem: "Difficulty in locating welders and managing workforce distribution.",
          solution: "Created a centralized tracking dashboard.",
          outcome: "Improved workforce coordination and reduced idle time."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/petronas-logo.png",
      confidential: true,
    },
    {
      id: "project-prod-calc",
      title: "Productivity Calculator",
      description:
        "A PowerApps calculator integrated with ProTracks Solution for productivity analysis.",
      overview:
        "Enhanced an existing productivity calculator by improving its UI/UX and integrating it with the ProTracks ecosystem using JavaScript for advanced logic.",
      objectives: [
        "Improve user experience and interface design.",
        "Ensure accurate productivity calculations.",
        "Integrate seamlessly with ProTracks Solution."
      ],
      tools: ["PowerApps", "JavaScript", "ProTracks"],
      role: "Data Programmer (Intern)",
      contributions: [
        "Redesigned the user interface for better usability.",
        "Wrote JavaScript functions for complex calculations.",
        "Conducted testing to ensure data integrity."
      ],
      process: [
        {
          problem: "The existing calculator was difficult to use and lacked integration.",
          solution: "Revamped UI/UX and added JavaScript-based logic integration.",
          outcome: "Increased user adoption and calculation accuracy."
        }
      ],
      documentation: [],
      images: [],
      thumbnail: "/petronas-logo.png",
      confidential: true,
    },
    {
      id: "project-3",
      title: "Event Photography Booking System",
      description:
        "Final Year Project utilizing effective pricing management processes for Firdaus Medias.",
      overview:
        "Developed a web-based booking system to streamline the reservation and pricing process for a photography business.",
      objectives: [
        "Automate the booking process.",
        "Implement dynamic pricing management.",
        "Provide a customer-facing portal."
      ],
      tools: ["Web Development", "Database Design", "Pricing Algorithms"],
      role: "Full Stack Developer",
      contributions: [
        "Designed the database schema for bookings and pricing.",
        "Implemented the frontend and backend logic.",
        "Conducted system testing and user evaluation."
      ],
      process: [
        {
          problem: "Manual booking led to double-bookings and pricing errors.",
          solution: "Centralized web platform with automated validation.",
          outcome: "Streamlined operations for Firdaus Medias."
        }
      ],
      documentation: [
        {
          label: "FYP Documentation",
          url: "https://drive.google.com/file/d/10Blyo_RTkhclZiwEtOtGRd2VJcJm1HXh/view?usp=sharing",
        },
      ],
      images: [],
      proofs: [],
      thumbnail: "/uitm-logo.png",
      github: "https://github.com/amieraislammiah/photoshoot-booking-app",
    },
    {
      id: "study-inventory",
      title: "Stock Inventory Management System",
      description: "Technology Entrepreneurship course project at UiTM Shah Alam.",
      period: "Feb 2024 - Jul 2024",
      overview: "Designed and managed a stock inventory system focusing on entrepreneurship-driven product planning, resource tracking, and operational readiness.",
      objectives: ["Plan product inventory needs", "Track stock movements and status", "Support basic reporting for decision-making"],
      tools: ["Project Management", "System Design", "Business Planning"],
      role: "Project Manager",
      contributions: [
        "Led scope definition, timeline planning, and deliverables across the team.",
        "Defined system features aligned to entrepreneurship objectives.",
        "Delivered reports and presentations to stakeholders."
      ],
      process: [
        {
          problem: "Manual stock tracking caused uncertainty in supply planning.",
          solution: "Implemented structured inventory tracking and status reporting.",
          outcome: "Improved visibility into stock levels and planning confidence."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      thumbnail: "/uitm-logo.png",
      confidential: true,
    },
    {
      id: "study-mathscatch",
      title: "Maths Catch Tuition Centre Registration System",
      description: "Main course project at UiTM Shah Alam",
      period: "Feb 2023 - Oct 2024",
      overview: "End-to-end development lifecycle exercises on a registration system for a tuition centre, spanning requirements, design & implementation, and testing & evolution.",
      objectives: ["Gather and validate system requirements", "Design and implement core registration workflows", "Plan and execute system testing & evolution"],
      tools: ["System Analysis", "UML", "Software Design", "Testing & Evolution"],
      role: "Project Manager",
      contributions: [
        "Led System Requirement & Analysis (SRS) for feature definition and scope.",
        "Managed Software Design & Implementation (SDD) deliverables and prototypes.",
        "Directed System Testing & Evolution (STD) planning and regression cycles."
      ],
      process: [
        {
          problem: "Unclear registration workflows and change requests across courses.",
          solution: "Iterative design, implementation, and testing with controlled baselines.",
          outcome: "Stable registration flows with documented requirements and tested releases."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      github: "https://github.com/amieraislammiah/tuitionregistration",
      thumbnail: "/uitm-logo.png",
    },
    {
      id: "study-suriani-clinic",
      title: "Suriani Dental Clinic Registration System",
      description: "Database Engineering and Enterprise Architecture projects at UiTM Shah Alam.",
      period: "Feb 2023 - Feb 2024",
      overview: "Designed clinic registration data models and implemented Enterprise Architecture (EA) perspectives to align system structure with organizational goals.",
      objectives: ["Engineer robust database schema", "Apply EA principles for alignment", "Document system architecture views"],
      tools: ["Database Engineering", "Enterprise Architecture", "ERD/UML"],
      role: "Project Manager / System Architect",
      contributions: [
        "Led database design, normalization, and integrity checks (Feb–Oct 2023).",
        "Architected EA artifacts and alignment models (Oct 2023–Feb 2024).",
        "Prepared consolidated documentation for academic delivery."
      ],
      process: [
        {
          problem: "Fragmented data handling and unclear architectural alignment.",
          solution: "Centralized schema design and EA viewpoint documentation.",
          outcome: "Consistent data models and architecture alignment across modules."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      thumbnail: "/uitm-logo.png",
      confidential: true,
    },
    {
      id: "study-hci-mari-menjawi",
      title: "Mari Menjawi Application",
      description: "Human-Computer Interaction course project.",
      period: "2023",
      overview: "Designed user-centered interactions and interface prototypes emphasizing usability and accessibility.",
      objectives: ["Apply HCI principles", "Prototype accessible UI flows", "Evaluate usability through feedback"],
      tools: ["HCI", "Prototyping", "Usability Testing"],
      role: "Project Manager",
      contributions: [
        "Coordinated UI prototyping and heuristic evaluations.",
        "Facilitated user feedback sessions and iteration cycles.",
        "Delivered HCI-focused documentation and presentations."
      ],
      process: [
        {
          problem: "Initial interfaces lacked clarity and ease of use.",
          solution: "Applied HCI heuristics and iterative prototyping.",
          outcome: "Improved usability and user satisfaction in test sessions."
        }
      ],
      documentation: [
        { label: "Mari Menjawi PDF", url: "/marimenjawi.pdf" }
      ],
      images: [],
      proofs: [],
      thumbnail: "/uitm-logo.png",
    },
    {
      id: "study-cpm-emart",
      title: "e-Mart Melati College",
      description: "Computing Project Management course project.",
      period: "2023",
      overview: "Managed project planning, scope, scheduling, and risk assessments for a college e-commerce concept.",
      objectives: ["Define scope and schedule", "Manage risks and resources", "Deliver planned milestones"],
      tools: ["Project Management", "Scheduling", "Risk Management"],
      role: "Project Manager",
      contributions: [
        "Developed Work Breakdown Structure (WBS) and schedules.",
        "Tracked risks and mitigation strategies.",
        "Coordinated team communications and reporting."
      ],
      process: [
        {
          problem: "Uncertain timelines and resource allocation risks.",
          solution: "Structured planning and risk tracking with regular reviews.",
          outcome: "Predictable delivery against milestones and reduced project risk."
        }
      ],
      documentation: [],
      images: [],
      proofs: [],
      thumbnail: "/uitm-logo.png",
      confidential: true,
    },
  ] as Project[],
};
