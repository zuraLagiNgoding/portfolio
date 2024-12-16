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
    description:
      "This web-based school project showcases a dynamic and interactive visualization of sine waves. Built using modern web technologies, it demonstrates mathematical concepts in a visually appealing and intuitive way. school project",
    thumbnail: img1,
    images: [img11, img1],
    techs: [RiJavascriptFill, RiReactjsFill, RiTailwindCssFill],
    source_code: "https://github.com/zuraLagiNgoding/sine-visualization",
  },
  {
    id: 2,
    title: "Presynce",
    description:
      "A comprehensive web application designed to streamline school attendance management. Presynce offers an intuitive dashboard, attendance recap functionality, and real-time notifications, enhancing communication between teachers and students. Additional features include an inbox system for seamless interaction and detailed attendance reporting, making it a robust solution for modern educational institutions.",
    thumbnail: img2,
    images: [img21, img22, img23, img24, img25],
    techs: [
      BiLogoTypescript,
      RiReactjsFill,
      RiNodejsLine,
      RiTailwindCssFill,
      SiMysql,
    ],
    source_code: "https://github.com/zuraLagiNgoding/react-student-attendance",
  },
  {
    id: 3,
    title: "PT. Manunggal Teknik Persada Company Profile",
    description:
      "PT. Manunggal Teknik Persada specializes in manufacturing supplies and construction consulting. With a focus on quality and precision, the company also offers professional maintenance and repair services, catering to diverse industrial and construction needs.",
    thumbnail: img3,
    images: [img31, img32, img33],
    techs: [RiJavascriptFill, RiReactjsFill, RiTailwindCssFill],
  },
  {
    id: 4,
    title: "Travel Ticket Booking",
    description:
      "A web-based application designed to simplify travel planning for Padang city tourism. This platform allows users to conveniently book tickets for various attractions and activities, enhancing their travel experience with seamless and efficient service.",
    thumbnail: img4,
    images: [img41, img42, img43],
    techs: [RiJavascriptFill, RiReactjsFill, RiNextjsFill, RiTailwindCssFill],
    source_code: "https://github.com/zuraLagiNgoding/tiketwisata-padang",
  },
  {
    id: 5,
    title: "GoUmrah - Admin",
    description:
      '"GoUmrah" is a mobile application by PT. Kabarhaji that revolutionizes the Umrah booking process by offering users a wide selection of flexible packages tailored to individual needs. My role in this project focuses on developing its comprehensive admin dashboard. The dashboard serves as the backbone of the application, allowing administrators to efficiently manage Umrah packages, track user bookings, monitor operational workflows, and send timely updates to users. By ensuring a seamless backend system, the admin dashboard contributes to enhancing user experience and maintaining the app’s operational excellence.',
    thumbnail: img5,
    images: [img51, img52, img53, img54, img55],
    techs: [BiLogoTypescript, RiReactjsFill, RiTailwindCssFill],
  },
  {
    id: 6,
    title: "Hotel Booking Website",
    description:
      "This project focuses on creating an intuitive and visually appealing user interface for a hotel booking web application. Emphasizing user-centric design, the platform offers seamless navigation, streamlined booking processes, and an engaging experience across devices. The design incorporates features such as personalized search filters, detailed room views, and easy payment integration to enhance usability and satisfaction.",
    thumbnail: img6,
    images: [],
    techs: [FaFigma],
  },
];
