import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  technologies: string;
  href: string;
  imageSource: string;
  imageCaption: string;
};

export default function ProjectPane(props: Props) {
  return (
    // update for smaller screens
    <a
      className="flex xl:flex-row flex-col items-center border rounded-xl dark:shadow-none shadow-lg transition-transform duration-200 hover:scale-105 m-4 bg-white text-black"
      href={props.href}
      target="_blank"
    >
      <div className="flex xl:w-96 lg:w-[36rem] w-96 xl:h-64 lg:h-96 h-64 items-center bg-gray-200 xl:rounded-l-lg xl:rounded-tr-none rounded-t-xl relative">
        <Image
          className="object-contain"
          alt={props.imageCaption}
          src={props.imageSource}
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center p-8 lg:w-[32rem] w-[24rem] h-fit">
        <p className="font-bold text-2xl mb-2">{props.title}</p>
        <p>{props.description}</p>
        <p className="text-sm italic mt-4">{props.technologies}</p>
      </div>
    </a>
  );
}
