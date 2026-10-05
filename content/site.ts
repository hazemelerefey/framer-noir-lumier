/**
 * All portfolio content for Youssef Sherif.
 * Sources: his CV (public/youssef-sherif-cv.pdf), his GitHub repositories, and the
 * project READMEs. Figures are quoted from those documents — change them here only.
 */

export const person = {
  name: "Youssef Sherif",
  first: "Youssef",
  role: "Machine Learning Developer",
  roleLong: "Machine Learning Developer · Data Analyst",
  location: "Giza, Egypt",
  city: "Giza",
  timezone: "Africa/Cairo",
  email: "yshreef924@gmail.com",
  phone: "+20 111 584 3771",
  phoneHref: "tel:+201115843771",
  github: "https://github.com/YoussefSherif218",
  linkedin: "https://www.linkedin.com/in/youssefsherif-/",
  cv: "/youssef-sherif-cv.pdf",
  portrait: "/media/portrait.png",
  intro: "A machine learning developer turning raw data into models people can trust.",
  summary:
    "I build predictive models, computer-vision systems and the SQL foundations underneath them — from a published steel-defect detection module to retail segmentation over a million transactions. A biotechnology degree taught me to test every hypothesis; machine learning is where I point that discipline now.",
};

export const socials = [
  { short: "GH", label: "GitHub", href: person.github },
  { short: "IN", label: "LinkedIn", href: person.linkedin },
  { short: "CV", label: "Résumé", href: person.cv },
  { short: "@", label: "Email", href: `mailto:${person.email}` },
];

export const highlights = [
  "81.98% mAP@0.5 on NEU-DET",
  "145 FPS real-time inference",
  "88.9% delay-prediction accuracy",
  "1M+ retail rows modelled",
  "6 classifiers benchmarked",
  "18 tracked experiments",
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  category: string;
  role?: string;
  summary: string;
  cover: string;
  /** Crop anchor for wide posters shown in portrait frames. */
  coverPosition?: string;
  gallery: string[];
  stack: string[];
  repo: string;
  extra?: { label: string; href: string };
  metrics: [string, string][];
  problem: string;
  approach: string[];
  results: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "dafesteel",
    title: "DAFEsteel",
    kicker: "Real-time steel surface defect detection",
    year: "2026",
    category: "Computer Vision · Research",
    role: "Researcher — module architecture & model code (6-person team)",
    summary: "DAFEGate, a morphology-aware plug-in module for YOLOv11n, lifting steel-defect mAP@0.5 from 79.35% to 81.98% on NEU-DET while keeping 145 FPS.",
    cover: "/media/dafesteel-banner.jpg",
    coverPosition: "78% center",
    gallery: ["/media/dafe-architecture.jpg", "/media/dafegate-module.jpg", "/media/dafe-feature-maps.jpg", "/media/dafe-per-class-ap.jpg", "/media/dafe-efficiency.jpg", "/media/dafe-pr-curve.jpg", "/media/dafe-confusion.jpg"],
    stack: ["Python", "PyTorch", "YOLOv11", "Docker", "FastAPI", "Hugging Face"],
    repo: "https://github.com/hazemelerefey/DAFEsteel",
    metrics: [["81.98%", "mAP@0.5"], ["+2.63pp", "over baseline"], ["145", "FPS"]],
    problem: "Hot-rolled steel lines need defect detection that is both accurate and fast enough to run in line. Crazing, scratches and inclusions are thin and edge-driven, while patches and pitted surfaces are textural — a single generic backbone treats them the same.",
    approach: [
      "Designed DAFEGate: dual edge-aware and texture-aware branches fused with squeeze-and-excite attention",
      "Added an additive residual connection so the module plugs into YOLOv11n without hurting gradient flow",
      "Ran 18 tracked experiments and an ablation study on the six-class NEU-DET benchmark",
      "Shipped a live Hugging Face demo and a Dockerized FastAPI REST service",
    ],
    results: ["mAP@0.5 from 79.35% to 81.98% (+2.63pp)", "Real-time inference held at 145 FPS with 2.69M parameters", "Published as an arXiv preprint under Digilians (MCIT)"],
    note: "Team research project hosted on a collaborator's GitHub account; my contribution is stated above.",
  },
  {
    slug: "logistics-delay-prediction",
    title: "Logistics Delay Prediction",
    kicker: "Transportation & logistics tracking",
    year: "2026",
    category: "Predictive Modelling · SQL",
    summary: "A Random Forest flagging late shipments at 88.9% accuracy across 6,880 GPS-tracked deliveries, on top of an 11-table SQL Server schema.",
    cover: "/media/ph/truck-night.jpg",
    gallery: ["/media/log-delay-heatmap.jpg", "/media/log-correlation.jpg", "/media/log-vehicle.jpg", "/media/log-temporal.jpg", "/media/log-sql.jpg", "/media/ph/port-cranes.jpg"],
    stack: ["SQL Server", "ETL", "Python", "Scikit-learn", "Orange"],
    repo: "https://github.com/YoussefSherif218/Transportation_and_Logistics_Tracking",
    metrics: [["88.9%", "Accuracy"], ["0.98", "Recall on delays"], ["11", "SQL tables"]],
    problem: "A logistics operation needed to know which shipments would arrive late before they did — and which couriers and GPS providers were behind it.",
    approach: [
      "End-to-end EDA and root-cause analysis on 6,880 GPS-tracked shipment records",
      "Designed a normalized SQL Server database with 11 tables and a full ERD, loaded through an ETL process from CSV",
      "Wrote 10 business queries and reporting views covering courier performance and revenue",
      "Trained a Random Forest classifier and tuned it for recall on the delayed class",
    ],
    results: ["88.9% accuracy predicting delivery delays", "98% of genuine delays caught (recall 0.98 on the delayed class)", "Distance and GPS-provider reliability identified as the top predictors"],
    note: "The trade-off is deliberate: on-time recall is 0.73, because for a logistics team a missed delay costs more than a false alarm.",
  },
  {
    slug: "corelytics",
    title: "Corelytics",
    kicker: "Body performance analysis & classification",
    year: "2026",
    category: "Machine Learning",
    summary: "Six classifiers benchmarked on 13,272 fitness records; XGBoost reached 89.0% (binary) and 77.5% (four-class), confirmed with paired t-tests and explained with SHAP.",
    cover: "/media/ph/sprinter.jpg",
    gallery: ["/media/core-models.jpg", "/media/core-shap.jpg", "/media/core-kmeans-pca.jpg", "/media/core-radar.jpg", "/media/core-roc.jpg", "/media/core-correlation.jpg", "/media/ph/sprint-start.jpg"],
    stack: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas", "Seaborn"],
    repo: "https://github.com/YoussefSherif218/Corelytics-Body.Performance",
    metrics: [["89.0%", "Binary accuracy"], ["77.5%", "4-class accuracy"], ["6", "Models"]],
    problem: "Body-performance grades are usually assigned by hand from a battery of physical tests. The question: can a model grade them reliably, and can it explain why?",
    approach: [
      "Analysed 13,272 records across 42 diagnostic plots — distributions, outliers, correlations and class profiles",
      "Benchmarked KNN, Decision Tree, SVM, MLP, XGBoost and a Voting Ensemble",
      "Validated with 5-fold cross-validation and paired t-tests (p < 0.05)",
      "Explained the winning model with SHAP feature attributions",
    ],
    results: ["XGBoost: 89.0% binary and 77.5% four-class accuracy", "Statistically significant improvement over the other models", "Clear, per-feature explanation of every grade"],
  },
  {
    slug: "retailpulse-ai",
    title: "RetailPulse AI",
    kicker: "Customer segmentation engine",
    year: "2026",
    category: "Machine Learning · Analytics",
    summary: "K-Means over roughly a million Online Retail II rows, turning RFM features into four customer archetypes behind a live Streamlit dashboard.",
    cover: "/media/ph/supermarket.jpg",
    gallery: ["/media/ph/supermarket.jpg", "/media/ph/aisle-shelves.jpg", "/media/ph/card-hand.jpg"],
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
    repo: "https://github.com/YoussefSherif218/Retail-Pulse-AI-Strategic-Customer-Intelligence",
    metrics: [["~1M", "Rows"], ["4", "Archetypes"], ["40–50%", "Revenue from Champions"]],
    problem: "Marketing spend was spread evenly across customers who behave nothing alike.",
    approach: ["Engineered Recency, Frequency and Monetary features from raw invoice lines", "Clustered with K-Means and profiled each segment", "Delivered the result as a live Streamlit dashboard"],
    results: ["Four actionable customer archetypes", "Found the Champions cohort — 10% of customers — drives 40–50% of revenue", "A basis for targeted marketing budget allocation"],
    note: "Uses the same Online Retail II data as Retail SQL Lab — a deliberate pairing: the Python/ML route here, the pure T-SQL route there.",
  },
  {
    slug: "retail-sql-lab",
    title: "Retail SQL Lab",
    kicker: "Star schema & EDA in T-SQL",
    year: "2026",
    category: "Data Engineering · SQL",
    summary: "The same Online Retail II data taken the other way — a five-table relational schema, 1.07M invoice lines bulk-loaded, and the whole EDA written in T-SQL.",
    cover: "/media/ph/code-screen.jpg",
    gallery: ["/media/ph/code-dark.jpg", "/media/log-sql.jpg", "/media/ph/server-rack.jpg"],
    stack: ["SQL Server", "SSMS", "T-SQL", "ETL"],
    repo: "https://github.com/YoussefSherif218/Retail-SQL-Lab",
    metrics: [["1.07M", "Invoice lines"], ["5", "Tables"], ["6", "Analytical views"]],
    problem: "Raw retail exports were unusable for repeatable reporting — no keys, no types, no integrity.",
    approach: ["Designed Country, Customer, Product, Invoice and InvoiceLine tables with full referential integrity", "Built an ETL process to load raw CSV files, handling delimiters and type validation", "Performed EDA and root-cause analysis directly in SQL"],
    results: ["Surfaced two critical anomalies: a −53,594 minimum price and a −80,995 minimum quantity", "A six-view analytical layer for repeatable Power BI and Excel reporting"],
  },
  {
    slug: "bank-marketing-analytics",
    title: "Bank Marketing Analytics",
    kicker: "Conversion optimization",
    year: "2025",
    category: "Analytics · Statistics",
    summary: "EDA and root-cause analysis on 4,521 campaign records to find what actually drives term-deposit subscriptions in a heavily imbalanced dataset.",
    cover: "/media/ph/bank-facade.jpg",
    gallery: ["/media/ph/bank-facade.jpg", "/media/ph/card-terminal.jpg", "/media/ph/cards-macro.jpg"],
    stack: ["Python", "Pandas", "NumPy", "Seaborn", "SciPy"],
    repo: "https://github.com/YoussefSherif218/Bank-Marketing-Analytics",
    metrics: [["4,521", "Records"], ["11.5%", "Positive class"], ["2.4×", "Call-duration gap"]],
    problem: "Only 11.5% of contacted customers subscribed. The bank wanted to know which levers actually matter.",
    approach: ["Comprehensive EDA across 17 features", "Root-cause analysis comparing subscribers and non-subscribers", "Statistical testing of the strongest drivers"],
    results: ["Call duration is the strongest predictor: 553s vs 226s, a 2.4× gap", "Three actionable campaign recommendations"],
  },
  {
    slug: "neuroscope",
    title: "NeuroScope",
    kicker: "3D deep-learning workspace",
    year: "2026",
    category: "Deep Learning · Tooling",
    role: "Model code & research",
    summary: "An interactive 3D workspace for configuring deep-learning architectures — visualise, select and wire model components directly in the browser.",
    cover: "/media/neuroscope.jpg",
    gallery: ["/media/neuroscope.jpg", "/media/ph/dark-tech.jpg"],
    stack: ["Deep Learning", "Three.js", "React"],
    repo: "https://github.com/hazemelerefey/NeuroScope",
    metrics: [["3D", "Architecture view"], ["Browser", "Runtime"], ["Team", "Project"]],
    problem: "Deep-learning architectures are hard to reason about as code alone, especially for newcomers.",
    approach: ["Contributed model code and research behind the configurable components", "Components can be visualised, selected and wired interactively"],
    results: ["An in-browser workspace for exploring architectures visually"],
    note: "Team project hosted on a collaborator's GitHub account; my contribution is stated above.",
  },
];

export const services = [
  { title: "Computer Vision", result: "“DAFEGate lifted mAP@0.5 to 81.98% while holding 145 FPS.”", from: "DAFEsteel", sub: "Published research", images: ["/media/ph/molten-steel.jpg", "/media/ph/steel-factory.jpg", "/media/ph/steel-tunnel.jpg", "/media/ph/chip-mono.jpg", "/media/ph/hex-glow.jpg", "/media/ph/robot.jpg", "/media/ph/pcb-macro.jpg"] },
  { title: "Predictive Modelling", result: "“Random Forest caught 98% of genuine delivery delays.”", from: "Logistics Delay Prediction", sub: "6,880 shipments", images: ["/media/ph/truck-night.jpg", "/media/ph/traffic-night.jpg", "/media/ph/containers.jpg", "/media/ph/truck-motion.jpg", "/media/ph/port-cranes.jpg", "/media/ph/sprint-start.jpg", "/media/ph/runner-road.jpg"] },
  { title: "Customer Analytics", result: "“10% of customers drive 40–50% of revenue.”", from: "RetailPulse AI", sub: "~1M transactions", images: ["/media/ph/aisle-shelves.jpg", "/media/ph/market-aisle.jpg", "/media/ph/supermarket.jpg", "/media/ph/card-hand.jpg", "/media/ph/card-terminal.jpg", "/media/ph/cards-macro.jpg", "/media/ph/bank-facade.jpg"] },
  { title: "Data Engineering & SQL", result: "“Two critical anomalies surfaced before they reached a dashboard.”", from: "Retail SQL Lab", sub: "1.07M invoice lines", images: ["/media/ph/code-dark.jpg", "/media/ph/server-rack.jpg", "/media/ph/code-js.jpg", "/media/ph/control-room.jpg", "/media/ph/code-mono.jpg", "/media/ph/ram-chip.jpg", "/media/ph/code-blur.jpg"] },
];

export const tools = [
  { title: ["Deep Learning", "& Vision."], items: ["PyTorch", "YOLOv11", "Hugging Face"], image: "/media/ph/molten-steel.jpg" },
  { title: ["Machine", "Learning."], items: ["Scikit-learn", "XGBoost", "SHAP"], image: "/media/ph/hex-glow.jpg" },
  { title: ["Data &", "Databases."], items: ["SQL Server", "Pandas", "PySpark"], image: "/media/ph/server-rack.jpg" },
  { title: ["Ship &", "Report."], items: ["Docker", "FastAPI", "Power BI"], image: "/media/ph/dark-tech.jpg" },
];

export const processSteps = [
  { title: "Frame the question", text: "Before any model, I pin down the decision it should change and the metric that proves it — recall on delays, not accuracy for its own sake." },
  { title: "Audit the data", text: "Profiling, cleaning and root-cause checks in SQL and Pandas. Anomalies like a negative minimum price get caught here, not in production." },
  { title: "Model & evaluate", text: "Benchmark several models, validate with cross-validation and significance tests, then explain the winner with tools like SHAP." },
  { title: "Ship & explain", text: "A Streamlit dashboard, a FastAPI service or a Hugging Face demo — plus the write-up a non-technical stakeholder can follow." },
];

export const results = [
  { value: "81.98%", label: "mAP@0.5 on NEU-DET", project: "DAFEsteel", image: "/media/ph/molten-steel.jpg" },
  { value: "0.98", label: "Recall on delayed shipments", project: "Logistics Delay Prediction", image: "/media/ph/truck-night.jpg" },
  { value: "89.0%", label: "Binary accuracy with XGBoost", project: "Corelytics", image: "/media/ph/sprinter.jpg" },
  { value: "40–50%", label: "Revenue from the top 10% of customers", project: "RetailPulse AI", image: "/media/ph/supermarket.jpg" },
  { value: "2.4×", label: "Call-duration gap between converters", project: "Bank Marketing Analytics", image: "/media/ph/bank-facade.jpg" },
  { value: "1.07M", label: "Invoice lines loaded and audited in T-SQL", project: "Retail SQL Lab", image: "/media/ph/code-screen.jpg" },
];

export const engagements = [
  { name: "Full-time", tag: "Open", for: "ML, data or AI teams hiring", features: ["Model development & evaluation", "Computer vision & predictive models", "SQL & data pipelines", "Clear written reporting"] },
  { name: "Freelance", tag: "Popular", for: "Scoped projects with one clear outcome", features: ["Defined scope & timeline", "EDA, modelling or dashboards", "Weekly progress updates", "Documented handover"] },
  { name: "Internship & Research", tag: "Open", for: "Labs and teams doing applied research", features: ["Experiment tracking", "Ablation studies", "Paper-ready figures", "Reproducible code"] },
];

export const faqs = [
  ["What roles are you looking for?", "Machine learning, data analyst and applied-AI roles — full-time, freelance or internship. Remote or based in Giza/Cairo."],
  ["What's your core stack?", "Python with Pandas, Scikit-learn, XGBoost and PyTorch; SQL Server for data modelling; Power BI, Streamlit and FastAPI to ship results."],
  ["What did you contribute to DAFEsteel?", "Research, the DAFEGate module architecture and model code, as one of a six-person team. The work is published as an arXiv preprint under Digilians (MCIT)."],
  ["How does biotechnology connect to machine learning?", "Four years of hypothesis testing and statistics. Machine learning needs exactly that discipline — pointed at data instead of lab results."],
  ["What are you focused on right now?", "Completing the nine-month Digilians Applied AI & Data Analytics scholarship (MCIT) while shipping end-to-end projects."],
  ["How quickly do you reply?", "Usually within a day by email or LinkedIn."],
];

export const experience = [
  { period: "Dec 2025 — Present", title: "Applied AI & Data Analytics Trainee", org: "Digilians Initiative · MCIT (9-month scholarship)", points: ["Built and evaluated predictive ML models, improving accuracy through iterative feature engineering", "Data mining, ETL-style preparation and structured SQL for KPI reporting in Power BI and Excel", "Capstone project solving a real-world analytics problem end to end"] },
  { period: "Feb 2025 — Oct 2025", title: "Senior Social Media Specialist", org: "Arcktech Marketing Agency", points: ["Analysed performance and audience data across 7 client accounts", "Data-backed strategy recommendations from monthly metrics"] },
  { period: "Nov 2024 — Mar 2025", title: "Social Media Marketing Track", org: "ITI · MCIT, Fayoum", points: ["Paid campaigns and analytics with Meta Business Suite and Google Analytics"] },
  { period: "Mar 2024 — Dec 2024", title: "Social Media Specialist", org: "Vook Marketing Agency", points: ["Tracked campaign performance across platforms to optimise reach"] },
  { period: "Jan 2023 — Feb 2024", title: "Social Media Specialist", org: "Creative Digital Marketing", points: ["Data-driven strategies tailored to target demographics"] },
  { period: "Oct 2020 — Feb 2022", title: "Customer Service Representative", org: "Concentrix", points: ["Inbound and outbound customer support at high service standards"] },
];

export const education = [
  { title: "B.Sc. Biotechnology", org: "Cairo University", period: "2019 — 2023" },
  { title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", org: "Microsoft", period: "Jul 2026" },
  { title: "Data Analyst in Python & SQL", org: "DataCamp", period: "Certificate" },
  { title: "Foundations: Data, Data, Everywhere", org: "Google · Coursera", period: "Certificate" },
  { title: "Digital & Content Marketing", org: "HubSpot", period: "Certificate" },
];

export const skills = [
  ["Machine learning", "Supervised & unsupervised learning, predictive modelling, feature engineering, model evaluation, K-Means, XGBoost, SHAP"],
  ["Deep learning & CV", "PyTorch, YOLOv11, neural networks, generative AI & LLMs"],
  ["Data & SQL", "SQL Server, complex queries, views, stored procedures, schema design, ETL/ELT pipelines, data quality"],
  ["Analysis & BI", "EDA, statistical testing, A/B testing, regression, root-cause analysis, Power BI (DAX), Excel, Tableau"],
  ["Ship", "Git, Docker, FastAPI, Streamlit, Hugging Face Spaces; Azure & AWS familiarity"],
  ["Languages", "Arabic (native), English (intermediate), German (intermediate)"],
];

export type Note = { slug: string; title: string; topic: string; date: string; read: string; cover: string; collage: string[]; excerpt: string; body: string[] };
export const notes: Note[] = [
  { slug: "why-recall-mattered", title: "Why recall mattered more than accuracy", topic: "Modelling", date: "2026", read: "3 min", cover: "/media/ph/truck-night.jpg", collage: ["/media/ph/containers.jpg", "/media/ph/traffic-night.jpg", "/media/ph/port-cranes.jpg", "/media/ph/truck-motion.jpg"],
    excerpt: "Logistics Delay Prediction leads on 88.9% accuracy, but the number that actually earned its place is 0.98 recall on the delayed class.",
    body: ["The model catches 98% of genuine delays. It also flags about 27% of on-time shipments as late — on-time recall is 0.73.", "That trade-off is a choice, not an accident. For a logistics team, a missed delay means a broken promise to a customer; a false alarm means one extra check.", "So I tuned for recall on the class that costs money when it is missed, and I report both numbers side by side rather than leading with a single accuracy figure."] },
  { slug: "one-dataset-two-routes", title: "One dataset, two routes", topic: "Data engineering", date: "2026", read: "3 min", cover: "/media/ph/market-aisle.jpg", collage: ["/media/ph/aisle-shelves.jpg", "/media/ph/code-dark.jpg", "/media/ph/card-hand.jpg", "/media/ph/server-rack.jpg"],
    excerpt: "RetailPulse AI and Retail SQL Lab both start from Online Retail II. That is deliberate.",
    body: ["In Python, the data became RFM features, K-Means clusters and a Streamlit dashboard — four archetypes, and the finding that 10% of customers drive 40–50% of revenue.", "In SQL Server, the same data became a five-table schema with full referential integrity, 1.07M bulk-loaded invoice lines and an EDA written entirely in T-SQL.", "Running both on identical data shows the range: one route answers who to target, the other makes sure the numbers underneath can be trusted — it surfaced a −53,594 minimum price and a −80,995 minimum quantity."] },
  { slug: "inside-dafegate", title: "Inside DAFEGate", topic: "Computer vision", date: "2026", read: "4 min", cover: "/media/ph/steel-factory.jpg", collage: ["/media/ph/molten-steel.jpg", "/media/ph/steel-tunnel.jpg", "/media/ph/chip-mono.jpg", "/media/ph/hex-glow.jpg"],
    excerpt: "Steel defects come in two shapes — edges and textures. DAFEGate gives each its own branch.",
    body: ["Crazing and scratches are thin, linear, edge-driven. Patches and pitted surfaces are textural. A generic backbone treats them the same way.", "DAFEGate is a plug-in module for YOLOv11n with an edge-aware and a texture-aware branch, fused through squeeze-and-excite attention and wrapped in an additive residual so gradients still flow.", "Across 18 tracked experiments and an ablation study, it moved mAP@0.5 on NEU-DET from 79.35% to 81.98% while keeping 145 FPS — fast enough for a production line."] },
];
