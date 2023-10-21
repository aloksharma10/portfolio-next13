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
  profile,
} from "@/sanity/sanity-utils";
import { AboutType } from "@/types/About";
import { ExperienceType } from "@/types/Experience";

import { ProfileType } from "@/types/Profile";
import { Project } from "@/types/Project";
import { SkillType } from "@/types/Skills";

export const dynamic = 'force-dynamic' as const;
export const revalidate = 60;

export default async function Home() {
  const [projects, skills, experience, about, profileData]: [
    Project[],
    SkillType[],
    ExperienceType[],
    AboutType,
    ProfileType
  ] = await Promise.all([
    getProjects(),
    getSkills(),
    getExperience(),
    aboutMe(),
    profile(),
  ]);
  return (
    <main className="flex flex-col items-center px-4" >
      <Intro profile={profileData} summary={about.summary}  />
      <SectionDivider />
      <Experience experiences={experience}/>
      <Projects projects={projects}/>
      <Skills skills={skills}/>
      <Contact />
    </main>
  );
}
