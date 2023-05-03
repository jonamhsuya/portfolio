import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  imageSource: string;
  imageCaption: string;
};

export default function ProjectPane(props: Props) {
  return (
    <a
      className="flex flex-row items-center border rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 m-4"
      href={props.href}
    >
      <div className="flex w-96 h-64 items-center bg-gray-300 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className="object-scale-down"
          alt={props.imageCaption}
          src={props.imageSource}
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8 max-w-lg h-[25vh]">
        <p className="font-bold text-2xl mb-2">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </a>
  );
}
