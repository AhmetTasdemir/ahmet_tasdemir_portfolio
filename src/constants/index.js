import {
    mobile,
    web,
    creator,
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    brsis,
    angular,
    bootstrap,
    flutter,
    mui,
    nextjs,
    vue,
    agnolini,
    apoloCards,
    notionary,
    studyClock,
    talesOfTale,
    timeline,
    starbucks,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: " UX/UI Designer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "MUI",
        icon: mui,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - ....",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Mualla Informatics and Consulting",
        icon: brsis,
        iconBg: "#383E56",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js, Wordpress and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Herbalife",
        description:
            "This site is an online platform where you can easily order herbal and quality products from Herbalife, a global nutrition company that offers healthy nutrition, sports products and personal care products, and receive personalized coaching.",
            tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: apoloCards,
        live_link: "http://herbalifegulay.com/",
    },
    {
        name: "Onay Pirinç",
        description:
            "This site is an online shopping paradise where legume lovers can easily find and order quality, tasty and healthy products.",
            tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "woocommerce",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: notionary,
        live_link: "https://onaypirinc.com/",
    },
    {
        name: "Gericht Restaurant",
        description:
            "A web application where customers can experience the menu, chef, and ambiance of the Gericht restaurant with a modern UI and stay up to date with exciting developments.",
            tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: studyClock,
        live_link: "https://react-restaurant-website-seven.vercel.app/",
        source_code_link: "https://github.com/AhmetTasdemir/react_restaurant_website",
    },
    {
        name: "AI Summarizer",
        description:
            "Using this web application you can shorten long web content and articles by accessing them with links. This web application uses artificial intelligence to offer its users an efficient solution with a modern UI.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
    ],
        image: timeline,
        live_link: "https://ai-summarizer-xi.vercel.app/",
        source_code_link: "https://github.com/AhmetTasdemir/AI_summarizer_React_RapidAPI",
    },
    {
        name: "Metaversus",
    description:
        "The web-based platform allows users to explore, search and experience metadata, providing a convenient and efficient solution for web3.0.",
        tags: [
        {
            name: "nextjs",
            color: "blue-text-gradient",
        },
        {
            name: "framer-motion",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: talesOfTale,
        live_link: "https://metaversus-nextjs-framer-motion.vercel.app/",
        source_code_link: "https://github.com/AhmetTasdemir/metaversus_nextjs_framer_motion",
    },
];

export { services, technologies, experiences, projects };