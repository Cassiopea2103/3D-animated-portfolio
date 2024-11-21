import {
  mobile,
  backend,
  creator,
  web, 


  html , 
  css , 
  javascript, 
  c , 
  csharp, 
  python, 
  java , 
  bootstrap, 
  sass , 
  tailwind , 
  typescript, 
  redux , 
  spfx , 
  reactjs , 
  next , 
  angular , 
  threejs, 
  django, 
  flask , 
  fastapi, 
  springboot, 
  nodejs, 
  express, 
  nest, 
  oracle, 
  mongodb, 
  mysql, 
  postgres, 
  hibernate, 
  prisma , 
  reactNative, 
  androidStudio, 
  aws , 
  ibm , 
  powerPlateform, 
  git , 
  docker, 
  kubernetes, 
  terraform, 
  ansible, 
  jenkins, 
  hadoop, 
  spark, 
  pyspark,


  
  sonatel,
  baamtu,
  intouch,
  freelance,


  studybud,
  simula,
  threeai,
  portfolio,
  ganeyi,
  fiaya
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




const services = [
  {
    title: "Web & Mobile Developer",
    icon: web,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Cloud Computing",
    icon: backend,
  },
  {
    title: "Computer Networking",
    icon: creator,
  },
];





const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "C",
  //   icon: c,
  // },
  // {
  //   name: "C sharp",
  //   icon: csharp,
  // },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  // {
  //   name: "Tailwindcss",
  //   icon: tailwind,
  // },
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  // {
  //   name: "Typescript",
  //   icon: typescript,
  // },
  // {
  //   name: "Redux",
  //   icon: redux,
  // },
  // {
  //   name: "SPFx",
  //   icon: spfx,
  // },
  {
    name: "React",
    icon: reactjs,
  },
  // {
  //   name: "Next",
  //   icon: next,
  // },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  // {
  //   name: "Three",
  //   icon: threejs,
  // },
  // {
  //   name: "Django",
  //   icon: django,
  // },
  // {
  //   name: "Flask",
  //   icon: flask,
  // },
  // {
  //   name: "FastAPI",
  //   icon: fastapi,
  // },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  {
    name: "Nest",
    icon: nest,
  },
  // {
  //   name: "Oracle",
  //   icon: oracle,
  // },
  // {
  //   name: "Postgres",
  //   icon: postgres,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Prisma",
  //   icon: prisma,
  // },
  // {
  //   name: "Hibernate",
  //   icon: hibernate,
  // },
  // {
  //   name: "React Native",
  //   icon: reactNative,
  // },
  // {
  //   name: "Android Studio",
  //   icon: androidStudio,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "IBM Cloud",
  //   icon: ibm,
  // },
  // {
  //   name: "Power Plateform",
  //   icon: powerPlateform,
  // },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  // {
  //   name: "Hadoop",
  //   icon: hadoop,
  // },
  // {
  //   name: "Spark",
  //   icon: spark,
  // },
  {
    name: "PySpark",
    icon: pyspark,
  },
];





const experiences = [
  {
    title: "Junior Data Scientist",
    company_name: "Baamtu SARL",
    icon: baamtu,
    iconBg: "#FFFFEE",
    date: "2022 - 2023",
    points: [
      "Design of OCR models as part of the Ganeyi project to facilitate authentication with documents (passports, national ID cards, etc.)",
      "Implementation of APIs for the use of OCR models",
      "Implementation of mobile solutions in the form of SDKs, incorporating these OCR models and usable by other developers.",
    ],
  },
  {
    title: "Junior Cloud intern",
    company_name: "SONATEL",
    icon: sonatel,
    iconBg: "#FF7900",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Implementation of solutions allowing geographically dispersed teams to collaborate on documents online.",
      "Use of Power Platform tools (Power Apps, Power Automate) and SharePoint Framework (SPFx) to implement this solution.",
    ],
  },
  {
    title: "Junior DevOps",
    company_name: "InTouch SA",
    icon: intouch,
    iconBg: "#2F335A",
    date: "September 2024 - Present",
    points: [
        "Design and implementing the the architecture for a notifications microservice" ,
        "Managing multiple categories of notifications ( KYC , Transactional , Marketing ... ) " ,
        "Establishing a persistence mechanism for failures handling and retrials" ,
        "Templating features with placeholders for customization..."
    ],
  },
  {
    title: "Freelancing",
    company_name: "ATD CKS",
    icon: freelance,
    iconBg: "#FBE1AB",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Design and deployment of a website (https://fiayaagricole.net/) for the company Fiaya.",
      "Implementation of SEO strategies to increase traffic to Fiaya's website.",
    ],
  }
];






const testimonials = [
  {
    testimonial:
      "Will get to the people I've worked with in the past and come back soon...",
    name: "X",
    designation: "X",
    company: "X",
    image: "",
  },
  {
    testimonial:
      "Will get to the people I've worked with in the past and come back soon...",
    name: "X",
    designation: "X",
    company: "X",
    image: "",
  },
  {
    testimonial:
      "Will get to the people I've worked with in the past and come back soon...",
    name: "X",
    designation: "X",
    company: "X",
    image: "",
  },
];






 
const projects = [
  {
    name: "Study Buddy",
    description:
      "Web-based learning and sharing plateform . It allow users to connect , create discussions , join topics and share there mutual knowledge or find help when stuck with a specific question.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Django Rest-Framework",
        color: "green-text-gradient",
      },
      
    ],
    image: studybud,
    source_code_link: "https://github.com/Cassiopea2103/StudyBuddy",
  },
  {
    name: "SimulaForum",
    description:
      "A forum related to the SimulaMath software .Users can discuss various range of scientific domains and for about all academic levels including college , high school , university ... ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: simula,
    source_code_link: "https://github.com/Cassiopea2103/simulaForum",
  },
  {
    name: "Fiaya agricole",
    description:
      "An agriculture service providing and products selling platform made for the use of Fiaya company . It allows end users to navigate through the website , search for what agriculture needs they have and contact the company for reaching and end deal.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: fiaya,
    source_code_link: "https://github.com/Cassiopea2103/fiaya-agricole",
  },
  {
    name: "3D animated portfolio",
    description:
      "The very website you are visiting right now ! A project showcasing my works , experiences , skills.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three",
        color: "pink-text-gradient",
      }
    ],
    image: portfolio,
    source_code_link: "https://github.com/Cassiopea2103/3D-animated-portfolio",
  },
  {
    name: "3D AI-powered customization shirt",
    description:
      "Another simple, yet effective learn by doing project from JSMastery made with Three and React for creating customized creative shirt 3D models with AI features ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      }
    ],
    image: threeai,
    source_code_link: "https://github.com/Cassiopea2103/3D_AI_powered_animated_website",
  },
  {
    name: "Ganeyi",
    description:
      "A mobile plateform made for Optical Character Recognition AI models for processing authentication documents like Passports , bills ,NIC ...",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Android Java",
        color: "green-text-gradient",
      }
    ],
    image: ganeyi,
    source_code_link: "https://github.com/Cassiopea2103/ganeyi_v2",
  },
];

export { services, technologies, experiences, testimonials, projects }