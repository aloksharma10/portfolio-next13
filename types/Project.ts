import { PortableTextBlock, ArbitraryTypedObject, PortableTextSpan, PortableTextMarkDefinition } from "@portabletext/types";


export type Project = {
  _id: string,
  name: string,
  skills: string[],
  slug: string,
  image: string,
  github: string,
  live: string,
  content: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>;
}