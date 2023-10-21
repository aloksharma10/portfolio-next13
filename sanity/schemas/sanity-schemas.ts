export const profileImage = {
    name: "profile",
    title: "Profile",
    type: "document",
    options: { hotspot: true },
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url"
        },
    ]
}

export const about = {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "summary",
            title: "Summary",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "about",
            title: "About",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}

export const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Comapny Name",
            type: "string",
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "desc",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
    ]
}

export const skills = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Skill Name",
            type: "string",
        },
        {
            name: "desc",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
    ]
}

export const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "skills",
            title: "Skills Tags",
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: "github",
            title: "Github",
            type: "url"
        },
        {
            name: "live",
            title: "Live",
            type: "url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}