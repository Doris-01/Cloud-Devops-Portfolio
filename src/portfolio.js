const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "York University, Toronto",
      // logo: require("./assets/images/yorkLogo.png"),
      logo: "",
      subHeader: "Post Graduate Certificate, CloudOps",
      duration: "2024 - 2025",
      desc: "Specialized in cloud operations, automation, and DevOps best practices.",
      descBullets: ["Developed healthcare cloud pipeline as capstone project"]
    },
    {
      schoolName: "Ivan Horbachevsky Ternopil National Medical University, Ukraine",
      // logo: require("./assets/images/ternopilLogo.png"),
      logo: "",
      subHeader: "Master of Medicine",
      duration: "2017 - 2023",
      desc: "Medical graduate with experience in healthcare systems integration.",
      descBullets: ["Thesis on medical data security and cloud applications"]
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Migranium",
      // companylogo: require("./assets/images/migraniumLogo.png"),
      companylogo: "",
      date: "Jan 2025 – Present",
      desc: "Led migration to HIPAA-compliant Bitbucket, designed CI/CD pipelines for Azure Container Apps, and built a full observability stack using Grafana and Prometheus.",
      descBullets: [
        "Improved release velocity by 45%",
        "Reduced incident response time by 60%"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Mobann Technologies",
      // companylogo: require("./assets/images/mobannLogo.png"),
      companylogo: "",
      date: "Jan 2022 – Jan 2025",
      desc: "Automated cloud deployments with Terraform and Ansible, implemented database migration scripts and enhanced security auditing.",
      descBullets: [
        "Reduced downtime by 35%",
        "Enhanced compliance and monitoring"
      ]
    }
  ]
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Key Cloud & DevOps Solutions Delivered",
  projects: [
    {
      // image: require("./assets/images/awsnginxdiagram.png"),
      image: "",
      projectName: "AWS NGINX + Let's Encrypt Automation",
      projectDesc: "Automated deployment of secure NGINX web servers on AWS using Terraform & Ansible. Configures EC2, SSL, and auto-renewal.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Doris-01/aws-nginx-automation" }
      ]
    },
    {
      // image: require("./assets/images/nextwork.png"),
      image: "",
      projectName: "NextWork Web Project",
      projectDesc: "Full-stack cloud platform with scalable infrastructure and secure CI/CD pipelines.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Doris-01/nextwork-web-project" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications, Awards & Cool Stuff!",
  achievementsCards: [
    {
      title: "AWS Certified Solution Architect (in progress)",
      subtitle: "Studying for certification in AWS solutions architecture.",
      // image: require("./assets/images/awsLogo.png"),
      image: "",
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Migranium DevOps Capstone Winner",
      subtitle: "Recognized for healthcare automation project using cloud and DevOps.",
      // image: require("./assets/images/migraniumLogo.png"),
      image: "",
      imageAlt: "Migranium Logo",
      footerLink: []
    }
  ],
  display: true
};
