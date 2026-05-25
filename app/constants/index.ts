import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "@/app/types";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Sobre Mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const services: TService[] = [
  {
    title: "Web Developer",
    icon: "/icons/web.png",
  },
  {
    title: "React Native Developer",
    icon: "/icons/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/icons/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/icons/creator.png",
  },
];

export const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "figma",
    icon: "/tech/figma.png",
  },
  {
    name: "docker",
    icon: "/tech/docker.png",
  },
];

export const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: "/company/starbucks.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: "/company/tesla.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: "/company/shopify.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: "/company/meta.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/carrent.png",
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/jobit.png",
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/tripguide.png",
    sourceCodeLink: "https://github.com/",
  },
];
