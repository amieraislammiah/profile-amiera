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
    title: "Information Systems Engineering Graduate | System Analyst",
    tagline: "Building Scalable Systems with Data-Driven Precision.",
    summary:
      "A results-driven Bachelor of Information Systems (Hons.) graduate majoring in Information Systems Engineering, with over one year of hands-on experience in data analytics, process automation, system development, and solution design gained through roles at PETRONAS and HeiTech Padu Berhad under the PROTÉGÉ program. At PETRONAS, I contributed as a Data Programmer, delivering data-driven solutions, streamlining workflows through automation, and enhancing reporting accuracy and efficiency. I further strengthened my business and system analysis capabilities through my experience supporting system development initiatives at Maybank, helping to improve operational performance and stakeholder alignment. Equipped with strong analytical thinking, technical proficiency, and a continuous improvement mindset, I am eager to contribute as a System Analyst, Business Analyst, or Software Engineer in building scalable, high-impact digital solutions that drive business value.",
    email: "amiera.islammiah@gmail.com",
    linkedin: "https://linkedin.com/in/nuramieraislammiah",
    github: "https://github.com/nuramieraislammiah",
    resumeUrl: "https://drive.google.com/file/d/1fHHE_iiWLwDJflpR3CIBtQ3H0NDZf5oJ/view?usp=sharing",
  },
  skills: [
    {
      category: "Programming & Web",
      skills: [
        "SQL", "MySQL", "MSSQL", "Oracle", "MongoDB",
        "Python", "PHP", "JavaScript", "HTML/CSS",
        "Node.js", "ASP.NET Core", "Laravel", "Bootstrap",
        "PowerApps", "PowerBI"
      ],
    },
    {
      category: "Tools & Software",
      skills: [
        "Visual Studio", "JIRA", "Git", "GitHub",
        "Microsoft Visio", "Lucidchart", "Draw.io", "SharePoint",
        "AI Studio", "R Studio", "WEKA"
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        "System Requirement & Analysis",
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
      id: "exp-0",
      company: "GeoInfo Services Sdn Bhd",
      role: "System Analyst (Contract)",
      period: "Dec 2025 – Present",
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
      role: " Data Programmer (Intern - GPD/PD&T)",
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
      period: "Mac 2020 - Sep 2024",
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
      id: "project-gis-taiping",
      title: "GIS Urban Planning System (Taiping)",
      description: "Confidential government project to centralize urban planning spatial data and workflows.",
      period: "Dec 2025 – Feb 2026",
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
      role: "System Analyst",
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
      role: "System Analyst",
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

