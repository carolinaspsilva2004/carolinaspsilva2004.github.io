import type { Project } from "../types/Project";


export const projects: Project[] = [
    // =========================
    // MOBILE & FULL-STACK
    // =========================
    {
        id: "evalmed",
        title: "EvalMed - EPA Management System for Medical Training",
        description:
            "Final Bachelor's project at the University of Aveiro. EvalMed is a web platform also available in app format for managing Entrustable Professional Activities (EPA) in medical training, replacing paper-based assessments with structured tutor feedback, student self-assessments, reevaluation requests, performance statistics, offline support, and institutional authentication for students, tutors, and administrators.",
        grade: "17/20",
        technologies: [
            "React",
            "Vite",
            "Web Platform",
            "Mobile App",
            "Spring Boot",
            "Java",
            "MySQL",
            "MongoDB",
            "Docker",
            "Nginx",
            "Grafana",
            "Firebase Cloud Messaging",
            "OAuth/OIDC",
        ],
        media: [
            "/assets/projects/evalmed/1.png",
            "/assets/projects/evalmed/2.png",
            "/assets/projects/evalmed/3.png",
        ],
        mediaLayout: "showcase",
        status: "private",
        links: [
            {
                label: "Platform",
                href: "https://evalmed.dev.ua.pt/",
            },
            {
                label: "Project report",
                href: "/assets/projects/evalmed/report.pdf",
            },
            {
                label: "Presentation",
                href: "/assets/projects/evalmed/EvalMed.pptx",
            },
            {
                label: "Demo",
                href: "https://youtu.be/VlLO6kthGg0?si=j-yWbPPGUZAowhuO",
            },
        ],
    },

    {
        id: "fanzone",
        title: "FanZone — Concert Experience Logger",
        description:
            "Offline-first Flutter mobile application for capturing, organizing, and analyzing live concert experiences through media sharing, sensor data integration, social features, and secure backend synchronization.",
        grade: "16/20",
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
        grade: "19.5/20 + 20/20",
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
        grade: "18/20",
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
        grade: "18/20",
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
            "Terraform",
        ],
        media: ["/assets/projects/inflow/1.png"],
        status: "public",
        github: "https://github.com/detiuaveiro/group-project-es2526_302",
    },

     {
        id: "nikcharge",
        grade: "16/20",
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
            "CI/CD",
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
        grade: "19/20",
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
