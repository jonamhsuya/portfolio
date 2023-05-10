import React from "react";
import SkillPane from "./SkillPane";

type Props = {
  company: string;
  location: string;
  title: string;
  dates: string;
  skills: Array<Array<string>>;
  description: Array<string>;
};

export default function ExperiencePane(props: Props) {
  return (
    <div className="lg:w-[60vw] md:w-[50vw] w-[90vw] h-min border rounded-md shadow-md dark:shadow-white p-8 my-4">
      <div className="flex flex-row justify-between">
        <p className="text-xl text-left font-bold">{props.company}</p>
        <p className="text-xl text-right">{props.location}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-left italic">{props.title}</p>
        <p className="text-right">{props.dates}</p>
      </div>
      {props.skills.length > 0 && (
        <div className="flex flex-row items-center justify-start gap-3 my-6">
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
      )}
      {props.skills.length === 0 && <div className="my-3" />}
      <div>
        {props.description.map((item, index) => {
          return <p key={index}>• {item}</p>;
        })}
      </div>
    </div>
  );
}
