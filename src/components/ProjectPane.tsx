import Image from "next/image";
import React from "react";
import SkillPane from "./SkillPane";

type Props = {
  title: string;
  description: string;
  skills: Array<Array<string>>;
  href: string;
  imageSource: string;
};

export default function ProjectPane(props: Props) {
  return (
    <a
      className="flex xl:flex-row flex-col items-center border rounded-xl shadow-lg dark:shadow-white transition-transform duration-200 hover:scale-105 m-4 dark:bg-neutral-800 dark:text-white"
      href={props.href}
      target="_blank"
    >
      <div className="flex items-center xl:w-96 md:w-[50vw] w-[80vw] xl:h-80 h-[40vh] bg-gray-200 dark:bg-gray-700 xl:rounded-l-xl xl:rounded-tr-none rounded-t-xl relative">
        <Image
          className="object-contain"
          alt={props.title}
          src={props.imageSource}
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center p-8 xl:w-[40vw] md:w-[50vw] w-[80vw]">
        <h2 className="font-bold text-2xl mb-2">{props.title}</h2>
        <p>{props.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 my-6 xl:w-[30vw] md:w-[40vw] w-[70vw]">
          {props.skills.map((item, index) => {
            return (
              <SkillPane
                key={index}
                name={item[0]}
                imageSource={"/images/skills/" + item[1]}
                small={true}
              />
            );
          })}
        </div>
      </div>
    </a>
  );
}
