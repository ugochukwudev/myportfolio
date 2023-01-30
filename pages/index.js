import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

import prof from "../public/img.jpeg";
import { motion } from "framer-motion";
export default function Home() {
  const [hideElements, setHideElements] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({
    profileImg: "",
    username: "testopod",
    name: "testingokl",
    password: "testilodoops",
  });
  const portfolio = [
    {
      src: "/first-gig.png",
      link: "https://techx.com.ng",
      name: "TechX",
      desc: "A webPage where you read tech news",
    },
    {
      src: "/second-gig.png",
      link: "https://techopenai.vercel.app/",
      name: "Bro AI",
      desc: "A chat gpt clone that can answer questions",
    },
    {
      src: "/third-gig.png",
      link: "https://hiddenme.vercel.app/",
      name: "Hidden Me",
      desc: "A webPage where you make  stories of your day ",
    },
    {
      src: "/fourth-gig.png",
      link: "https://waitlist-ten.vercel.app/",
      name: "Waitlist",
      desc: "A webPage showing a proffesional waitlist ui",
    },
    {
      src: "/fifth-gig.png",
      link: "https://emekasportfolio.vercel.app/",
      name: "Portfolio",
      desc: "A webPage I built for a client to showcase his work",
    },
    {
      src: "/sixth-gig.png",
      link: "https://social-ui-seven.vercel.app/",
      name: "Social UI",
      desc: "A social media website ui ",
    },
  ];
  useEffect(() => {
    const check = window.innerWidth;

    if (check > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setHideElements(false);
    }, 4000);
  }, []);

  const ball = {
    hidden: {
      transform: "scale(1) ",
      opacity: 1,
      height: isMobile ? "5%" : "10%",
      width: isMobile ? "50%" : "5%",
      marginTop: isMobile ? "100%" : "20%",
      marginLeft: "50%",
      marginRight: "auto",
      marginBottom: "auto",
      borderRadius: "9999px",
      zIndex: 999999999999999999999,
    },
    visible: {
      transform: " rotate(360deg)",
      width: ["5%", "50%"],
      height: ["10%", isMobile ? "30%" : "100%"],
      marginTop: [isMobile ? "40%" : "20%", isMobile ? "50%" : "0%"],
      marginLeft: ["50%", "25%"],
      marginRight: "auto",
      marginBottom: "auto",
      borderRadius: "9999px",
      opacity: [1, 1, 0],
    },
  };
  const off = useRef();

  return (
    <>
      {hideElements && (
        <motion.div
          animate={{
            opacity: [1, 1, 0],
          }}
          ref={off}
          transition={{ ease: "easeOut", duration: 4 }}
          className="bg-white absolute h-[100vh] w-[100vw] z-[99999999999] "
        ></motion.div>
      )}
      {hideElements && (
        <motion.div
          variants={ball}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeOut", duration: 2 }}
          className="bg-gray-900 absolute  z-[99999999999999999999]"
        ></motion.div>
      )}

      <div
        className={`${darkMode ? "dark" : ""} z-[9999999999999999999999999]`}
      >
        <Head>
          <title>my portfolio</title>
          <meta name="description" content="You're welcome to my portfolio " />
          <link rel="icon" href="/img.jpeg" />
        </Head>
        <main className=" bg-white   px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <div className="sticky top-0 z-[99999] bg-white dark:bg-gray-900">
            <nav className="py-10    flex justify-between dark:text-white">
              <Link href="/" className="cursor-pointer">
                <h1
                  data-aos="fade-down"
                  className=" before:block before:content-[''] before:w-[0] before:h-[2px] before:bg-teal-600   duration-150 before:transition-[width] hover:before:w-[100%]  font-burtons text-base lg:text-2xl cursor-pointer after:block after:content-[''] after:w-[0] after:h-[2px] after:bg-teal-600  after:transition-[width] hover:after:w-[100%]"
                >
                  developed by Paul
                </h1>
              </Link>

              <ul className="flex items-center ">
                <li>
                  <BsFillMoonStarsFill
                    data-aos="fade-right"
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li data-aos="fade-left">
                  <a
                    rel="noreferrer"
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/Ikegbulam's Resume (12).pdf"
                    download="ugo's-resume"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <hr className="bg-teal-600  w-full" />
          </div>
          <div className="text-center md:p-10 py-10">
            <h2
              data-aos="zoom-in-up"
              className="text-xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
            >
              Ugochukwu Paul
            </h2>
            <h3
              data-aos="zoom-in-down"
              className="text-xl py-2 dark:text-white md:text-3xl"
            >
              Fullstack Javascript Developer
            </h3>
            <p
              data-aos="zoom-out"
              className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl"
            >
              {`Hardworking and enthusiastic student working towards a junior role
            in software development. Seeking to use my knowledge and skills to
            effectively serve your company in a junior-role (frontend/backend). Dedicated and committed to becoming a dependable and
            valuable team member.`}
            </p>
            <div className="text-5xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
              <a
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                rel="noreferrer"
                href="https://twitter.com/i_am_ugo_"
                target="_blank"
              >
                <AiFillTwitterCircle className="cursor-pointer transition-[color] duration-[400ms] w-[50px] h-[50px] hover:text-teal-600" />
              </a>
              <a
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-easing="ease-in-sine"
                rel="noreferrer"
                href="https://www.facebook.com/paul.ambrose.9085"
                target="_blank"
              >
                <AiFillFacebook className="cursor-pointer transition-[color] duration-[400ms] w-[50px] h-[50px] hover:text-teal-600" />
              </a>
              <a
                data-aos="fade-left"
                data-aos-offset="250"
                data-aos-easing="ease-in-sine"
                rel="noreferrer"
                href="https://wa.me/qr/XMNKKVOTTFDHE1"
                target="_blank"
              >
                <AiOutlineWhatsApp className="cursor-pointer transition-[color] duration-[400ms] w-[50px] h-[50px] hover:text-teal-600" />
              </a>
              <a
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCivEhyqhkJesQaNB_imgHEg"
                target="_blank"
              >
                <AiFillYoutube className="cursor-pointer transition-[color] duration-[400ms] w-[50px] h-[50px] hover:text-teal-600" />
              </a>
              <a
                data-aos="fade-up"
                data-aos-offset="320"
                data-aos-easing="ease-in-sine"
                rel="noreferrer"
                href="https://github.com/ugochukwudev"
                target="_blank"
              >
                <AiFillGithub className="cursor-pointer transition-[color] duration-[400ms] w-[50px] h-[50px] hover:text-teal-600" />
              </a>
            </div>
            <div className="lg:mx-auto cursor-pointer bg-gradient-to-b from-teal-500 rounded-full w-[50vw] ml-auto mr-auto h-[50vw] relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                src={prof}
                alt="user-image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <section>
            <div>
              <h3
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="text-3xl py-1 dark:text-white "
              >
                Services I offer
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                {`Since the beginning of my journey as a developer, I've done remote
              work for`}
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                I offer from a wide range of services, including ui
                developement, Api consumption , backend developement etc. Just
                call me a fullstack javascript developer.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div
                data-aos="flip-left"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
              >
                <Image
                  alt="design-logo"
                  src={design}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  Ui design.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1 ">JAVASCRIPT</p>
                <p className="text-gray-800 py-1 ">Typescript</p>
                <p className="text-gray-800 py-1">REACT JS</p>
                <p className="text-gray-800 py-1">MATERIAL UI</p>
                <p className="text-gray-800 py-1">TAILWIND CSS</p>
                <p className="text-gray-800 py-1">...LOADING</p>
              </div>
              <div
                data-aos="flip-right"
                data-aos-offset="180"
                data-aos-easing="ease-in-sine"
                className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              >
                <Image alt="code-logo" src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  {`Do you have an idea for your next great website? Let's make it a
                reality.`}
                </p>
                <h4 className="py-4 text-teal-600">Coding Tools I Use</h4>
                <p className="text-gray-800 py-1 ">JAVASCRIPT</p>
                <p className="text-gray-800 py-1 ">Typescript</p>
                <p className="text-gray-800 py-1">REACT JS</p>
                <p className="text-gray-800 py-1">MATERIAL UI</p>
                <p className="text-gray-800 py-1">TAILWIND CSS</p>
                <p className="text-gray-800 py-1">NODE JS</p>
                <p className="text-gray-800 py-1">EXPRESS JS</p>

                <p className="text-gray-800 py-1">...LOADING</p>
              </div>
              <div
                data-aos="flip-left"
                data-aos-offset="210"
                data-aos-easing="ease-in-sine"
                className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              >
                <Image
                  alt="consulting-logo"
                  src={consulting}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">🌚🌚🌚</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"
                className="text-3xl py-1 dark:text-white "
              >
                Portofolio
              </h3>
              <p
                data-aos="fade-up"
                data-aos-offset="180"
                data-aos-easing="ease-in-sine"
                className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                {`Since the beginning of my journey as a developer, I've done remote
              work for`}
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="210"
                data-aos-easing="ease-in-sine"
                className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
              >
                I offer from a wide range of services, including programming ,
                debugging, web scrapping , bots etc.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-10 md:py-10 lg:flex-row lg:flex-wrap">
              {portfolio.map((item, i) => {
                const random = i % 2 === 0 ? "Even" : "Odd";
                return (
                  <div
                    data-aos={`${
                      random === "Odd" ? "flip-left" : "flip-right"
                    }`}
                    data-aos-easing="ease-in-sine"
                    key={i}
                    className="basis-1/3 relative group  flex-1 w-[full] h-fit "
                  >
                    <Image
                      className="rounded-[14px] "
                      objectFit="contain"
                      width={"100%"}
                      height={"50%"}
                      layout="responsive"
                      src={item?.src}
                      alt={item?.link}
                    />

                    <div className="bg-[rgba(31,41,55,0.8)] md:bg-[rgba(31,41,55,1)]  group-hover:opacity-100 transition-[opacity] duration-[1000ms] opacity-0  cursor-pointer  px-6 py-1 text-white absolute w-full h-full md:h-[60%] top-0 md:top-[40%]">
                      <p className="font-semibold text-teal-600">
                        {item?.name}
                      </p>
                      <p className="font-normal leading-[1.5] mb-1">
                        {item?.desc}
                      </p>
                      <a
                        rel="noreferrer"
                        href={item?.link}
                        target="_blank"
                        className="decoration-0 "
                      >
                        <button className="px-6 py-2 rounded-[3px] bg-teal-600">
                          View
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="bg-white border-2 rounded-t-xl text-center h-[50px] py-[15px] drop-shadow-[2px_2px_20px_rgba(0,0,0,0.5)]">
            <p className="italic font-bold ">Thanks for hiring me ! </p>
          </div>
        </main>
      </div>
    </>
  );
}
