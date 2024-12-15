import { SiMysql } from "react-icons/si";
import img1 from "../img/projects/1.png";
import img11 from "../img/projects/11.png";
import img2 from "../img/projects/2.png";
import img21 from "../img/projects/21.png";
import img22 from "../img/projects/22.png";
import img23 from "../img/projects/23.png";
import img24 from "../img/projects/24.png";
import img25 from "../img/projects/25.png";
import img3 from "../img/projects/3.png";
import img31 from "../img/projects/31.png";
import img32 from "../img/projects/32.png";
import img33 from "../img/projects/33.png";
import img4 from "../img/projects/4.png";
import img41 from "../img/projects/41.png";
import img42 from "../img/projects/42.png";
import img43 from "../img/projects/43.png";
import img5 from "../img/projects/5.png";
import img51 from "../img/projects/51.png";
import img52 from "../img/projects/52.png";
import img53 from "../img/projects/53.png";
import img54 from "../img/projects/54.png";
import img55 from "../img/projects/55.png";
import img6 from "../img/projects/6.png";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

export const projects = [
  {
    id: 1,
    title: "Sine Visualization",
    description: "",
    thumbnail: img1,
    images: [img11],
    techs: [RiJavascriptFill, RiReactjsFill, RiTailwindCssFill],
  },
  {
    id: 2,
    title: "Presynce",
    description: "",
    thumbnail: img2,
    images: [img21, img22, img23, img24, img25],
    techs: [
      BiLogoTypescript,
      RiReactjsFill,
      RiNodejsLine,
      RiTailwindCssFill,
      SiMysql,
    ],
  },
  {
    id: 3,
    title: "PT. Manunggal Teknik Persada Company Profile",
    description: "",
    thumbnail: img3,
    images: [img31, img32, img33],
    techs: [RiJavascriptFill, RiReactjsFill, RiTailwindCssFill],
  },
  {
    id: 4,
    title: "Travel Ticket Booking",
    description: "",
    thumbnail: img4,
    images: [img41, img42, img43],
    techs: [RiJavascriptFill, RiReactjsFill, RiNextjsFill, RiTailwindCssFill],
  },
  {
    id: 5,
    title: "GoUmrah - Admin",
    description: "",
    thumbnail: img5,
    images: [img51, img52, img53, img54, img55],
    techs: [BiLogoTypescript, RiReactjsFill, RiTailwindCssFill],
  },
  {
    id: 6,
    title: "Hotel Booking Website",
    description: "",
    thumbnail: img6,
    techs: [FaFigma],
  },
];
