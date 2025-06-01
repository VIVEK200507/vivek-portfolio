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
    title: "AI-Based Hackathon – SBI Life",
    company_name: "Hack2Skill Pvt. Ltd.",
    icon: hack2skill,
    iconBg: "#161329",
    date: "Nov 2024 – Jan 2024",
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
    icon: hack2skill,
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
    title: "AI-Based Hackathon – Dynamic Job Finder & Skill Assessment",
  company_name: "Hack2Skill Pvt. Ltd.",
  icon: hack2skill,
  iconBg: "#161329",
  date: "May 2024 – July 2024",
  points: [
    "Developed an AI tool designed to dynamically match users with job opportunities based on their evolving skill sets.",
    "Integrated personalized skill assessments covering both technical and soft skills to guide career growth.",
    "Suggested targeted learning paths and practice challenges to upskill users based on assessment results.",
    "Proposed the inclusion of AR/VR-based virtual internships to provide immersive learning and hands-on project exposure.",
    ],
  },
];


export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/VIVEK200507/vivek-portfolio",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/VIVEK200507/vivek-portfolio",
  },
];
