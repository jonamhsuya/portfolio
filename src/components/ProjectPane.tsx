import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  technologies: string;
  href: string;
  imageSource: string;
};

export default function ProjectPane(props: Props) {
  return (
    <a
      className="flex xl:flex-row flex-col items-center border rounded-xl shadow-lg dark:shadow-white transition-transform duration-200 hover:scale-105 m-4 dark:bg-neutral-900 dark:text-white"
      href={props.href}
      target="_blank"
    >
      <div className="flex items-center xl:w-96 md:w-[50vw] w-[80vw] xl:h-64 h-[40vh] bg-gray-200 dark:bg-gray-700 xl:rounded-l-xl xl:rounded-tr-none rounded-t-xl relative">
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
        <p className="text-sm italic mt-4">{props.technologies}</p>
      </div>
    </a>
  );
}
