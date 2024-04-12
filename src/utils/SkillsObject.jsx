import { ReactComponent as Html } from "../assets/html.svg";
import { ReactComponent as Css } from "../assets/css.svg";
import { ReactComponent as Sass } from "../assets/sass.svg";
import { ReactComponent as Tailwind } from "../assets/tailwind.svg";
import { ReactComponent as Js } from "../assets/js.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as Vite } from "../assets/vite.svg";
import { ReactComponent as Webpack } from "../assets/webpack.svg";
import { ReactComponent as Npm } from "../assets/npm.svg";
import { ReactComponent as Styledcomponents } from "../assets/styledcomponents.svg";
import { ReactComponent as Framer } from "../assets/framer.svg";
import { ReactComponent as Zustand } from "../assets/zustand.svg";
import { ReactComponent as Threejs } from "../assets/threejs.svg";
import { ReactComponent as Redux } from "../assets/redux.svg";
import { ReactComponent as Svelte } from "../assets/svelte.svg";
import { ReactComponent as Supabase } from "../assets/supabase.svg";

import planetsFacts from "../assets/planets-facts.png";
import entertainmentWeb from "../assets/entertainment-web-app.png";
import restCountryApi from "../assets/rest-country-api.png";
import rickAndMortyApp from "../assets/rick-and-morty-app.png";
import chec from "../assets/chec.png";
import ceramicCube from "../assets/ceramic-cube.png";
import masuStrorefront from "../assets/masu-storefront.png";

export const SkillsObject = [
  { name: "HTML", svg: <Html /> },
  { name: "CSS", svg: <Css /> },
  { name: "JavaScript", svg: <Js /> },
  { name: "Sass", svg: <Sass /> },
  {
    name: "Tailwind",
    svg: <Tailwind />,
    url: "https://tailwindcss.com/",
  },
  { name: "React", svg: <ReactIcon />, url: "https://react.dev/" },
  { name: "Vite", svg: <Vite />, url: "https://vitejs.dev/" },
  { name: "Webpack", svg: <Webpack />, url: "https://webpack.js.org/" },
  { name: "NPM", svg: <Npm />, url: "https://www.npmjs.com/" },
  {
    name: "Styled-components",
    svg: <Styledcomponents />,
    url: "https://styled-components.com/",
  },
  {
    name: "Framer-motion",
    svg: <Framer />,
    url: "https://www.framer.com/motion/",
  },
  {
    name: "Zustand",
    svg: <Zustand />,
    url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  {
    name: "Threejs",
    svg: <Threejs />,
    url: "https://threejs.org/",
  },
  {
    name: "Redux Toolkit",
    svg: <Redux />,
    url: "https://redux.js.org/",
  },
  {
    name: "Sveltekit",
    svg: <Svelte />,
    url: "https://kit.svelte.dev/",
  },
  {
    name: "Supabase",
    svg: <Supabase />,
    url: "https://supabase.com/",
  },
];

export const ProjectsObject = [
  {
    name: "MASU Storefront",
    description:
      "The project MASU Storefront I developed using Sveltekit and Supabase involves creating an e-commerce storefront for MASU. The website features a user-friendly interface that allows customers to browse products, add them to their cart, and complete their purchase. With seamless integration of Supabase for data storage and authentication, the website offers a secure and efficient shopping experience. The project showcases the capabilities of Sveltekit for building dynamic web applications and demonstrates the power of Supabase for backend development. Explore the MASU Storefront and discover a world of stylish and innovative products.",
    url: "https://www.masu.mx/",
    builtWith: [
      { svg: <Vite /> },
      { svg: <Js /> },
      { svg: <Supabase /> },
      { svg: <Svelte /> },
    ],
    preview: masuStrorefront,
    created: "Nov 2023",
  },
  {
    name: "Ceramic Cube Threejs Project",
    description:
      "The project I developed using React and React Three Fiber involves creating an interactive cube that reflects light emitted from rotating light bars. Implemented with React Three Fiber, a library based on Three.js, the project allows users to observe the cube as it reflects light from the rotating bars, resulting in visually captivating effects of lights and shadows. It showcases the capabilities of React Three Fiber for 3D rendering and offers an engaging interactive experience for users.",
    url: "https://ceramic-cube-threejs.vercel.app/",
    builtWith: [
      { svg: <Vite /> },
      { svg: <Js /> },
      { svg: <ReactIcon /> },
      { svg: <Threejs /> },
    ],
    preview: ceramicCube,
    created: "Jun 2023",
  },
  {
    name: "Planets Facts Size",
    description:
      "Is a captivating website built with React, Styled Components, Vite, Framer Motion, and Anime.js. Explore the sizes of various planets in our solar system, from Mercury to Neptune, with engaging animations and smooth transitions. With a user-friendly interface, this website provides captivating images, concise descriptions, and fascinating facts about planetary dimensions. Immerse yourself in the beauty and scale of the planets and expand your knowledge of the cosmic wonders that surround us.",
    url: "https://planets-fact-size-website-d6ygsjmkv-darkseid7.vercel.app/",
    builtWith: [
      { svg: <Styledcomponents fill="#c76494" /> },
      { svg: <Vite /> },
      { svg: <Framer /> },
      { svg: <Js /> },
      { svg: <ReactIcon /> },
    ],
    preview: planetsFacts,
    created: "May 2023",
  },
  {
    name: "Entertainment Web App",
    description:
      "Is a dynamic website built with React, Vite, Framer Motion, Zustand, Styled Components, and Firebase. Discover a vast collection of TV series and movies with a user-friendly interface, featuring a search functionality for easy exploration. Take advantage of the seamless Firebase integration to log in to your account and personalize your viewing experience. With smooth animations and state management powered by Zustand, this app offers a delightful browsing experience. Immerse yourself in a world of entertainment, where you can access an extensive library of content and make the most of its intuitive features.",
    url: "https://entertainment-web-app-react-alpha.vercel.app/",
    builtWith: [
      { svg: <Styledcomponents fill="#c76494" /> },
      { svg: <Vite /> },
      { svg: <Framer /> },
      { svg: <Js /> },
      { svg: <Zustand /> },
      { svg: <ReactIcon /> },
    ],
    preview: entertainmentWeb,
    created: "May 2023",
  },
  {
    name: "The Rick and Morty App",
    description:
      "Is an immersive website built with React, Vite, Anime.js, and Styled Components. Explore the world of 'Rick and Morty' with a comprehensive list of characters, a convenient search feature, and an infinity scroll for effortless browsing. Powered by Anime.js, the app brings these beloved characters to life with captivating animations.",
    url: "https://darkseid7.github.io/rick-and-morty-react-app/",
    builtWith: [
      { svg: <Styledcomponents fill="#c76494" /> },
      { svg: <Vite /> },
      { svg: <Js /> },
      { svg: <ReactIcon /> },
    ],
    preview: rickAndMortyApp,
    created: "February 2020",
  },
  {
    name: "Rest Country Api",
    description:
      "is a feature-rich website developed using React, Vite, Styled Components, and the useContext API. Discover a comprehensive list of countries, complete with a convenient search feature and continent filtering. Selecting a country reveals detailed information about it. The app also incorporates the useContext API to seamlessly switch between light and dark modes, enhancing the visual experience. With its intuitive design and efficient use of technologies, 'Rest Country API' offers a seamless browsing experience and an in-depth exploration of countries worldwide.",
    url: "https://darkseid7.github.io/rick-and-morty-react-app/",
    builtWith: [
      { svg: <Styledcomponents fill="#c76494" /> },
      { svg: <Vite /> },
      { svg: <Js /> },
      { svg: <Zustand /> },
      { svg: <ReactIcon /> },
    ],
    preview: restCountryApi,
    created: "February 2020",
  },
  {
    name: "Chec",
    description:
      "As the leader of the CHEC project, I spearheaded the development of a robust and user-friendly interface using HTML, CSS, and JavaScript. With a strong focus on accessibility and usability, the project prioritized creating an inclusive experience for all users. The meticulously designed interface ensures that users can easily navigate and interact with the website, regardless of their abilities. By implementing accessibility best practices, the project adheres to industry standards, making it accessible to a wide range of users. The user-centric design and seamless usability showcase our commitment to delivering a high-quality and satisfying experience. ",
    url: "https://www.chec.com.co/",
    builtWith: [{ svg: <Js /> }, { svg: <Html /> }, { svg: <Sass /> }],
    preview: chec,
    created: "February 2020",
  },
];
