import { PortableTextBlock, ArbitraryTypedObject, PortableTextSpan, PortableTextMarkDefinition } from "@portabletext/types";

export type ExperienceType = {
    title: string;
    role: string;
    location: string;
    desc: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>[];
    image: string;
}