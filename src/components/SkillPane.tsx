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
      className="flex flex-row items-center justify-around border-2 rounded-lg p-2 gap-2 mb-6 shadow-lg dark:shadow-none transition-transform duration-200 hover:scale-105 bg-neutral-100 dark:text-black"
      href={props.link}
      target="_blank"
    >
      <div className="w-8 h-8 relative">
        <Image
          className="object-contain"
          src={props.imageSource}
          alt={props.name}
          fill
        />
      </div>
      <p className="text-lg font-bold w-max">{props.name}</p>
    </a>
  );
}
