export interface ProjectArchitectureStep {
  label: string;
  sublabel: string;
  role: string;
  color: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: "AI / ML" | "FULL STACK" | "BACKEND" | "DATA";
  categoryLabel: string;
  statusTag?: string; // e.g. "Featured Case Study", "Learning Project", "Exploration"
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureSteps?: ProjectArchitectureStep[];
  caseStudy: {
    problem: string;
    goal: string;
    approach: string;
    architectureDescription: string;
    keyImplementation: string[];
    challenges: string[];
    outcome: string;
    whatILearned: string;
    codeSnippet?: {
      title: string;
      language: string;
      code: string;
    };
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "smartgap-ai",
    number: "01",
    title: "SmartGap AI",
    category: "AI / ML",
    categoryLabel: "AI / Education / Full Stack",
    statusTag: "Ideathon Winning Concept",
    description:
      "An AI-powered educational platform designed to improve student–teacher communication and academic assistance through intelligent recommendation workflows.",
    highlights: [
      "Intelligent educational workflows",
      "Academic assistance & query routing",
      "Student–teacher communication portal",
      "Scalable multi-tier application design",
      "Recommendation-oriented learning experience",
    ],
    technologies: ["Python", "AI/ML", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/IdeaThon-Decoders",
    architectureSteps: [
      { label: "Student & Faculty Client", sublabel: "React Interface", role: "UI / Interaction", color: "#00F2FE" },
      { label: "API Gateway & Router", sublabel: "Node.js & Express", role: "Auth & Orchestration", color: "#4FACFE" },
      { label: "AI Recommendation Engine", sublabel: "Python ML Worker", role: "Analysis & Matching", color: "#8B5CF6" },
      { label: "Knowledge Database", sublabel: "MongoDB Cluster", role: "Persistent Storage", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Traditional classroom environments often struggle with asynchronous query resolution and personalized student academic support, creating communication bottlenecks between students and educators.",
      goal:
        "Build an intelligent assistive educational architecture that streamlines academic query handling, bridges student-teacher communication gaps, and recommends targeted study topics.",
      approach:
        "Decomposed the system into an accessible React frontend, an asynchronous Node.js controller backend, and a Python-powered analytical engine that categorizes student inquiries and provides contextual academic assistance.",
      architectureDescription:
        "Users submit queries via a responsive interface. The Node.js server routes the query to MongoDB for persistent record-keeping while dispatching academic context payloads to the Python intelligence pipeline for recommendation matching.",
      keyImplementation: [
        "Structured REST API routes handling student submission, instructor response feeds, and topic categorization.",
        "Python analytical module for topic vectorization and contextual academic mapping.",
        "MongoDB schema models for structured query tickets, interaction threads, and topic tags.",
        "Intuitive React dashboard with real-time query status indicators.",
      ],
      challenges: [
        "Ensuring smooth asynchronous communication between Node.js API endpoints and Python ML scripts without blocking the event loop.",
        "Designing a flexible database schema capable of handling diverse academic subjects and multi-tiered discussion threads.",
      ],
      outcome:
        "Successfully developed and showcased the prototype at Ideathon, earning 1st Place for innovative approach toward Quality Education.",
      whatILearned:
        "Gained deep insight into multi-service application design, bridging full-stack web platforms with Python AI modules, and designing user-centric workflows for education.",
      codeSnippet: {
        title: "Query Dispatch & Intelligence Pipeline Contract",
        language: "javascript",
        code: `// Express route handling academic query intake & async dispatch
router.post("/api/queries/submit", async (req, res) => {
  try {
    const { studentId, subject, queryText, priority } = req.body;
    
    // 1. Persist initial query record in MongoDB
    const newQuery = await QueryTicket.create({
      studentId,
      subject,
      queryText,
      status: "QUEUED",
      createdAt: new Date(),
    });

    // 2. Dispatch payload to intelligence analysis worker
    const aiInsight = await dispatchToPythonWorker({
      queryId: newQuery._id,
      text: queryText,
      domain: subject
    });

    // 3. Update query status with recommended topics
    newQuery.suggestedTopics = aiInsight.recommendedTopics;
    newQuery.status = "ANALYZED";
    await newQuery.save();

    return res.status(201).json({ success: true, query: newQuery });
  } catch (err) {
    return res.status(500).json({ error: "Pipeline processing failed" });
  }
});`,
      },
    },
  },
  {
    id: "smartparking-system",
    number: "02",
    title: "SmartParking System",
    category: "FULL STACK",
    categoryLabel: "Full Stack / Intelligent Systems",
    statusTag: "System Architecture",
    description:
      "Smart parking management system designed to optimize parking space utilization with real-time slot allocation and vehicle management.",
    highlights: [
      "Intelligent parking slot allocation algorithm",
      "Real-time parking availability monitoring",
      "Vehicle check-in/check-out lifecycle management",
      "Responsive administrative dashboard",
      "Robust MERN backend services",
      "Optimized space utilization logic",
    ],
    technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/addadugurudurga2024-lang",
    architectureSteps: [
      { label: "User / Driver Client", sublabel: "React Web App", role: "Interface & Status", color: "#00F2FE" },
      { label: "Frontend Controller", sublabel: "State & Socket Hooks", role: "Client State", color: "#4FACFE" },
      { label: "Backend API Layer", sublabel: "Express REST Engine", role: "Validation & Auth", color: "#8B5CF6" },
      { label: "Allocation Logic", sublabel: "Proximity & Priority Engine", role: "Slot Optimization", color: "#F59E0B" },
      { label: "MongoDB Database", sublabel: "Parking Grid Collection", role: "Live State Storage", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Urban and campus parking facilities suffer from inefficient manual slot allocation, leading to traffic congestion, vacant space underutilization, and lack of real-time visibility.",
      goal:
        "Engineer a centralized MERN-stack system that models parking grids dynamically, calculates optimal slot allocations, and updates availability in real time.",
      approach:
        "Architected an allocation algorithm based on zone proximity and vehicle dimension constraints, backed by a high-throughput REST API and responsive React interface.",
      architectureDescription:
        "User → Frontend Client → REST API Gateway → Allocation Optimization Logic → MongoDB Cluster. State transitions (Occupied, Reserved, Available) are managed with strict concurrency checks.",
      keyImplementation: [
        "Grid modeling engine mapping multi-floor parking bays with status indexing.",
        "Allocation algorithm finding the closest vacant slot matching vehicle specifications.",
        "Express REST endpoints for real-time check-in, duration tracking, and checkout bill calculation.",
        "MongoDB atomic updates ensuring zero double-booking under concurrent entry requests.",
      ],
      challenges: [
        "Preventing race conditions when multiple users attempt to reserve the same optimal parking slot simultaneously.",
        "Maintaining responsive UI state synchronization during rapid slot status transitions.",
      ],
      outcome:
        "Delivered a reliable end-to-end full-stack prototype demonstrating streamlined parking management and deterministic slot allocation.",
      whatILearned:
        "Mastered state consistency in full-stack applications, relational-like constraints in document databases, and practical algorithmic allocation design.",
      codeSnippet: {
        title: "Atomic Slot Allocation Routine",
        language: "javascript",
        code: `// Atomic allocation logic with concurrency guard
async function allocateOptimalSlot(vehicleType, preferredZone) {
  // Find closest available slot matching criteria and atomically mark as RESERVED
  const slot = await ParkingSlot.findOneAndUpdate(
    {
      status: "AVAILABLE",
      zone: preferredZone,
      supportedType: vehicleType,
    },
    {
      $set: {
        status: "RESERVED",
        reservedAt: new Date(),
      }
    },
    {
      sort: { distanceToEntry: 1 }, // Pick nearest bay
      new: true,
    }
  );

  if (!slot) {
    throw new Error("No vacant slot matching criteria in requested zone");
  }

  return slot;
}`,
      },
    },
  },
  {
    id: "project-management-system",
    number: "03",
    title: "Project Management & Issue Tracker",
    category: "BACKEND",
    categoryLabel: "Full Stack / Backend Systems",
    statusTag: "Production Workflow",
    description:
      "Full-stack platform for task assignment, issue tracking, and project monitoring through a centralized dashboard with validated REST APIs.",
    highlights: [
      "Modular React frontend dashboard",
      "Structured Node.js / Express backend",
      "RESTful API architecture with CRUD validation",
      "MongoDB document persistence with schema integrity",
      "Rigorous Postman API validation & test suites",
      "Centralized project and task status monitoring",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Postman"],
    githubUrl: "https://github.com/addadugurudurga2024-lang",
    architectureSteps: [
      { label: "Dashboard Client", sublabel: "React Components", role: "Kanban & Lists", color: "#00F2FE" },
      { label: "REST Controller", sublabel: "Express Middleware", role: "Schema Validation", color: "#4FACFE" },
      { label: "Issue Management Core", sublabel: "Business Services", role: "State Machine", color: "#8B5CF6" },
      { label: "Database Layer", sublabel: "MongoDB Schemas", role: "Document Store", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Development teams need transparent task status visibility, unambiguous issue reporting, and structured lifecycle management without cluttered enterprise overhead.",
      goal:
        "Build a clean, responsive full-stack project tracking application with robust RESTful APIs, strict schema validation, and organized status workflows.",
      approach:
        "Designed a decoupled architecture featuring an Express backend with specialized routes for Projects, Tasks, and Issues, rigorously validated via Postman, paired with a clean React frontend.",
      architectureDescription:
        "Client requests pass through authentication and validation middleware, hit controller functions containing issue state transitions (Open → In Progress → Review → Closed), and update MongoDB collections.",
      keyImplementation: [
        "Structured REST endpoints for projects, tasks, comments, and priority filtering.",
        "Mongoose schemas with strict field typing and relationship references.",
        "Comprehensive Postman test collection verifying status codes, payload structures, and error handlers.",
        "Interactive board view in React with real-time status filtering and priority badges.",
      ],
      challenges: [
        "Designing flexible database schemas to support subtasks and dynamic issue metadata without performance degradation.",
        "Implementing consistent error-handling middleware returning actionable JSON error structures.",
      ],
      outcome:
        "Constructed a reliable project monitoring platform demonstrating clean REST API design, predictable state transitions, and high developer ergonomics.",
      whatILearned:
        "Deepened practical understanding of REST architectural constraints, Postman contract testing, and maintainable backend service layering.",
      codeSnippet: {
        title: "Issue State Transition Controller",
        language: "javascript",
        code: `// Issue status transition controller with validation
exports.updateIssueStatus = async (req, res) => {
  const { id } = req.params;
  const { nextStatus, resolutionNotes } = req.body;
  const VALID_STATUSES = ["OPEN", "IN_PROGRESS", "IN_REVIEW", "RESOLVED", "CLOSED"];

  if (!VALID_STATUSES.includes(nextStatus)) {
    return res.status(400).json({ error: "Invalid status transition requested" });
  }

  const issue = await Issue.findById(id);
  if (!issue) return res.status(404).json({ error: "Issue not found" });

  issue.status = nextStatus;
  issue.history.push({
    transitionedTo: nextStatus,
    timestamp: new Date(),
    notes: resolutionNotes || ""
  });

  await issue.save();
  return res.json({ success: true, issue });
};`,
      },
    },
  },
  {
    id: "heart-disease-prediction",
    number: "04",
    title: "Heart Disease Prediction",
    category: "DATA",
    categoryLabel: "Machine Learning / Clinical Data",
    statusTag: "ML Pipeline",
    description:
      "Supervised machine learning pipeline evaluating clinical indicators (cholesterol, blood pressure, ECG) to predict cardiovascular risk.",
    highlights: [
      "Exploratory data analysis & statistical distribution inspection",
      "Feature correlation matrices and outlier cleaning with Pandas/NumPy",
      "Supervised classification model training with Scikit-learn",
      "Model evaluation using confusion matrix, precision, and recall metrics",
      "Visualized diagnostic insights with Matplotlib and Seaborn",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/codealpha_task1_Heart_Disease_Prediction",
    architectureSteps: [
      { label: "Clinical Data Ingestion", sublabel: "Pandas DataFrame", role: "Raw Data Load", color: "#00F2FE" },
      { label: "Feature Engineering", sublabel: "Imputation & Scaling", role: "Standardization", color: "#4FACFE" },
      { label: "Model Training", sublabel: "Scikit-learn Classifiers", role: "Supervised Fit", color: "#8B5CF6" },
      { label: "Evaluation & Metrics", sublabel: "Confusion Matrix & ROC", role: "Validation", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Early identification of cardiovascular disease is critical for preventive clinical intervention, requiring accurate analytical evaluation of multifaceted patient biomarkers.",
      goal:
        "Develop an end-to-end Python machine learning pipeline that preprocesses clinical health data and trains classification models to identify cardiovascular risks.",
      approach:
        "Conducted thorough exploratory analysis of patient features, normalized numerical attributes, encoded categorical health indicators, and benchmarked classification algorithms.",
      architectureDescription:
        "CSV Ingestion → Missing Value Imputation → StandardScaler Normalization → Train/Test Split → Scikit-learn Classifier → Evaluation Metrics & Visualization.",
      keyImplementation: [
        "Data cleaning and correlation heatmaps generated using Seaborn.",
        "Standardized scaling for resting BP, cholesterol, and maximum heart rate.",
        "Trained multiple classification models and evaluated accuracy and F1-score.",
        "Generated confusion matrices to inspect false-negative rates for medical safety awareness.",
      ],
      challenges: [
        "Handling feature collinearity and balancing medical risk tolerance regarding false-negative predictions.",
      ],
      outcome:
        "Built an interpretable, reproducible machine learning notebook pipeline highlighting the role of key clinical features in cardiovascular health prediction.",
      whatILearned:
        "Learned practical data science hygiene: data leakage prevention, proper feature scaling, and medical domain metric interpretation.",
    },
  },
  {
    id: "credit-scoring-prediction",
    number: "05",
    title: "Credit Scoring Prediction",
    category: "DATA",
    categoryLabel: "Machine Learning / Financial Analytics",
    statusTag: "ML Pipeline",
    description:
      "Predictive classification system analyzing applicant financial records, payment history, and credit parameters to evaluate creditworthiness.",
    highlights: [
      "Financial dataset feature engineering & categorical encoding",
      "Handling class imbalance and skewed financial distributions",
      "Supervised credit scoring model training with Scikit-learn",
      "Model interpretability and feature importance ranking",
      "Matplotlib distribution and risk correlation visualizations",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/codealpha_task2_Credit_Scoring_Prediction",
    architectureSteps: [
      { label: "Financial Data Pipeline", sublabel: "Pandas Ingestion", role: "Data Cleaning", color: "#00F2FE" },
      { label: "Encoding & Scaling", sublabel: "One-Hot / Ordinal / Scaler", role: "Transformation", color: "#4FACFE" },
      { label: "Predictive Modeling", sublabel: "Classification Algorithms", role: "Risk Scoring", color: "#8B5CF6" },
      { label: "Risk Stratification", sublabel: "Decision Boundary Analysis", role: "Decision Engine", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Financial institutions require objective, data-driven frameworks to assess customer credit default probability and assign reliable credit ratings.",
      goal:
        "Build a machine learning pipeline that parses complex credit and debt history features to categorize credit score tiers accurately.",
      approach:
        "Applied statistical cleaning to handle skewed income distributions, encoded credit rating categories, and trained classification estimators using Scikit-learn.",
      architectureDescription:
        "Raw Data → Feature Cleaning & Imputation → Categorical Encoding → Stratified K-Fold Split → Model Fit → Score Classification.",
      keyImplementation: [
        "Feature scaling and outlier trimming on high-variance financial indicators.",
        "Categorical encoding for payment behaviors and employment histories.",
        "Classification modeling with feature importance analysis.",
      ],
      challenges: [
        "Managing non-linear feature interactions between debt ratios, credit age, and missed payment frequencies.",
      ],
      outcome:
        "Delivered a structured financial scoring pipeline with transparent metric evaluations and feature importance insights.",
      whatILearned:
        "Understood financial modeling heuristics, class-stratified validation, and preprocessing techniques for mixed-type datasets.",
    },
  },
  {
    id: "handwritten-character-recognition",
    number: "06",
    title: "Handwritten Character Recognition",
    category: "AI / ML",
    categoryLabel: "Machine Learning / Computer Vision",
    statusTag: "Computer Vision",
    description:
      "Image classification system recognizing handwritten characters from pixel grid data and 2D image arrays using machine learning classifiers.",
    highlights: [
      "Image matrix normalization and grayscale pixel flattening",
      "Multidimensional array manipulation with NumPy",
      "Multi-class character classification with Scikit-learn",
      "Visualizing predicted vs actual character matrices with Matplotlib",
      "Exploring foundational computer vision patterns",
    ],
    technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/codealpha_task3_Handwritten_Character_Recognition",
    architectureSteps: [
      { label: "Pixel Matrix Ingestion", sublabel: "Grayscale 2D Arrays", role: "Image Load", color: "#00F2FE" },
      { label: "Pixel Normalization", sublabel: "NumPy Vectorization", role: "[0, 1] Rescaling", color: "#4FACFE" },
      { label: "Multi-class Classifier", sublabel: "Scikit-learn Estimator", role: "Pattern Recognition", color: "#8B5CF6" },
      { label: "Prediction Inspection", sublabel: "Matplotlib Render", role: "Visual Verification", color: "#10B981" },
    ],
    caseStudy: {
      problem:
        "Digitizing handwritten textual characters requires extracting robust visual patterns from varying handwriting styles, stroke thickness, and noise.",
      goal:
        "Construct a machine learning pipeline that transforms 2D image matrices into feature vectors and classifies handwritten characters accurately.",
      approach:
        "Normalized raw grayscale pixel intensity values to a [0, 1] floating-point distribution, flattened image matrices into feature vectors, and trained multi-class estimators.",
      architectureDescription:
        "Handwritten Image Data → Grayscale Normalization → 1D Vector Reshaping → Supervised Multi-class Fit → Character Prediction & Inspection.",
      keyImplementation: [
        "Vectorized image transformations using NumPy array operations.",
        "Multi-class classification evaluating character prediction accuracy across character sets.",
        "Interactive Matplotlib plotting displaying test sample images alongside predicted labels.",
      ],
      challenges: [
        "Handling pixel variance in ambiguous character shapes (e.g., 'O' vs '0' or 'I' vs '1').",
      ],
      outcome:
        "Created an educational computer vision pipeline demonstrating fundamental image classification concepts and pixel-level feature extraction.",
      whatILearned:
        "Gained foundational hands-on experience with raster image manipulation, vector representations of visual data, and classification boundaries.",
    },
  },
  {
    id: "student-analyzer",
    number: "07",
    title: "Student Analyzer",
    category: "DATA",
    categoryLabel: "Data Analytics / Academic Software",
    statusTag: "Data Analytics",
    description:
      "Academic performance analytics platform evaluating student metric distributions, subject-wise variance, and identifying learning intervention areas.",
    highlights: [
      "Structured grade and attendance data parsing",
      "Subject-wise statistical aggregation & distribution analysis",
      "Automated summary report generation",
      "Visual metric graphs using Matplotlib and analytical charts",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/Student_Analzyer_FinalReview",
    caseStudy: {
      problem:
        "Educators require rapid aggregate insights into classroom performance trends to identify struggling students early and adjust pedagogical pace.",
      goal:
        "Develop an analytical software tool that processes academic score datasets and provides visual distributions and performance summaries.",
      approach:
        "Engineered Pandas aggregation pipelines computing statistical metrics (mean, median, variance, quantile splits) across course modules.",
      architectureDescription:
        "Student Records → Aggregation Engine → Statistical Breakdown → Matplotlib Visual Dashboards.",
      keyImplementation: [
        "Batch student grade ingestion and missing data reconciliation.",
        "Comparative percentile ranking and subject-wise difficulty index calculation.",
        "Clear visualization plots for class distributions.",
      ],
      challenges: ["Handling varying course grading scales and incomplete academic assessment logs."],
      outcome:
        "Provided an automated analytics tool that generates clear academic performance summaries.",
      whatILearned:
        "Enhanced skills in exploratory data analysis, data aggregation, and presenting statistical insights clearly.",
    },
  },
  {
    id: "nutritionai-estimation",
    number: "08",
    title: "NutritionAI Food Estimation",
    category: "AI / ML",
    categoryLabel: "AI / Vision Exploration",
    statusTag: "Exploration / Prototype",
    description:
      "Exploratory AI model prototype designed for estimating dietary parameters and nutritional composition from food item descriptions.",
    highlights: [
      "Exploratory nutritional dataset modeling",
      "Nutrient parameter mapping algorithms",
      "Experimental classification workflows",
      "Foundation for dietary estimation applications",
    ],
    technologies: ["Python", "Machine Learning", "Data Processing"],
    githubUrl: "https://github.com/addadugurudurga2024-lang/NutritionAI_Food_Estimation",
    caseStudy: {
      problem:
        "Estimating accurate macronutrient and caloric values from heterogeneous food descriptions is challenging due to recipe variance and portion ambiguity.",
      goal:
        "Explore machine learning mapping models to estimate caloric and nutritional ranges from structured food item features.",
      approach:
        "Modeled nutrition database records to benchmark feature extraction for caloric estimation.",
      architectureDescription:
        "Food Parameter Input → Feature Normalization → Estimation Engine → Nutrient Breakdown.",
      keyImplementation: [
        "Nutritional dataset cleaning and categorical food group mapping.",
        "Exploratory regression and classification routines for caloric approximation.",
      ],
      challenges: ["Handling wide ingredient variances across culinary cuisines and missing sub-nutrient entries."],
      outcome:
        "Developed an exploratory experimental pipeline for dietary data modeling.",
      whatILearned:
        "Explored domain challenges in computer-assisted dietary estimation and multi-target regression modeling.",
    },
  },
];
