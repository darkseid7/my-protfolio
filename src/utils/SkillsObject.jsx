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

import planetsFacts from "../assets/planets-facts.png";
import entertainmentWeb from "../assets/entertainment-web-app.png";
import restCountryApi from "../assets/rest-country-api.png";
import rickAndMortyApp from "../assets/rick-and-morty-app.png";
import chec from "../assets/chec.png";

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
];

export const ProjectsObject = [
  {
    name: "Planets Facts Size",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione et, aperiam qui, cumque unde, fugiat maiores earum eos quis impedit modi eum officia iure obcaecati libero in veritatis magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nihil labore eum sed laborum, minima fugiat aliquam accusantium soluta dolore facere nemo neque itaque nesciunt cupiditate perferendis! Laboriosam, delectus praesentium.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione et, aperiam qui, cumque unde, fugiat maiores earum eos quis impedit modi eum officia iure obcaecati libero in veritatis magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nihil labore eum sed laborum, minima fugiat aliquam accusantium soluta dolore facere nemo neque itaque nesciunt cupiditate perferendis! Laboriosam, delectus praesentium.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione et, aperiam qui, cumque unde, fugiat maiores earum eos quis impedit modi eum officia iure obcaecati libero in veritatis magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nihil labore eum sed laborum, minima fugiat aliquam accusantium soluta dolore facere nemo neque itaque nesciunt cupiditate perferendis! Laboriosam, delectus praesentium.",
    url: "https://darkseid7.github.io/rick-and-morty-react-app/",
    builtWith: [
      { svg: <Styledcomponents fill="#c76494" /> },
      { svg: <Vite /> },
      { svg: <Js /> },
      { svg: <Zustand /> },
      { svg: <ReactIcon /> },
    ],
    preview: rickAndMortyApp,
    created: "February 2020",
  },
  {
    name: "Rest Country Api",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione et, aperiam qui, cumque unde, fugiat maiores earum eos quis impedit modi eum officia iure obcaecati libero in veritatis magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nihil labore eum sed laborum, minima fugiat aliquam accusantium soluta dolore facere nemo neque itaque nesciunt cupiditate perferendis! Laboriosam, delectus praesentium.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione et, aperiam qui, cumque unde, fugiat maiores earum eos quis impedit modi eum officia iure obcaecati libero in veritatis magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nihil labore eum sed laborum, minima fugiat aliquam accusantium soluta dolore facere nemo neque itaque nesciunt cupiditate perferendis! Laboriosam, delectus praesentium.",
    url: "https://www.chec.com.co/",
    builtWith: [{ svg: <Js /> }, { svg: <Html /> }, { svg: <Sass /> }],
    preview: chec,
    created: "February 2020",
  },
];
