const hapiIcon = "./images/hapi-logo.svg";
const nodeIcon = "./images/node-js.svg";
const antdIcon = "./images/ant-design-logo.svg";
const reactIcon = "./images/reactjs-logo.png";
const tailwindIcon = "./images/tailwind-css.svg";
const vercelIcon = "./images/vercel-icon-dark.svg";
const gcpIcon = "./images/google-cloud-icon.svg";

export const projects = [
	{
		title: "Quran App",
		image: "./images/quranapp-display.png",
		year: 2021,
		category: "Front End",
		description: "A simple Qur'an app. It can show list surat and ayat, also we can search the specified ayat and its tafseer",
		link: "https://quran-digital-eta.vercel.app",

		techstack: [
			{
				logo: reactIcon,
				name: "ReactJS",
			},
			{
				logo: antdIcon,
				name: "Ant Design",
			},
			{
				logo: tailwindIcon,
				name: "TailwindCSS",
			},
			{
				logo: vercelIcon,
				name: "Vercel",
			},
		],
	},
	{
		title: "Banking Innovation Co Create",
		image: "./images/banking-cocreate-display.png",
		year: 2021,
		category: "",
		description: "Banking Co Create App that can used to creating article and developing projects with teams.",
		link: "http://frontend-b-co-create-dot-rakamin-322505.et.r.appspot.com/",
		techstack: [
			{
				logo: reactIcon,
				name: "ReactJS",
			},
			{
				logo: antdIcon,
				name: "Ant Design",
			},
			{
				logo: gcpIcon,
				name: "Google Cloud",
			},
		],
	},
	{
		title: "Bookshelf API",
		image: "./images/project-api.png",
		year: 2021,
		category: "backend",
		description: "A simple API was built with Javascript and HAPI Framework without using database. We can add,read,update,delete and also search data by using Postman.",
		techstack: [
			{
				logo: hapiIcon,
				name: "Hapi",
			},
			{
				logo: nodeIcon,
				name: "NodeJS",
			},
		],
	},
];

export const socials = [
	{
		key: "linkedIn",
		icon: ["fab", "linkedin"],
		name: "Fauzan Imam Arrijal",
		link: "https://www.linkedin.com/in/fauzan-imam-arrijal-404720129/",
		btn_color: "btn btn-primary",
		img: "./images/linkedin-brands.svg",
	},
	{
		key: "github",
		icon: ["fab", "github"],
		name: "fiarrijal",
		link: "https://github.com/fiarrijal",
		btn_color: "btn btn-dark",
		img: "./images/github-brands.svg",
	},
	{
		key: "email",
		icon: ["fas", "envelope"],
		name: "fi.arrijal@gmail.com",
		link: "mailto:fi.arrijal@gmail.com",
		btn_color: "btn btn-danger",
		img: "./images/envelope-solid.svg",
	},
];
