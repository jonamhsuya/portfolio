import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Links() {
  return (
    <div className="flex flex-col mx-auto my-12">
      <div className="flex flex-row justify-between w-48 mb-4">
      <a
          className="transition-colors duration-200 hover:text-gray-500"
          href="mailto:ayush.manoj@utexas.edu"
        >
          <IconMail />
        </a>
        <a
          className="transition-colors duration-200 hover:text-gray-500"
          href="https://www.linkedin.com/in/ayush-manoj/"
          target="_blank"
        >
          <IconBrandLinkedin />
        </a>
        <a
          className="transition-colors duration-200 hover:text-gray-500"
          href="https://github.com/jonamhsuya"
          target="_blank"
        >
          <IconBrandGithub />
        </a>
        <a
          className="transition-colors duration-200 hover:text-gray-500"
          href="https://www.instagram.com/ayushsmanoj/"
          target="_blank"
        >
          <IconBrandInstagram />
        </a>
      </div>
      <p className="mx-auto">© 2025 Ayush Manoj.</p>
    </div>
  );
}
