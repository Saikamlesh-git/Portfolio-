export const personalInfo = {
  name: "Saikamlesh M",
  initials: "SM",
  title: "BE CSE Student | Developer | UI/UX Designer | Creative Designer",
  headline: "Building Digital Experiences with Code & Creativity.",
  tagline: "BE Computer Science Engineering student passionate about software development, UI/UX design, graphic design, and creating practical digital solutions.",
  status: "Open to Internships & Software Roles",
  email: "saikamlesh.m@gmail.com",
  altEmail: "saikamlesh.m.27.cse@psvpec.in",
  phone: "+91 7299293100",
  location: "Chennai, Tamil Nadu, India",
  college: "Prince Shri Venkateshwara Padmavathy Engineering College",
  degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
  gradYear: "2023 – 2027",
  cgpa: "7.5 / 10",
  github: "https://github.com/Saikamlesh-git",
  linkedin: "https://linkedin.com/in/sai-kamlesh-m-79b7133b0",
  sakaDigital: "https://sakadigital.netlify.app/",
  languages: ["English", "Tamil"]
};

export const aboutMe = {
  bio: "I am a BE Computer Science Engineering student with a strong interest in software development, UI/UX design, graphic design, and digital creativity. I enjoy combining technical knowledge with creative thinking to build practical, user-friendly, and visually engaging digital solutions. I continuously explore new technologies and improve my skills by working on real-world projects.",
  pillars: [
    {
      title: "Software Development",
      icon: "Code2",
      description: "Building robust, scalable applications with clean architecture using Java, Python, C++, React, and relational databases.",
      badge: "Core Engineering"
    },
    {
      title: "UI/UX Design",
      icon: "Palette",
      description: "Designing intuitive user journeys, interactive wireframes, and modern design systems in Figma with user-centric principles.",
      badge: "User Experience"
    },
    {
      title: "Graphic Design",
      icon: "Layers",
      description: "Crafting impactful branding, promotional banners, and visual identities using Adobe Photoshop, Canva, and Adobe Creative Cloud.",
      badge: "Visual Identity"
    },
    {
      title: "Video Editing",
      icon: "Video",
      description: "Producing engaging promotional video content and dynamic reels utilizing Adobe Premiere Pro and CapCut.",
      badge: "Media Production"
    }
  ],
  education: [
    {
      institution: "Prince Shri Venkateshwara Padmavathy Engineering College",
      degree: "B.E. – Computer Science & Engineering",
      period: "2023 – 2027",
      score: "CGPA: 7.5 / 10",
      location: "Chennai, TN",
      status: "Currently Pursuing"
    },
    {
      institution: "St Pius X Matriculation Higher Secondary School",
      degree: "Higher Secondary Certificate (Class XII)",
      period: "2022 – 2023",
      score: "Score: 80%",
      location: "Chennai, TN",
      status: "Completed"
    },
    {
      institution: "St Pius X Matriculation Higher Secondary School",
      degree: "Secondary School Leaving Certificate (Class X)",
      period: "2020 – 2021",
      score: "Score: 100% (All Pass)",
      location: "Chennai, TN",
      status: "Completed"
    }
  ]
};

export const skillCategories = [
  {
    id: "all",
    label: "All Skills"
  },
  {
    id: "programming",
    label: "Programming"
  },
  {
    id: "web",
    label: "Web Development"
  },
  {
    id: "database",
    label: "Database & Tools"
  },
  {
    id: "design",
    label: "UI/UX & Graphic Design"
  },
  {
    id: "video",
    label: "Video Editing"
  },
  {
    id: "core-cs",
    label: "Core CS Fundamentals"
  }
];

export const skillsData = [
  // Programming
  { name: "Java", category: "programming", level: "Advanced", icon: "Coffee", color: "from-amber-500 to-red-500" },
  { name: "Python", category: "programming", level: "Proficient", icon: "FileCode2", color: "from-blue-500 to-yellow-500" },
  { name: "C", category: "programming", level: "Fundamental", icon: "Code", color: "from-blue-600 to-indigo-600" },
  { name: "C++", category: "programming", level: "Proficient", icon: "Terminal", color: "from-blue-500 to-cyan-500" },

  // Web Development
  { name: "HTML5", category: "web", level: "Advanced", icon: "FileCode", color: "from-orange-500 to-amber-600" },
  { name: "CSS3 / Tailwind", category: "web", level: "Advanced", icon: "LayoutTemplate", color: "from-cyan-500 to-blue-600" },
  { name: "JavaScript", category: "web", level: "Proficient", icon: "Braces", color: "from-yellow-400 to-amber-500" },
  { name: "React.js", category: "web", level: "Proficient", icon: "Atom", color: "from-cyan-400 to-sky-600" },
  { name: "REST APIs", category: "web", level: "Proficient", icon: "Network", color: "from-emerald-500 to-teal-600" },

  // Database & Tools
  { name: "MySQL", category: "database", level: "Proficient", icon: "Database", color: "from-blue-500 to-cyan-600" },
  { name: "Git", category: "database", level: "Proficient", icon: "GitBranch", color: "from-orange-600 to-red-600" },
  { name: "GitHub", category: "database", level: "Proficient", icon: "Github", color: "from-purple-500 to-indigo-600" },
  { name: "Microsoft 365", category: "database", level: "Advanced", icon: "Briefcase", color: "from-blue-600 to-indigo-700" },

  // Design
  { name: "Figma", category: "design", level: "Advanced", icon: "Figma", color: "from-purple-500 to-pink-500" },
  { name: "Canva", category: "design", level: "Advanced", icon: "Image", color: "from-cyan-500 to-teal-500" },
  { name: "Adobe Photoshop", category: "design", level: "Proficient", icon: "Sparkles", color: "from-blue-600 to-cyan-500" },
  { name: "Adobe Creative Cloud", category: "design", level: "Proficient", icon: "Layers", color: "from-red-500 to-pink-600" },

  // Video Editing
  { name: "CapCut", category: "video", level: "Advanced", icon: "Scissors", color: "from-pink-500 to-rose-600" },
  { name: "Adobe Premiere Pro", category: "video", level: "Proficient", icon: "Film", color: "from-purple-600 to-violet-800" },

  // Core CS
  { name: "OOP (Object-Oriented)", category: "core-cs", level: "Strong", icon: "Box", color: "from-indigo-500 to-purple-600" },
  { name: "Data Structures & Algorithms", category: "core-cs", level: "Strong", icon: "Binary", color: "from-cyan-500 to-blue-600" },
  { name: "DBMS", category: "core-cs", level: "Strong", icon: "Server", color: "from-emerald-500 to-green-600" },
  { name: "Operating Systems", category: "core-cs", level: "Strong", icon: "Cpu", color: "from-violet-500 to-indigo-600" },
  { name: "Software Engineering", category: "core-cs", level: "Strong", icon: "CheckCircle2", color: "from-sky-500 to-blue-700" }
];

export const softSkills = [
  "Team Collaboration",
  "Communication Skills",
  "Creative Thinking",
  "Time Management",
  "Adaptability",
  "Problem Solving"
];

export const projectsData = [
  {
    id: "carry",
    title: "Carry – Hotel Essentials Ordering System",
    subtitle: "Web-Based Operational Ordering & Supply Platform",
    category: "web",
    featured: true,
    description: "A web-based ordering platform designed for hotels to order essential operational supplies including carry bags, bed sheets, rolls, and cups. Features distinct user and administrator workflows with dedicated routes for order processing, cart management, and inventory views.",
    tags: ["Python", "Web Technologies", "MySQL", "Responsive UI", "Inventory Routing"],
    liveDemo: "https://saikamlesh-git.github.io/Carry/",
    adminPanel: "https://saikamlesh-git.github.io/Carry/#/admin",
    github: "https://github.com/Saikamlesh-git/Carry",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    highlights: [
      "Structured distinct customer and admin authentication workflows",
      "Dedicated admin panel for real-time inventory and order fulfillment",
      "Optimized responsive layout with seamless mobile-to-desktop navigation"
    ]
  },
  {
    id: "billing-app",
    title: "Billing App",
    subtitle: "Hotel Essentials Delivery & Invoice Generation System",
    category: "web",
    featured: true,
    description: "A comprehensive billing application engineered specifically for hotel essentials delivery. Enables users to manage product inventories, specify delivery quantities, calculate itemized totals with taxes, and generate downloadable customer bills efficiently.",
    tags: ["Python", "MySQL", "Web Technologies", "Billing Engine", "Invoice PDF"],
    github: "https://github.com/Saikamlesh-git/Billing_App",
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    highlights: [
      "Automated total billing computation with dynamic quantity adjustments",
      "Real-time item search and instant customer receipt generation",
      "Robust data handling with structured relational storage"
    ]
  },
  {
    id: "leave-approval",
    title: "Leave Approval System",
    subtitle: "Full-Stack Enterprise Workflow & Role-Based Leave Management",
    category: "fullstack",
    featured: true,
    description: "An academic full-stack web application designed to automate employee leave requests, hierarchical approval flows, and live leave balance tracking. Features role-based access control (RBAC) separating employees and managers with secure RESTful APIs.",
    tags: ["Java", "MySQL", "HTML/CSS", "REST APIs", "RBAC Security"],
    github: "https://github.com/Saikamlesh-git/Leave-Approval-System",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    highlights: [
      "Role-based access control protecting employee & administrative actions",
      "Clean RESTful endpoints delivering fast request-approval cycles",
      "Automated leave quota calculation and historical status logging"
    ]
  },
  {
    id: "sculptor-machine",
    title: "Sculptor Cutting Machine with Built-in Water Pipe",
    subtitle: "IAP Team Innovation Project – Environmental Safety Prototype",
    category: "hardware",
    featured: false,
    description: "Designed and developed a specialized sculptor cutting machine integrated with an active water-pipe system. Drastically reduces airborne stone and marble dust particles during precision cutting, significantly improving technician health and work environment safety.",
    tags: ["Hardware Prototyping", "Environmental Safety", "Team Engineering", "Systems Design"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    highlights: [
      "Integrated targeted water nozzle suppression mechanism",
      "Drastic reduction in respiratory particulate hazards during cutting",
      "Collaborative prototype build, assembly testing, and safety validation"
    ]
  }
];

export const experienceData = [
  {
    role: "Technical Intern",
    company: "DBSol Technologies Pvt. Ltd.",
    location: "Chennai, TN",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    description: "Supported enterprise workplace operations and digital productivity workflows in a professional software environment.",
    points: [
      "Supported enterprise workplace operations using Microsoft 365 applications including Word, Excel, PowerPoint, and Teams.",
      "Managed documents, spreadsheets, and reporting workflows while collaborating across teams to improve digital productivity.",
      "Gained practical exposure to professional software environments, communication standards, and team-based task execution."
    ],
    tools: ["Microsoft 365", "Excel", "Teams", "PowerPoint", "Document Workflows"]
  },
  {
    role: "Digital Content Creator & Designer",
    company: "Client Projects (Freelance)",
    location: "Chennai, TN",
    period: "Ongoing / Freelance",
    type: "Freelance",
    description: "Delivering end-to-end creative graphic design, social media visuals, and video editing for small businesses and clients.",
    points: [
      "Designed social media graphics, posters, and UI assets for small business clients using Figma and Adobe Creative Cloud.",
      "Edited short promotional videos for shops and small businesses to boost engagement and brand reach.",
      "Assisted in digital marketing campaigns by creating engaging visual content; collaborated directly with clients to satisfy branding requirements within strict deadlines."
    ],
    tools: ["Figma", "Canva", "Adobe Photoshop", "CapCut", "Adobe Premiere Pro"]
  }
];

export const certificatesData = [
  {
    title: "Apache Spark",
    issuer: "Databricks",
    badge: "Big Data & Distributed Computing",
    description: "Foundational training in distributed data processing, resilient distributed datasets (RDDs), Spark SQL, and parallel computing architectures.",
    tags: ["Apache Spark", "Big Data", "Databricks", "Distributed Processing"],
    gradient: "from-orange-500 to-red-600",
    icon: "Flame",
    pdfUrl: "/saikamlesh_databrick.pdf"
  },
  {
    title: "Hadoop 101",
    issuer: "IBM",
    badge: "Enterprise Data Analytics",
    description: "Comprehensive introduction to the Apache Hadoop ecosystem, HDFS storage architecture, MapReduce paradigms, and big data clusters.",
    tags: ["Hadoop", "HDFS", "IBM Cloud", "MapReduce"],
    gradient: "from-blue-600 to-indigo-700",
    icon: "Server",
    pdfUrl: "/saikamlesh_hadoop.pdf"
  }
];

export const servicesData = [
  {
    title: "Web Development",
    icon: "Code",
    description: "Building responsive, modern, and high-performance websites and web applications with clean code, modern stacks, and REST APIs.",
    deliverables: ["Full-Stack Applications", "Responsive Web Design", "Database Integration", "Interactive Frontend (React)"],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "UI/UX Design",
    icon: "Layout",
    description: "Crafting intuitive, user-centric interfaces, design systems, and wireframes that turn complex ideas into seamless user experiences.",
    deliverables: ["Figma Prototypes", "Wireframing & Flowcharts", "Design Systems", "Usability & Accessibility"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Graphic Design",
    icon: "Palette",
    description: "Creating eye-catching promotional posters, social media creatives, brand identities, and vector assets for businesses.",
    deliverables: ["Social Media Creatives", "Business Branding & Logos", "Event Posters & Banners", "Marketing Visuals"],
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "Video Editing",
    icon: "Film",
    description: "Editing dynamic video content, promotional reels, and engaging social clips with seamless transitions, sound design, and color grading.",
    deliverables: ["Social Media Reels & Shorts", "Promotional Business Videos", "Transitions & Motion Cuts", "Audio Sync & Subtitles"],
    gradient: "from-rose-500 to-red-600"
  }
];
