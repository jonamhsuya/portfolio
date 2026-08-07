import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

export default function Links() {
  return (
    <div className="flex flex-col mx-auto my-12">
      <div className="flex flex-row justify-between w-72">
      <a
          className="inline-block rounded transition-all duration-200 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          href="mailto:dev@ayushmanoj.com"
        >
          <IconMail size={32} />
        </a>
        <a
          className="inline-block rounded transition-all duration-200 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          href="https://www.linkedin.com/in/ayush-manoj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={32} />
        </a>
        <a
          className="inline-block rounded transition-all duration-200 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          href="https://github.com/jonamhsuya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={32} />
        </a>
        <a
          className="inline-block rounded transition-all duration-200 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          href="https://x.com/ayushsmanoj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX size={32} />
        </a>
        <a
          className="inline-block rounded transition-all duration-200 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          href="https://www.instagram.com/ayushsmanoj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={32} />
        </a>
      </div>
    </div>
  );
}
