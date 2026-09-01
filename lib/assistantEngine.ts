import { PERSONAL_INFO, ENGINEERING_FOCUS, SKILLS_MATRIX, ACHIEVEMENTS, LEARNING_JOURNEY } from "@/data/portfolioData";
import { PROJECTS_DATA } from "@/data/projectsData";

export interface AssistantQA {
  keywords: string[];
  response: string;
  category: "General" | "Projects" | "Skills" | "Education" | "Contact" | "Achievements";
  followUps?: string[];
}

export const PRESET_QUESTIONS = [
  "Tell me about Abhishek.",
  "What projects has he built?",
  "What is his ML & AI experience?",
  "What are his core programming skills?",
  "Where does he study & what is his CGPA?",
  "What achievements does he have?",
  "How can I contact or hire him?",
];

export function queryAssistant(rawQuery: string): {
  answer: string;
  category: string;
  suggestedQuestions: string[];
} {
  const query = rawQuery.toLowerCase().trim();

  // 1. Abhishek Overview / About
  if (
    query.includes("abhishek") ||
    query.includes("who is") ||
    query.includes("tell me about") ||
    query.includes("background") ||
    query.includes("profile") ||
    query.includes("summary")
  ) {
    return {
      answer: `**${PERSONAL_INFO.name}** is a B.Tech Computer Science Engineering student at **${PERSONAL_INFO.education.institution}** (${PERSONAL_INFO.education.period}) with a **${PERSONAL_INFO.education.cgpa} / 10 CGPA**.\n\nHe is focused on **AI/ML, Software Engineering, and Full-Stack Development**, with practical foundations in Java, Python, React, Node.js, and Machine Learning. His philosophy is *"I build to understand"*—turning ideas into verifiable working software.`,
      category: "General",
      suggestedQuestions: [
        "What projects has he built?",
        "What is his ML & AI experience?",
        "Where does he study & what is his CGPA?",
      ],
    };
  }

  // 2. Projects
  if (
    query.includes("project") ||
    query.includes("work") ||
    query.includes("portfolio") ||
    query.includes("smartgap") ||
    query.includes("parking") ||
    query.includes("tracker")
  ) {
    const projectList = PROJECTS_DATA.slice(0, 4)
      .map((p) => `• **${p.title}** (${p.categoryLabel}): ${p.description}`)
      .join("\n");

    return {
      answer: `Abhishek has developed several full-stack and AI/ML applications:\n\n${projectList}\n\nAll projects emphasize clean architecture, REST API validation, and verifiable GitHub source code.`,
      category: "Projects",
      suggestedQuestions: [
        "Tell me about SmartGap AI",
        "Tell me about SmartParking System",
        "What is his ML & AI experience?",
      ],
    };
  }

  // 3. SmartGap AI specific
  if (query.includes("smartgap") || query.includes("ideathon")) {
    const p = PROJECTS_DATA.find((item) => item.id === "smartgap-ai");
    return {
      answer: `**SmartGap AI** is an AI-powered educational platform designed to improve student–teacher communication and academic assistance through intelligent recommendation workflows.\n\n• **Stack**: Python, AI/ML, React, Node.js, MongoDB\n• **Recognition**: Awarded **1st Place Winner** at Ideathon (Theme: Quality Education)\n• **Architecture**: Connects a React frontend, Node.js API router, and Python ML recommendation worker with MongoDB persistent storage.`,
      category: "Projects",
      suggestedQuestions: [
        "What other projects has he built?",
        "What are his achievements?",
      ],
    };
  }

  // 4. SmartParking System specific
  if (query.includes("parking") || query.includes("smartparking")) {
    return {
      answer: `**SmartParking System** is a full-stack intelligent parking management solution built with the **MERN Stack** (React, Node.js, Express, MongoDB).\n\n• **Features**: Real-time availability tracking, proximity-based slot allocation algorithm, vehicle lifecycle management, and atomic concurrency guards to prevent double booking.`,
      category: "Projects",
      suggestedQuestions: [
        "What other projects has he built?",
        "What are his core programming skills?",
      ],
    };
  }

  // 5. ML & AI Experience
  if (
    query.includes("ml") ||
    query.includes("machine learning") ||
    query.includes("ai") ||
    query.includes("scikit") ||
    query.includes("pandas") ||
    query.includes("python")
  ) {
    return {
      answer: `Abhishek has hands-on machine learning experience spanning:\n\n• **Supervised & Unsupervised Modeling**: Regression, Classification, and Clustering with **Scikit-learn**\n• **Data Engineering & Preprocessing**: Data cleaning, scaling, feature correlation, and exploratory analysis with **Pandas & NumPy**\n• **Data Visualization**: Statistical plots, distributions, and heatmaps with **Matplotlib & Seaborn**\n• **Applied Pipelines**: Heart Disease Risk Prediction, Credit Scoring Classification, and Handwritten Character Recognition.\n\nHe is also actively studying Deep Learning, CNNs, Transformers, and Retrieval-Augmented Generation (RAG).`,
      category: "Skills",
      suggestedQuestions: [
        "What is he currently learning?",
        "What projects has he built?",
        "What are his core programming skills?",
      ],
    };
  }

  // 6. Programming / Skills / Tech Arsenal
  if (
    query.includes("skill") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("java") ||
    query.includes("react") ||
    query.includes("node") ||
    query.includes("database") ||
    query.includes("dsa")
  ) {
    return {
      answer: `Abhishek's technical stack is categorized across:\n\n• **Languages**: Java, Python, JavaScript\n• **Core CS**: Data Structures & Algorithms, OOP, DBMS, Computer Networks\n• **Frontend**: React.js, HTML5, CSS3\n• **Backend & DB**: Node.js, Express.js, MongoDB\n• **Machine Learning**: NumPy, Pandas, Scikit-learn, Data Preprocessing\n• **Tools**: Git, GitHub, Postman`,
      category: "Skills",
      suggestedQuestions: [
        "What is his ML & AI experience?",
        "What projects has he built?",
        "Where does he study & what is his CGPA?",
      ],
    };
  }

  // 7. Education & Academics
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("university") ||
    query.includes("vit") ||
    query.includes("cgpa") ||
    query.includes("gpa") ||
    query.includes("study")
  ) {
    return {
      answer: `**Academic Profile**:\n\n• **Institution**: ${PERSONAL_INFO.education.institution}\n• **Degree**: ${PERSONAL_INFO.education.degree}\n• **Graduation Timeline**: ${PERSONAL_INFO.education.period}\n• **CGPA**: **${PERSONAL_INFO.education.cgpa} / 10**\n• **Location**: ${PERSONAL_INFO.location}\n• **Key Academic Focus**: AI/ML, Software Engineering, DSA, OOP, DBMS, Computer Networks.`,
      category: "Education",
      suggestedQuestions: [
        "What achievements does he have?",
        "What are his core programming skills?",
        "How can I contact or hire him?",
      ],
    };
  }

  // 8. Achievements & Certifications
  if (
    query.includes("achievement") ||
    query.includes("award") ||
    query.includes("cert") ||
    query.includes("nptel") ||
    query.includes("winner")
  ) {
    const list = ACHIEVEMENTS.map(
      (a) => `• **${a.title}** (${a.subtitle}): ${a.description}`
    ).join("\n\n");

    return {
      answer: `Verified Achievements:\n\n${list}`,
      category: "Achievements",
      suggestedQuestions: [
        "Tell me about SmartGap AI",
        "Where does he study & what is his CGPA?",
        "How can I contact or hire him?",
      ],
    };
  }

  // 9. Currently Learning / Growing
  if (
    query.includes("learning") ||
    query.includes("growing") ||
    query.includes("future") ||
    query.includes("deep learning") ||
    query.includes("rag") ||
    query.includes("llm")
  ) {
    const learningList = LEARNING_JOURNEY.map(
      (item) => `• **${item.topic}** [${item.status}]: ${item.description}`
    ).join("\n");

    return {
      answer: `Abhishek is actively expanding his knowledge in emerging AI/ML disciplines:\n\n${learningList}`,
      category: "Skills",
      suggestedQuestions: [
        "What is his ML & AI experience?",
        "What projects has he built?",
      ],
    };
  }

  // 10. Contact & Profiles
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("hire") ||
    query.includes("reach") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("leetcode")
  ) {
    return {
      answer: `You can reach **${PERSONAL_INFO.name}** directly through:\n\n• **Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n• **Phone**: [${PERSONAL_INFO.phone}](tel:6303731166)\n• **LinkedIn**: [${PERSONAL_INFO.socials.linkedin.handle}](${PERSONAL_INFO.socials.linkedin.url})\n• **GitHub**: [${PERSONAL_INFO.socials.github.username}](${PERSONAL_INFO.socials.github.url})\n• **LeetCode**: [${PERSONAL_INFO.socials.leetcode.username}](${PERSONAL_INFO.socials.leetcode.url})\n• **Location**: ${PERSONAL_INFO.location}`,
      category: "Contact",
      suggestedQuestions: [
        "Tell me about Abhishek.",
        "What projects has he built?",
        "Where does he study & what is his CGPA?",
      ],
    };
  }

  // Fallback (strict deterministic boundary, zero hallucination)
  return {
    answer: `I don't have that specific information in Abhishek's verified portfolio data.\n\nYou can ask about his **projects**, **machine learning skills**, **full-stack stack**, **education at VIT Chennai (8.30 CGPA)**, or **contact channels**.`,
    category: "General",
    suggestedQuestions: [
      "Tell me about Abhishek.",
      "What projects has he built?",
      "What is his ML & AI experience?",
      "How can I contact or hire him?",
    ],
  };
}
