import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

export default function Links() {
  return (
    <div className="a-keys">
      <a className="a-key" href="mailto:dev@ayushmanoj.com">
        <IconMail size={16} className="text-accent" /> MAIL
      </a>
      <a
        className="a-key"
        href="https://www.linkedin.com/in/ayush-manoj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedin size={16} className="text-accent" /> LINKEDIN
      </a>
      <a
        className="a-key"
        href="https://github.com/jonamhsuya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithub size={16} className="text-accent" /> GITHUB
      </a>
      <a
        className="a-key"
        href="https://x.com/ayushsmanoj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandX size={16} className="text-accent" /> X
      </a>
      <a
        className="a-key"
        href="https://www.instagram.com/ayushsmanoj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandInstagram size={16} className="text-accent" /> INSTAGRAM
      </a>
    </div>
  );
}
