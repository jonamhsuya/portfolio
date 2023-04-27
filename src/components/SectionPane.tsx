import React from "react";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function SectionPane(props: Props) {
  return (
    <a
      href={props.href}
      className="group rounded-2xl border-2 p-8 transition-colors hover:border-gray-300 hover:bg-white/10 hover:shadow"
      target="_self"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {props.title}&nbsp;
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &rarr;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        {props.description}
      </p>
    </a>
  );
}