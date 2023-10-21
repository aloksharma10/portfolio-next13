import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { ExperienceType } from "@/types/Experience";
import { SkillType } from "@/types/Skills";
import { AboutType } from "@/types/About";
import { ProfileType } from "@/types/Profile";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      name,
      "slug": slug.current,
      "image": image.asset->url,
      github, 
      live,
      url,
      content
    }`
  )
}


export async function profilePhoto(): Promise<ProfileType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "profile"][0]{
      "image": image.asset->url,
    }`
  )
}

export async function aboutMe(): Promise<AboutType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      summary,
      about
    }`
  )
}

export async function getSkills(): Promise<SkillType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skills"]{
      title,
      desc,
      image,
    }`
  )
}

export async function getExperience(): Promise<ExperienceType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
      title,
      role,
      desc,
      image
    }`
  )
}
