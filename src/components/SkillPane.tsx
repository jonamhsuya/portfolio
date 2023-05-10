import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  imageSource: string;
  link?: string;
  small?: boolean;
};

export default function SkillPane(props: Props) {
  const style = props.small
    ? "flex flex-row items-center border rounded-lg px-3 py-2 gap-2 shadow dark:shadow-white bg-neutral-100 dark:bg-neutral-800"
    : "flex flex-row items-center border-2 rounded-lg px-4 py-2 gap-2 shadow-lg dark:shadow-md dark:shadow-white transition-transform duration-200 hover:scale-105 bg-neutral-100 dark:bg-neutral-800";

  return (
    <a className={style} href={props.link} target="_blank">
      <div
        className={
          props.small ? "w-4 h-4 relative" : "w-5 h-5 relative"
        }
      >
        <Image
          className="object-contain"
          src={props.imageSource}
          alt={props.name}
          fill
        />
      </div>
      <p className={props.small ? "text-sm w-max" : "text-md font-bold w-max"}>{props.name}</p>
    </a>
  );
}
