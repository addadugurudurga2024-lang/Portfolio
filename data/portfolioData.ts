export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string;
  statusBadges: string[];
  location: string;
  email: string;
  phone: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    maxCgpa: string;
    focusAreas: string[];
  };
  socials: {
    github: { username: string; url: string; label: string };
    linkedin: { handle: string; url: string; label: string };
    leetcode: { username: string; url: string; label: string };
  };
  summary: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "A D S ABHISHEK",
  shortName: "ADS.",
  role: "Computer Science Student | AI/ML & Software Engineering Enthusiast",
  tagline: "AI/ML • Software Engineering • Full-Stack Development",
  heroHeadline: "Building intelligent systems. One problem at a time.",
  heroSupporting:
    "Computer Science student at VIT Chennai focused on AI/ML, software engineering, and building practical full-stack applications.",
  statusBadges: [
    "MODEL READY",
    "BUILDING",
    "LEARNING",
    "DEPLOYMENT READY",
  ],
  location: "Rajahmundry, Andhra Pradesh, India",
  email: "addaduguru.durga2024@vitstudent.ac.in",
  phone: "+91 6303731166",
  education: {
    institution: "VIT Chennai",
    degree: "B.Tech Computer Science Engineering",
    period: "2024–2028",
    cgpa: "8.30",
    maxCgpa: "10",
    focusAreas: [
      "AI / Machine Learning",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
    ],
  },
  socials: {
    github: {
      username: "addadugurudurga2024-lang",
      url: "https://github.com/addadugurudurga2024-lang",
      label: "GitHub",
    },
    linkedin: {
      handle: "a-d-sai-abhishek-a589153ab",
      url: "https://www.linkedin.com/in/a-d-sai-abhishek-a589153ab",
      label: "LinkedIn",
    },
    leetcode: {
      username: "durgasaiabhishek",
      url: "https://leetcode.com/u/durgasaiabhishek/",
      label: "LeetCode",
    },
  },
  summary:
    "Motivated B.Tech Computer Science student at VIT Chennai with strong interests in Software Engineering, Artificial Intelligence, and Machine Learning. Strong foundation in Java, Python, Data Structures and Algorithms, and full-stack development. Passionate about building scalable applications and solving real-world problems through technology and data-driven solutions.",
};

export const ENGINEERING_PRINCIPLES = [
  {
    number: "01",
    title: "Understand the problem",
    description: "Deeply decompose system constraints, user requirements, and mathematical/logical edge cases before writing code.",
  },
  {
    number: "02",
    title: "Design the solution",
    description: "Architect clean modular schemas, REST API contracts, and pipeline dataflows to ensure clarity and maintainability.",
  },
  {
    number: "03",
    title: "Build incrementally",
    description: "Develop robust core components iteratively, ensuring verifiable progress and decoupled dependencies.",
  },
  {
    number: "04",
    title: "Test and evaluate",
    description: "Validate endpoints, run data verification, test algorithmic boundary conditions, and benchmark behavior.",
  },
  {
    number: "05",
    title: "Improve",
    description: "Refactor bottlenecks, streamline response latency, enhance UX interactions, and optimize model performance.",
  },
];

export const ENGINEERING_FOCUS = [
  {
    id: "01",
    title: "Machine Learning",
    description:
      "Developing predictive models, data preprocessing pipelines, and exploratory data analysis using Scikit-learn, Pandas, and NumPy.",
    tags: ["NumPy", "Pandas", "Scikit-learn", "Data Preprocessing"],
    icon: "Brain",
  },
  {
    id: "02",
    title: "AI Engineering",
    description:
      "Integrating intelligent processing workflows, recommendation logic, and algorithmic intelligence into interactive applications.",
    tags: ["Intelligent Workflows", "Recommendation Logic", "Python"],
    icon: "Cpu",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    description:
      "Constructing cohesive end-to-end applications connecting modern reactive frontends with structured backend architectures.",
    tags: ["React.js", "Node.js", "Express", "REST APIs"],
    icon: "Layers",
  },
  {
    id: "04",
    title: "Data Structures & Algorithms",
    description:
      "Strengthening fundamental problem-solving efficiency across trees, graphs, dynamic programming, and algorithmic design.",
    tags: ["Java", "Python", "Algorithmic Efficiency", "Problem Solving"],
    icon: "Binary",
  },
  {
    id: "05",
    title: "Backend Development",
    description:
      "Designing structured RESTful APIs, controller logic, schema validation, and secure database interactions with MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB", "Postman"],
    icon: "Server",
  },
  {
    id: "06",
    title: "Problem Solving",
    description:
      "Approaching complex software challenges methodically through structured decomposition, edge-case analysis, and clean code.",
    tags: ["System Thinking", "Clean Code", "Analytical Reasoning"],
    icon: "Workflow",
  },
];

export interface SkillCategory {
  category: string;
  badge: string;
  skills: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    category: "PROGRAMMING",
    badge: "Core Languages",
    skills: [
      { name: "Java", description: "OOP, Data Structures, Algorithmic Problem Solving" },
      { name: "Python", description: "Data Analysis, ML Workflows, Scripting, Automation" },
      { name: "JavaScript", description: "ES6+, Async Programming, DOM, Web Applications" },
    ],
  },
  {
    category: "CORE CS",
    badge: "Computer Science Foundations",
    skills: [
      { name: "Data Structures & Algorithms", description: "Arrays, Linked Lists, Trees, Graphs, DP, Sorting" },
      { name: "Object-Oriented Programming (OOP)", description: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "Database Management Systems (DBMS)", description: "Relational concepts, Normalization, Query optimization, NoSQL" },
      { name: "Computer Networks", description: "OSI Model, TCP/IP, HTTP/HTTPS, Sockets, Protocols" },
    ],
  },
  {
    category: "FRONTEND",
    badge: "User Interface",
    skills: [
      { name: "React.js", description: "Functional Components, Hooks, State Management, SPAs" },
      { name: "HTML5", description: "Semantic Structure, Accessibility, SEO Standards" },
      { name: "CSS3", description: "Flexbox, Grid, Responsive Layouts, Micro-animations" },
    ],
  },
  {
    category: "BACKEND",
    badge: "Server Architecture",
    skills: [
      { name: "Node.js", description: "Event-driven Runtime, Asynchronous I/O, Microservices" },
      { name: "Express.js", description: "RESTful Routing, Middleware, Controller Architecture" },
    ],
  },
  {
    category: "DATABASE",
    badge: "Data Storage",
    skills: [
      { name: "MongoDB", description: "Document Data Modeling, Aggregation Pipelines, Mongoose ODM" },
    ],
  },
  {
    category: "MACHINE LEARNING",
    badge: "Data Science & Modeling",
    skills: [
      { name: "NumPy", description: "Multidimensional Arrays, Linear Algebra, Mathematical Operations" },
      { name: "Pandas", description: "DataFrame Manipulation, Cleaning, Feature Engineering" },
      { name: "Scikit-learn", description: "Model Training, Regression, Classification, Clustering, Metrics" },
      { name: "Data Preprocessing", description: "Normalization, Scaling, Encoding, Imputation, Feature Selection" },
      { name: "Supervised Learning", description: "Linear/Logistic Regression, Decision Trees, Random Forests, SVM" },
      { name: "Unsupervised Learning", description: "K-Means Clustering, PCA Dimensionality Reduction" },
    ],
  },
  {
    category: "VISUALIZATION",
    badge: "Data Exploration",
    skills: [
      { name: "Matplotlib", description: "Statistical Plots, Custom Figures, Publication Visualizations" },
      { name: "Seaborn", description: "Heatmaps, Pairplots, Categorical & Distribution Insights" },
    ],
  },
  {
    category: "TOOLS",
    badge: "Developer Tooling",
    skills: [
      { name: "Git", description: "Version Control, Branching, Merging, Rebase Workflows" },
      { name: "GitHub", description: "Repository Management, Pull Requests, Collaborative Development" },
      { name: "Postman", description: "API Testing, Endpoint Mocking, Schema & Payload Validation" },
    ],
  },
];

export const LEARNING_JOURNEY = [
  {
    topic: "Deep Learning & Neural Networks",
    status: "Learning",
    description: "Studying multi-layer perceptrons, backpropagation mathematics, loss function landscapes, and optimization dynamics.",
  },
  {
    topic: "TensorFlow & Keras",
    status: "Exploring",
    description: "Building experimental neural network topologies for classification and regression tasks.",
  },
  {
    topic: "Computer Vision & CNNs",
    status: "Exploring",
    description: "Understanding convolution operations, pooling layers, image feature extraction, and transfer learning concepts.",
  },
  {
    topic: "Natural Language Processing (NLP)",
    status: "Learning",
    description: "Exploring tokenization, vector embeddings, TF-IDF, sequence models, and contextual text representations.",
  },
  {
    topic: "Transformers & LLM Architectures",
    status: "Current Focus",
    description: "Investigating self-attention mechanisms, encoder-decoder pipelines, and large language model prompting patterns.",
  },
  {
    topic: "Retrieval-Augmented Generation (RAG)",
    status: "Current Focus",
    description: "Experimenting with semantic vector retrieval architectures, chunking strategies, and grounded context augmentation.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "ideathon-winner",
    type: "Award",
    title: "Winner — Ideathon",
    subtitle: "Theme: Quality Education",
    organization: "Hackathon / Competition",
    description:
      "Awarded 1st place for conceiving and architecting an intelligent educational solution addressing student learning gaps, personalized guidance, and academic communication workflows.",
    icon: "Trophy",
    badge: "🏆 1st Place",
  },
  {
    id: "nptel-forest",
    type: "Certification",
    title: "NPTEL: Forest and Management",
    subtitle: "Top 1% Performer",
    organization: "NPTEL / IIT",
    description:
      "Completed rigorous examination with distinction, securing placement among the Top 1% of candidates nationwide in analytical environmental resource modeling and management.",
    icon: "Award",
    badge: "🏅 Top 1%",
  },
];

export const TICKER_ITEMS = [
  "AI / MACHINE LEARNING",
  "SOFTWARE ENGINEERING",
  "DATA STRUCTURES & ALGORITHMS",
  "FULL STACK DEVELOPMENT",
  "PYTHON",
  "JAVA",
  "REACT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "SCIKIT-LEARN",
  "PANDAS & NUMPY",
  "REST APIS",
  "SYSTEM DESIGN",
];
