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
        media: ["/assets/projects/fanzone/FanZone.png"],
        status: "public",
        github: "https://github.com/luanacarolinareis/FanZone",
    },

   
    // =========================
    // MACHINE LEARNING & DATA
    // =========================
    {
        id: "medical-ml-projects",
        title: "Medical Image Analysis Projects",
        description:
            "Medical imaging repository with two projects:\n\n• Brain Tumor Classification — Classical ML on MRI images (>99% accuracy).\n\n• Ocular Disease Recognition — Deep learning–based retinal disease detection with transfer learning and Grad-CAM.",
        technologies: [
            "Python",
            "Scikit-learn",
            "NumPy",
            "SVM",
            "Logistic Regression",
            "PyTorch",
            "EfficientNet",
            "ResNet",
            "Grad-CAM",
        ],
        media: [
            "/assets/projects/faa/1.png"],
        status: "public",
        github: "https://github.com/carolinaspsilva2004/FAA_Projects",
    },


    {
        id: "salary-visualization",
        title: "Global Salary Trends in AI & Data",
        description:
            "Interactive data visualization project exploring global salary trends in AI and Data-related roles, highlighting the impact of experience, location, company size, and remote work.",
        technologies: ["React", "D3.js", "JavaScript", "Data Visualization"],
        media: ["/assets/projects/vi_salary/1.png"],
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
        media: ["/assets/projects/inflow/1.png"],
        status: "public",
        github: "https://github.com/detiuaveiro/group-project-es2526-302",
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
        media: ["/assets/projects/nikcharge/3.png"],
        status: "public",
        github: "https://github.com/NikCharge/NikCharge",
    },

    // =========================
    // HCI / FRONTEND
    // =========================
    {
        id: "smartwash",
        title: "SmartWash",
        description: "Mobile-first web application designed to improve the self-service laundry experience by allowing users to find nearby laundries, check machine availability, and reserve washers and dryers.",
        technologies: ["React", "Vite", "JavaScript", "HCI"],
        media: [
            "/assets/projects/smartwash/1.png",
            "/assets/projects/smartwash/2.png",
            "/assets/projects/smartwash/3.png",
        ],
        status: "public",
        github: "https://github.com/andredora/SmartWash",
    }


];
