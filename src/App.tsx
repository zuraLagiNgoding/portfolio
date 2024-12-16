import { ArrowRight, Discord, Github, Instagram } from "react-bootstrap-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGit, FaLaravel } from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsLine,
  RiPhpLine,
  RiReactjsFill,
} from "react-icons/ri";
import { projects } from "./data/projects";
import hightlightImage from "./img/highlight.png";
import React from "react";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectType {
  thumbnail: string;
  images: string[];
  title: string;
  description: string;
  source_code?: string;
}

function App() {
  const [selectedProject, setSelectedProject] = React.useState<ProjectType>();
  const expertiseRef = React.useRef<HTMLImageElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const fade = {
    initial: {
      filter: "blur(50px)",
      opacity: 0,
      y: 100,
    },
    animate: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  const projectAnimate = {
    blury: {
      filter: "blur(50px)",
      opacity: 0,
      y: 100,
    },
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
          duration: 0.5,
        },
      };
    },
  };

  return (
    <div className="relative  text-primary overflow-x-hidden ">
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(undefined)}
          className="fixed w-full h-screen bg-black/35 z-[49]"
        />
      )}
      <div
        className={clsx(
          "fixed flex flex-col p-8 h-screen max-h-screen overflow-auto sm:w-2/5 w-full bg-white right-0 transition-transform duration-1000 shadow-2xl z-50 space-y-8",
          !selectedProject && "translate-x-[100rem]"
        )}
      >
        <div className="w-full flex justify-end">
          <XIcon onClick={() => setSelectedProject(undefined)} />
        </div>
        <div>
          <h1 className="text-lg font-light tracking-wider">Project Name</h1>
          <h1 className="text-2xl font-semibold">{selectedProject?.title}</h1>
        </div>
        <div>
          <h1 className="text-lg font-light tracking-wider">Description</h1>
          <h1 className="sm:text-xl opacity-65 text-justify">
            {selectedProject?.description}
          </h1>
        </div>
        {selectedProject?.source_code && (
          <div>
            <h1 className="text-lg font-light tracking-wider">Source Code</h1>
            <a
              className="text-xl opacity-65 text-justify flex items-center gap-2 text-secondary"
              href={selectedProject?.source_code}
            >
              Github <Github size={20} />
            </a>
          </div>
        )}
        <div className="space-y-4">
          <h1 className="text-lg font-light tracking-wider">Preview</h1>
          <div className="flex flex-col gap-8">
            {selectedProject?.images.map((image, index) => (
              <img src={image} alt={index.toString()} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-background/65">
        <div className="absolute bottom-auto left-0 top-0 h-[50rem] w-[50rem] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(87,182,98,0.5)] opacity-45 blur-[100px]"></div>
      </div>
      <div className="md:h-screen w-full ">
        <div className="fixed flex justify-between items-center w-full py-6 px-6 md:px-14 font-medium z-[48] bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIwLjQ0Ij4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4xMTYiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgICAgICAgICAgIDxmZVNwZWN1bGFyTGlnaHRpbmcgc3VyZmFjZVNjYWxlPSIxOCIgc3BlY3VsYXJDb25zdGFudD0iMC43IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAgICAgICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogICAgICAgICAgICA8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0ic3BlY3VsYXJMaWdodGluZyIgcmVzdWx0PSJjb2xvcm1hdHJpeCI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPC9kZWZzPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+CiAgICAgIDwvc3ZnPgogICAg')] bg-blend-overlay">
          <h1 className="text-xl">Zura</h1>
          <div className="flex items-center gap-6 invisible md:visible">
            <a href="https://github.com/zuraLagiNgoding/">
              <Github size={20} />
            </a>
            <a href="https://www.instagram.com/z.zuraaa_/">
              <Instagram size={20} />
            </a>
            <Discord
              className="cursor-pointer"
              size={20}
              onClick={() => navigator.clipboard.writeText("gyuuuu.")}
            />
          </div>
          <button
            className="border-2 border-primary py-2 px-4 rounded-full"
            onClick={() => {
              if (contactRef.current) {
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Get in touch 👋
          </button>
        </div>
        <div className="flex flex-col gap-8 justify-end px-4 md:px-[8rem] py-[12rem]">
          <motion.div
            variants={fade}
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            whileInView="animate"
            className="md:w-full flex justify-end md:mb-[15rem] text-6xl md:text-6xl xl:text-8xl font-medium "
          >
            <h1>Fullstack Developer</h1>
          </motion.div>
          <motion.div
            variants={fade}
            whileInView="animate"
            initial="initial"
            className="flex xl:flex-row flex-col xl:items-end gap-8"
          >
            <h1 className="md:text-6xl xl:text-8xl text-3xl font-medium xl:w-1/2">
              Maliki Azis Azyura
            </h1>
            <p className="md:text-xl text-primary/75 xl:w-1/2 w-full text-justify">
              {/* Hi there! i'm a junior web developer that passionate about turning ideas into
              functional, beautiful websites. Check out my work and let’s create
              something amazing together! */}
              To deliver exceptional web development solutions by combining
              technical expertise with creative design, fostering digital
              transformation and driving business growth. Checkout my work!
            </p>
          </motion.div>
          <motion.button
            variants={fade}
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            whileInView="animate"
            className="flex gap-2 md:text-2xl text-lg font-extralight items-center"
            onClick={() => {
              if (expertiseRef.current) {
                expertiseRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Read more
            <ArrowRight />
          </motion.button>
        </div>
      </div>
      <img
        ref={expertiseRef}
        src={hightlightImage}
        className="h-[25rem] object-cover w-full"
      />
      <div className="flex flex-col relative md:pl-[8rem] md:pr-0 px-[2rem] py-[8rem] pb-[12rem]">
        <div className="relative space-y-4 z-10 w-full">
          <div className="flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
            <motion.h1
              variants={fade}
              initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
              whileInView="animate"
              className="md:text-3xl text-xl font-medium"
            >
              ── Expertise
            </motion.h1>
            <div className="flex items-center gap-3 md:text-2xl text-xl">
              <motion.div
                variants={projectAnimate}
                custom={0.5}
                initial="blury"
                whileInView="animate"
              >
                <RiJavascriptFill />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={1}
                initial="blury"
                whileInView="animate"
              >
                <BiLogoTypescript />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={1.5}
                initial="blury"
                whileInView="animate"
              >
                <RiReactjsFill />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={2}
                initial="blury"
                whileInView="animate"
              >
                <RiPhpLine />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={2.5}
                initial="blury"
                whileInView="animate"
              >
                <FaGit />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={3}
                initial="blury"
                whileInView="animate"
              >
                <RiNodejsLine />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={3.5}
                initial="initial"
                whileInView="animate"
              >
                <RiNextjsFill />
              </motion.div>
              <motion.div
                variants={projectAnimate}
                custom={4}
                initial="initial"
                whileInView="animate"
              >
                <FaLaravel />
              </motion.div>
            </div>
          </div>
          <motion.p
            variants={fade}
            initial="initial"
            whileInView="animate"
            className="text-justify opacity-75 md:w-1/2"
          >
            I excel in{" "}
            <span className="text-tertiary">
              turning ideas into functional and visually appealing web
              applications
            </span>
            . My passion lies in crafting seamless user experiences and building
            efficient, scalable solutions with attention to detail.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[110%] bg-background md:rotate-2" />
      </div>
      <div className="xl:px-[8rem] px-[2rem] py-[5rem]">
        <h1 className="md:text-3xl text-xl font-medium w-full text-center">
          ── Projects
        </h1>
        <div className="grid grid-cols-12 mt-12 xl:gap-6 gap-3">
          {projects.map((item, index) => {
            return (
              <motion.div
                variants={projectAnimate}
                custom={index}
                initial="initial"
                whileInView="animate"
                onClick={() => setSelectedProject(item)}
                key={index}
                className="w-full relative md:col-span-4 col-span-12 h-[18rem] xl:rounded-2xl rounded-lg overflow-hidden shadow-xl group cursor-pointer"
              >
                <div className="flex flex-col md:gap-4 w-full h-full bg-primary/65 group-hover:opacity-0 duration-500 transition-all text-white font-medium md:text-xl absolute left-0 top-0 items-center justify-center z-10">
                  <h1 className="text-center">{item.title}</h1>
                  <div className="flex items-center gap-3 md:text-4xl text-xl">
                    {item.techs?.map((Tech, index) => (
                      <Tech key={index} />
                    ))}
                  </div>
                </div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full absolute left-0 group-hover:scale-110 transition-all object-cover object-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="xl:px-[10rem] px-[2rem] py-[12rem] flex w-full">
        <div className="space-y-8 basis-1/2">
          <div className="space-y-4" ref={contactRef}>
            <p className="md:text-xl opacity-75">
              Got a question or need a partner up?
            </p>
            <h1 className="text-7xl font-medium">Let's Talk 🤝</h1>
          </div>
          <div>
            <div className="flex items-center gap-6">
              <a href="mailto:azyuraazis@gmail.com">azyuraazis@gmail.com</a>
              <a href="https://github.com/zuraLagiNgoding/">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/z.zuraaa_/">
                <Instagram size={20} />
              </a>
              <Discord
                className="cursor-pointer"
                size={20}
                onClick={() => navigator.clipboard.writeText("gyuuuu.")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
