import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  imageSource: string;
  link: string;
};

export default function SkillPane(props: Props) {
  return (
    <a
      className="flex flex-row items-center border-2 dark:border-neutral-400 rounded-lg px-4 py-2 gap-2 shadow-lg dark:shadow-md dark:shadow-white transition-transform duration-200 hover:scale-105 bg-neutral-100 dark:bg-neutral-500"
      href={props.link}
      target="_blank"
    >
      <div className="w-6 h-6 relative">
        <Image
          className="object-contain"
          src={props.imageSource}
          alt={props.name}
          fill
        />
      </div>
      <p className="text-lg w-max">{props.name}</p>
    </a>
  );
}
