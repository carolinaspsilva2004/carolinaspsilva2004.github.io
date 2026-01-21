import type { Project } from "../types/Project";


export const projects: Project[] = [
  // =========================
  // MOBILE & FULL-STACK
  // =========================
  {
    id: "fanzone",
    title: "FanZone — Concert Experience Logger",
    description:
      "Offline-first Flutter mobile application for capturing, organizing, and analyzing live concert experiences through media sharing, sensor data integration, social features, and secure backend synchronization.",
    technologies: [
      "Flutter",
      "Firebase Auth",
      "Flask",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Docker",
      "WearOS",
    ],
    image: "/assets/projects/fanzone.png",
    status: "public",
    github: "https://github.com/luanacarolinareis/FanZone",
  },

  {
    id: "nikcharge",
    title: "NikCharge — EV Charging Platform",
    description:
      "Web platform for managing electric vehicle charging stations, enabling real-time availability tracking, reservations, payment processing, and operational dashboards for users and staff.",
    technologies: [
      "React",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Stripe API",
      "Docker",
      "Swagger",
    ],
    image: "/assets/projects/nikcharge.png",
    status: "public",
    github: "https://github.com/NikCharge/NikCharge",
  },

  // =========================
  // MACHINE LEARNING & DATA
  // =========================
  {
    id: "brain-tumor-ml",
    title: "Brain Tumor Classification",
    description:
      "Medical image analysis project using classical Machine Learning models to classify brain tumors from MRI images, achieving over 99% accuracy with strong preprocessing and model comparison.",
    technologies: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "SVM",
      "Logistic Regression",
    ],
    image: "/assets/projects/faa.png",
    status: "public",
    github: "https://github.com/carolinaspsilva2004/FAA_Projects",
  },

  {
    id: "ocular-disease",
    title: "Ocular Disease Recognition",
    description:
      "Multi-label deep learning system for detecting ocular diseases from retinal fundus images, addressing class imbalance and interpretability using transfer learning and Grad-CAM.",
    technologies: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "ResNet",
      "Kaggle",
      "Grad-CAM",
    ],
    image: "/assets/projects/ocular.png",
    status: "public",
    github: "https://github.com/carolinaspsilva2004/FAA_Projects",
  },

  {
    id: "salary-visualization",
    title: "Global Salary Trends in AI & Data",
    description:
      "Interactive data visualization project exploring global salary trends in AI and Data-related roles, highlighting the impact of experience, location, company size, and remote work.",
    technologies: ["React", "D3.js", "JavaScript", "Data Visualization"],
    image: "/assets/projects/vi_salary.png",
    status: "public",
    github: "https://github.com/carolinaspsilva2004/VI_AI_Salary_Explorer",
  },

  // =========================
  // SOFTWARE ENGINEERING
  // =========================
  {
    id: "inflow",
    title: "InFlow — Payment & Billing System",
    description:
      "Microservices-based Payment and Billing System supporting invoicing, online payments, reconciliation, notifications, and audit trails, designed with scalability, security, and compliance in mind.",
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "PostgreSQL",
      "CI/CD",
    ],
    image: "/assets/projects/inflow.png",
    status: "public",
    github: "https://github.com/detiuaveiro/group-project-es2526-302",
  },

  // =========================
  // HCI / FRONTEND
  // =========================
  {
    id: "smartwash",
    title: "SmartWash",
    description:
      "Mobile-first web application designed to improve the self-service laundry experience by allowing users to find nearby laundries, check machine availability, and reserve washers and dryers.",
    technologies: ["React", "Vite", "JavaScript", "HCI"],
    image: "/assets/projects/smartwash.png",
    status: "public",
    github: "https://github.com/andredora/SmartWash",
  },

  // =========================
  // UPCOMING / PRIVATE
  // =========================
  {
    id: "private-project-1",
    title: "Upcoming Mobile Application",
    description:
      "Mobile application currently under development, focusing on advanced interaction patterns, offline capabilities, and user-centered design.",
    technologies: ["Flutter", "Firebase"],
    image: "/assets/projects/coming-soon.png",
    status: "coming-soon",
  },

  {
    id: "private-project-2",
    title: "Upcoming Web Platform",
    description:
      "Web-based platform under development, centered on data-driven decision support and modern frontend architecture.",
    technologies: ["React", "TypeScript"],
    image: "/assets/projects/coming-soon.png",
    status: "coming-soon",
  },
];
