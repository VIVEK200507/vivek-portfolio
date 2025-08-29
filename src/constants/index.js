import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  collagetips,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python }
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI-Based Hackathon – Dynamic Job Finder & Skill Assessment",
  company_name: "Hack2Skill Pvt. Ltd.",
  icon: edunet,
  iconBg: "#161329",
  date: "May 2024 – July 2024",
  points: [
    "Developed an AI tool designed to dynamically match users with job opportunities based on their evolving skill sets.",
    "Integrated personalized skill assessments covering both technical and soft skills to guide career growth.",
    "Suggested targeted learning paths and practice challenges to upskill users based on assessment results.",
    "Proposed the inclusion of AR/VR-based virtual internships to provide immersive learning and hands-on project exposure.",
    ],
  },
  {
    title: "AI-Based Hackathon – SBI Life",
    company_name: "Hack2Skill Pvt. Ltd.",
    icon:  eduskill,
    iconBg: "#161329",
    date: "Nov 2024 – Jan 2025",
    points: [
      "Participated in SBI Life Hackathon focused on enhancing customer data security and fraud detection.",
      "Developed an AI-driven document verification system to validate customer identity and prevent forgery.",
      "Implemented fraud detection logic using behavioral analytics and pattern recognition.",
      "Proposed a secure onboarding workflow integrating OCR, face match APIs, and anomaly detection algorithms.",
    ],
  },
  {
    title: "Pragati AI | Hackathon",
    company_name: "Hack2Skill Pvt. Ltd.",
    icon: mathwork,
    iconBg: "#161329",
    date: "Feb 2025 – Apr 2025",
    points: [
      "Worked on an AI solution aimed at addressing hunger and disease prediction in underserved rural areas.",
      "Focused on maternal health by designing a tool that supports critical decision-making during pregnancy.",
      "Utilized AI to identify potential complications, predict disease risks, and assess impacts on both mother and child.",
      "Integrated local data, symptoms, and behavioral inputs to provide early warnings and resource recommendations.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "CollegeTips Ed. Tech. Media Pvt. Ltd.",
    icon: collagetips,
    iconBg: "#161329",
    date: "Summer 2025",
    points: [
      "Assisted in developing and testing basic machine learning models using real data to understand core AI techniques.",
      "Cleaned and prepared datasets to improve model accuracy and ensured quality data for training purposes.",
      "Collaborated with the team to solve problems and documented project progress and technical findings clearly.",
    ],
  },
];


export const projects = [
  {
    name: "Portfolio Website",
    description:
      "A portfolio website that showcases my skills, projects, and experiences in a visually appealing manner.",
    description:
      "This portfolio website is designed to showcase my skills, projects, and experiences in a visually appealing manner. It features a responsive design, smooth animations, and a user-friendly interface.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://vivek200507.github.io/vivek-portfolio/",
  },{
    name: "Pet website",
    description:
      "This website is a pet adoption platform that allows users to view and adopt pets. It features a user-friendly interface, responsive design, and a database of pets available for adoption.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/VIVEK200507/CollegeTips_Task_Pet_website",
  },
  {
    name: "DigiBudy",
    description:
      "DigiBudy is for our parents who struglling to use new technology. It is a platform that provides easy-to-follow tutorials and guides on various digital topics, making it accessible for everyone.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/VIVEK200507/CollegeTips_Task_Digital_ninja",
  },
   {
    name: "Sundown Studio clone website",
    description:
      "This is animated website shows my skill in animation with website.",
    tags: [
      { name: "HTML", color: "white-text-gradient" },
      { name: "css", color: "orange-text-gradient" },
      { name: "Javascript", color: "offwhite-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/VIVEK200507/Sundown-studio-clone",
  },
  
];
