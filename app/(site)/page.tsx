import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import {
  getProjects,
  getSkills,
  getExperience,
  aboutMe,
  profilePhoto,
} from "@/sanity/sanity-utils";
import { AboutType } from "@/types/About";
import { ExperienceType } from "@/types/Experience";

import { ProfileType } from "@/types/Profile";
import { Project } from "@/types/Project";
import { SkillType } from "@/types/Skills";

export default async function Home() {
  const [projects, skills, experience, about, profileImg]: [
    Project[],
    SkillType[],
    ExperienceType,
    AboutType,
    ProfileType
  ] = await Promise.all([
    getProjects(),
    getSkills(),
    getExperience(),
    aboutMe(),
    profilePhoto(),
  ]);
  console.log(about);
  return (
    <main className="flex flex-col items-center px-4">
      <Intro image={profileImg.image} summary={about.summary} />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
