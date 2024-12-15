import { ArrowRight, Discord, Github, Instagram, Whatsapp } from "react-bootstrap-icons";
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
import hightlightImage from "./img/highlight.png"

function App() {
  return (
    <div className="bg-background/65 text-primary">
      <div className="h-screen w-full ">
        <div className="flex justify-between items-center w-full py-6 px-14 font-medium">
          <h1 className="text-xl">Zura</h1>
          <div className="flex items-center gap-6">
            <Github size={20} />
            <Instagram size={20} />
            <Discord size={20} />
            <Whatsapp size={20} />
          </div>
          <button className="border-2 border-primary py-2 px-4 rounded-full">
            Get in touch 👋
          </button>
        </div>
        <div className="flex flex-col gap-8 justify-end px-[8rem] py-[12rem] ">
          <div className="w-full flex justify-end mb-[15rem] text-8xl font-medium ">
            <h1>Fullstack Developer</h1>
          </div>
          <div className="flex items-end gap-8">
            <h1 className="text-8xl font-medium w-1/3">Maliki Azis Azyura</h1>
            <p className="text-xl text-primary/75 w-1/2 text-justify">
              {/* Hi there! i'm a junior web developer that passionate about turning ideas into
              functional, beautiful websites. Check out my work and let’s create
              something amazing together! */}
              To deliver exceptional web development solutions by combining
              technical expertise with creative design, fostering digital
              transformation and driving business growth. Checkout my work.
            </p>
          </div>
          <button className="flex gap-2 text-2xl font-extralight items-center">
            Read more
            <ArrowRight />
          </button>
        </div>
      </div>
      <img
        src={hightlightImage}
        className="h-[25rem] object-cover w-full"
      />
      <div className="space-y-4 pl-[8rem] py-[8rem]">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-medium">
            ── <span className="text-secondary">Expertise</span>
          </h1>
          <div className="flex items-center gap-3 text-2xl">
            <RiJavascriptFill />
            <BiLogoTypescript />
            <RiReactjsFill />
            <RiPhpLine />
            <FaGit />
            <RiNodejsLine />
            <RiNextjsFill />
            <FaLaravel />
          </div>
        </div>
        <p className="text-justify opacity-75 w-1/2">
          I excel in{" "}
          <span className="text-tertiary">
            turning ideas into functional and visually appealing web
            applications
          </span>
          . My passion lies in crafting seamless user experiences and building
          efficient, scalable solutions with attention to detail.
        </p>
      </div>
      <div className="px-[8rem] py-[5rem]">
        <h1 className="text-3xl font-medium w-full text-center">
          ── <span className="text-secondary">Projects</span>
        </h1>
        <div className="grid grid-cols-12 mt-12 gap-6">
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full relative col-span-4 h-[18rem] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <div className="flex flex-col gap-4 w-full h-full bg-primary/65 group-hover:opacity-0 transition-all text-white font-medium text-xl absolute left-0 top-0 items-center justify-center z-10">
                  <h1>{item.title}</h1>
                  <div className="flex items-center gap-3 text-4xl">
                    {item.techs?.map((Tech, index) => (
                      <Tech key={index}/>
                    ))}
                  </div>
                </div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full absolute left-0 group-hover:scale-110 transition-all"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
