import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 bg-amber-200 " />,
    text: "Intermediate proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/images/Comfy-Store.PNG",
    url: "https://app.netlify.com/sites/zobs-comfy-store/",
    github: "https://github.com/zobbs-git",
    title: "comfy store",
    text: "Comfyssss Sloth is a trendy e-commerce furniture store offering a curated selection of stylish and affordable pieces. Explore our diverse collection, from modern to classic, and transform your space with ease. Enjoy a seamless shopping experience and secured transactions. Elevate your home with Comfy Sloth – where style meets convenience.",
  },
  {
    id: nanoid(),
    img: "/images/Backroads.PNG",
    url: "https://backkroads.netlify.app/",
    github: "https://github.com/zobbs-git",
    title: "Backroads tours",
    text: "Backroads: Your passport to unforgettable journeys. We're a premier travel agency, expertly crafting dream vacations. From exotic getaways to cultural escapades, we personalize every trip. Let us turn your wanderlust into reality. Explore with confidence, explore with Backroads.",
  },
  {
    id: nanoid(),
    img: "/images/Forkify.PNG",
    url: "https://forkify-zoba.netlify.app/",
    github: "https://github.com/zobbs-git",
    title: "forkify",
    text: "Forkify: Your go-to cooking companion. From perfect pizzas to savory chicken and delightful fish dishes, our recipe app brings culinary adventures to your kitchen. Easy-to-follow recipes, personalized recommendations, and a world of flavors at your fingertips. Elevate your cooking game with Forkify!",
  },
];
