"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import { BsFillArrowUpRightCircleFill, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Project({
  name,
  skills,
  slug,
  image,
  github,
  live,
  content,
}: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <div className="flex absolute gap-2 -right-5 -top-3 z-10">
       {github? <Link href={`${github}`}>
          <FaGithubSquare
            size={35}
            className="hover:rotate-45 transition-transform delay-150 scale-105"
          />
        </Link>: ""}
       {live? <Link href={`${live}`}>
          <BsFillArrowUpRightCircleFill
            size={35}
            className="hover:rotate-45 transition-transform delay-150 scale-105"
          />
        </Link>: ""}
      </div>
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <Image
          src={image}
          width={700}
          height={500}
          alt="Project I worked on"
          quality={95}
          className="lg:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        lg:transition 
        lg:group-hover:scale-[1.04]
        lg:group-hover:-translate-x-3
        lg:group-hover:translate-y-3
        lg:group-hover:-rotate-2

        lg:group-even:group-hover:translate-x-3
        lg:group-even:group-hover:translate-y-3
        lg:group-even:group-hover:rotate-2

        lg:group-even:right-[initial] group-even:-left-40"
        />
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <PortableText value={content} />
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
