import React from "react";
import { FaReact } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "iFortress Solution",
    location: "Makati City",
    description:
      "Maintaniing & fixing of bugs for a BPO system, Creation of new features, notable one is chat, Authentication for user side",
    icon: React.createElement(FaBuildingColumns),
    date: "2017 - 2019",
  },
  {
    title: "Pahiram.ph",
    location: "Makati City",
    description:
      "Develop designs that are made by UI/UX for the client, Building of reusable codes and components for future use and easy updates",
    icon: React.createElement(FaBuildingUser),
    date: "2019 - 2020",
  },
  {
    title: "Altev Technologies",
    location: "Makati City",
    description:
      "Develop designs that are made by the UI/UX for the client building of reusabele codes and components for future use and easy updates.",
    icon: React.createElement(FaRegBuilding),
    date: "2020 - 2022",
  },
  {
    title: "Freelance Front-End Developer at Ticketnation.ph",
    location: "Makati City",
    description:
      "Communicationg with the Product Owner for needed additions and revisions, Maintaining website functionalities and bug fixing, Creation of artist page and artist listing, Front end API integration, Layout of the design, collaborating with Product Designer for new features and Design Changes.",
    icon: React.createElement(BsFillBuildingsFill),
    date: "2021 - present",
  },
  {
    title: "React Developer at Accenture",
    location: "Makati City",
    description:
      "Integration of Authentication, Layout of the design, collaborating with the Product Designer for new features",
    icon: React.createElement(FaReact),
    date: "July 2022 - December 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
