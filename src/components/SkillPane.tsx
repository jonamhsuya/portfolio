import Image from "next/image";

type Props = {
  name: string;
  imageSource: string;
  link?: string;
  small?: boolean;
};

export default function SkillPane(props: Props) {
  const style = props.small
    ? "flex flex-row items-center border border-gray-400 rounded-lg px-3 py-2 gap-2 bg-neutral-100"
    : "flex flex-row items-center border border-gray-400 rounded-lg px-4 py-2 gap-2 transition-transform duration-200 hover:scale-105 bg-neutral-100";

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
      <p className={props.small ? "text-sm w-max" : "text-md w-max"}>{props.name}</p>
    </a>
  );
}
