import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Keep or change to your custom file

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Doris Emeh",
  title: "Hi all, I'm Doris",
  subTitle: emoji(
    "A passionate Cloud & DevOps Engineer 🚀 with 5+ years of experience in AWS, Azure, automation, and infrastructure management. Medical graduate turned cloud specialist, I deliver secure, scalable solutions for healthcare and tech organizations using CI/CD, IAC, monitoring, and security best practices."
  ),
  resumeLink:
    "https://yourdomain.com/resume.pdf", // TODO: update with your actual resume link
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Doris-01",
  linkedin: "https://www.linkedin.com/in/doris-emeh/",
  gmail: "delorezdoris@gmail.com",
  // add others as you wish, e.g., Twitter, Medium
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "Cloud & DevOps Engineer | AWS | Azure | Automation Enthusiast",
  skills: [
    emoji("⚡ Build and automate cloud infrastructure using Terraform/Ansible"),
    emoji("⚡ Design and optimize CI/CD pipelines for fast, secure deployments"),
    emoji("⚡ Deploy and monitor scalable web applications and microservices"),
    emoji("⚡ Integrate robust security and compliance protocols (HIPAA)")
  ],
  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "ansible", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "jenkins", fontAwesomeClassname: "fab fa-jenkins" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "York University, Toronto",
      logo: require("./assets/images/yorkLogo.png"),
      subHeader: "Post Graduate Certificate, CloudOps",
      duration: "2024 - 2025",
      desc: "Specialized in cloud operations, automation, and DevOps best practices.",
      descBullets: ["Developed healthcare cloud pipeline as capstone project"]
    },
    {
      schoolName: "Ivan Horbachevsky Ternopil National Medical University, Ukraine",
      logo: require("./assets/images/ternopilLogo.png"),
      subHeader: "Master of Medicine",
      duration: "2017 - 2023",
      desc: "Medical graduate with experience in healthcare systems integration.",
      descBullets: ["Thesis on medical data security and cloud applications"]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud Platforms (AWS, Azure)", progressPercentage: "95%" },
    { Stack: "DevOps Automation (Terraform, Ansible, Docker)", progressPercentage: "90%" },
    { Stack: "Programming (Python, Bash/Shell)", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps Engineer",
      company: "Migranium",
      companylogo: require("./assets/images/migraniumLogo.png"),
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
      companylogo: require("./assets/images/mobannLogo.png"),
      date: "Jan 2022 – Jan 2025",
      desc: "Automated cloud deployments with Terraform and Ansible, implemented database migration scripts and enhanced security auditing.",
      descBullets: [
        "Reduced downtime by 35%",
        "Enhanced compliance and monitoring"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Key Cloud & DevOps Solutions Delivered",
  projects: [
    {
      image: require("./assets/images/awsnginxdiagram.png"), // Your generated diagram
      projectName: "AWS NGINX + Let's Encrypt Automation",
      projectDesc: "Automated deployment of secure NGINX web servers on AWS using Terraform & Ansible. Configures EC2, SSL, and auto-renewal.",
      footerLink: [
        { name: "View on GitHub", url: "https://github.com/Doris-01/aws-nginx-automation" }
      ]
    },
    {
      image: require("./assets/images/nextwork.png"),
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
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Migranium DevOps Capstone Winner",
      subtitle: "Recognized for healthcare automation project using cloud and DevOps.",
      image: require("./assets/images/migraniumLogo.png"),
      imageAlt: "Migranium Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love to share what I learn about cloud, DevOps, and healthcare IT.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@delorezdoris/cloud-automation-for-healthcare-systems-6e1f4asdf",
      title: "Cloud Automation for Healthcare Systems",
      description: "How I built secure, automated pipelines in AWS for hospital management."
    },
    {
      url: "https://dorisemeh.medium.com/devops-security",
      title: "DevOps & Security Best Practices",
      description: "Integrating automation and compliance for high-velocity teams."
    }
  ],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Always sharing Cloud & DevOps tips with peers!"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I share stories of career transition and tech in healthcare.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's collaborate or discuss opportunities—my inbox is open.",
  number: "+1-437-219-0068",
  email_address: "delorezdoris@gmail.com"
};

const twitterDetails = {
  userName: "DorisEmeh_", // Update with your twitter username
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
