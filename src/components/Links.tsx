import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

export default function Links() {
    return (
        <div className="flex flex-row justify-between w-40 xl:mt-0 mt-12">
        <a href="https://www.linkedin.com/in/ayush-manoj/" target="_blank"><IconBrandLinkedin /></a>
        <a href="https://github.com/jonamhsuya" target="_blank"><IconBrandGithub /></a>
        <a href="https://www.instagram.com/ayushsmanoj/" target="_blank"><IconBrandInstagram /></a>
      </div>
    )
}