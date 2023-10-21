import { PortableTextBlock, ArbitraryTypedObject, PortableTextSpan, PortableTextMarkDefinition } from "@portabletext/types";

export type AboutType = {
    summary: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>;
    about: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>;
}