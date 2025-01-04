import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import toursImg from './assets/tours.png';
import menuImg from './assets/menu.png';
import mixmasterImg from './assets/mixmaster.png'
import sliderImg from "./assets/slider.png";


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
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: toursImg,
    url: "https://tourzz.netlify.app/",
    github: "https://github.com/Ankur2905/react-projects/tree/main/Tours",
    title: "Tours",
    text: "Tours is a React-based app that displays a list of tour plans fetched from an API. Users can mark tours as 'Not Interested,' which removes them from the list.",
  },
  {
    id: nanoid(),
    img: menuImg,
    url: "https://our-foood-menu.netlify.app/",
    github: "https://github.com/Ankur2905/react-projects/tree/main/Menu",
    title: "Menu",
    text: "Menu is a dynamic food filtering app built with React, allowing users to browse and filter dishes by categories like Breakfast, Lunch, Shakes, and All",
  },
  {
    id: nanoid(),
    img: mixmasterImg,
    url: "https://cocktail-mix-master-reactrouter.netlify.app/",
    github: "https://github.com/Ankur2905/react-projects/tree/main/mixmaster",
    title: "MixMaster",
    text: "Mix Master is a cocktail recipe app built with React, allowing users to search for drinks by name and view detailed information about each cocktail.",
  },
  {
    id: nanoid(),
    img: sliderImg,
    url: "https://react-projects-sliderr.netlify.app/",
    github: "https://github.com/Ankur2905/react-projects/tree/main/Slider",
    title: "Slider",
    text: "The Slider project is a React app that auto-slides profiles with a name, image, and description, with manual Next and Previous navigation.",
  },
];
