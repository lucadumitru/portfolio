/* eslint-disable perfectionist/sort-objects */
export const technologies = [
	{ name: 'html', icon: '/icons/stack/html.svg' },
	{ name: 'css', icon: '/icons/stack/css.svg' },
	{ name: 'js', icon: '/icons/stack/js.svg' },
	{ name: 'react', icon: '/icons/stack/react.svg' },
	{ name: 'next', icon: '/icons/stack/next.webp' },
	{ name: 'tailwind', icon: '/icons/stack/tailwind.svg' },
	{ name: 'sass', icon: '/icons/stack/sass.svg' },
	{ name: 'vs-code', icon: '/icons/stack/vscode.svg' },
	{ name: 'figma', icon: '/icons/stack/figma.png' },
	{ name: 'git-hub', icon: '/icons/stack/git-hub.svg', iconDark: '/icons/stack/git-white.svg' },
];

export const projects: Project[] = [
	{
		id: 1,
		title: 'FarmVest',
		slug: 'farm-vest',
		description: 'A landing page for my portfolio with scrolling and cursor animations',
		img: {
			svg: '/projects/farmvest/img/farmvest.svg',
			jpg: '/projects/farmvest/img/farmvest.jpg',
		},
		stack: 'HTML , JavaScript, SASS',
		git: 'https://github.com/lucadumitru/farm-vest',
		preview: 'http://farm-vest.lucadevelop.com/',
	},
	{
		id: 2,
		title: 'Funiro',
		slug: 'funiro',
		description: 'Shop landing page for my portfolio using pure vanilla JS, HTML, and CSS',
		img: {
			svg: '/projects/funiro/img/funiro.svg',
			jpg: '/projects/funiro/img/funiro.jpg',
		},
		stack: 'HTML , JavaScript, SASS',
		git: 'https://github.com/lucadumitru/funiro',
		preview: 'http://funiro.lucadevelop.com/',
	},
	{
		id: 3,
		title: 'NFT Marketplace',
		slug: 'nft-marketplace',
		description:
			'A landing page for my portfolio using only HTML, SCSS, JS, with some animations and without any framework.',
		img: {
			svg: '/projects/nft/img/nft.svg',
			jpg: '/projects/nft/img/nft.jpg',
		},
		stack: 'HTML , JavaScript, SASS',
		git: 'https://github.com/lucadumitru/nft-marketplace',
		preview: 'http://nft.lucadevelop.com/',
	},
	{
		id: 4,
		title: 'Quickfit',
		slug: 'quickfit',
		description:
			'This is a landing page that I made for my portfolio using a Figma mockup. In this project, I implemented Spline 3D graphics.',
		img: {
			svg: '/projects/quickfit/img/quickfit.svg',
			jpg: '/projects/quickfit/img/quickfit.jpg',
		},
		video: {
			macbook: '/projects/quickfit/video/quickfit-hero.mp4',
		},
		stack: 'HTML , JavaScript, SASS, Spline',
		git: 'http://github.https://github.com/lucadumitru/quickfit',
		preview: 'http://quickfit.lucadevelop.com/',
	},
	{
		id: 5,
		title: 'Freaks of Nature',
		slug: 'freaks-of-nature',
		description:
			'An UpWork project involved building a landing page and email template for an electronic music festival in South Arabia. For this project, I chose not to use any frameworks or libraries; only HTML, CSS, Vanilla JavaScript, and Gulp for compilation were utilized.',
		img: {
			svg: '/projects/freaks/img/freaks.svg',
			jpg: '/projects/freaks/img/freaks.jpg',
		},
		video: {
			preview: '/projects/freaks/video/freaks-preview.mov',
			macbook: '/projects/freaks/video/freaks-hero.mp4',
		},
		keyfeatures: [
			{
				description: 'A landing page was built using a Figma template and styled with SCSS',
			},
			{
				description:
					'The email template was build using table tags and styled with inline styles',
			},
		],
		stack: 'HTML, JavaScript, SCSS, Gulp, Webpack',
		git: 'https://github.com/lucadumitru/freaks-landing',
		preview: 'https://freaksofnature.me/',
	},
	{
		id: 6,
		title: 'The Box',
		slug: 'the-box',
		description: 'I made this project for a construction company using React.',
		img: {
			svg: '/projects/the-box/img/the-box.svg',
			jpg: '/projects/the-box/img/the-box.jpg',
		},
		stack: 'HTML , JavaScript, SASS, React',
		git: 'https://github.com/lucadumitru/the-box',
		preview: 'https://the-box.lucadevelop.com/',
	},
	{
		id: 7,
		title: 'Portfolio',
		slug: 'portfolio',
		description:
			'I create this portfolio web page to have possibility to show all my works in one place and to improve my abilities for using React and Next.js',
		img: {
			svg: '/projects/portfolio/img/portfolio.svg',
			jpg: '/projects/portfolio/img/portfolio.jpg',
		},
		video: {
			preview: '/projects/portfolio/video/portfolio-preview.mov',
		},
		keyfeatures: [
			{
				key: 'UI',
				description:
					'A landing page was built using a Figma template and styled with TailwindCSS. To make the page more dynamic, I added animations using Framer Motion and React type animation',
			},
			{
				key: 'UX',
				description:
					'To enhance user experience, a dark theme and internationalization were implemented using Next-intl',
			},
			{
				key: 'Custom UI Components',
				description: 'Custom UI components such as buttons, cards, and more were created',
			},
			{
				key: 'Deployment',
				description:
					'Finally, the project was deployed on Vercel. Additionally, a custom domain name was added',
			},
		],
		stack: 'HTML, JavaScript, React.js, Next.js, TypeScript, TailwindCSS, Framer Motion, Next-Intl',
		git: 'https://github.com/lucadumitru/portfolio',
		preview: 'https://lucadevelop.com/',
	},
	{
		id: 8,
		title: 'Rick and Morty',
		slug: 'rick-and-morty',
		description:
			"Explore the Rick and Morty web page, where I harnessed the Rick and Morty API, React.js, Next.js, and TypeScript to create an immersive experience. With Tailwind CSS, I crafted a sleek and responsive design that brings the world of Rick and Morty to life. One of the standout features of this project is Server-Side Rendering (SSR), ensuring fast and optimized content delivery. As you navigate the site, you'll experience lightning-fast load times and smooth transitions, thanks to skeleton loading, which provides a seamless user experience.This project is a testament to my expertise in web development, highlighting the fusion of technology and creativity in the world of Rick and Morty. Explore the multiverse, discover your favorite characters, and enjoy an engaging and dynamic website!",
		img: {
			svg: '/projects/rickandmorty/img/rickandmorty.svg',
			jpg: '/projects/rickandmorty/img/rickandmorty.jpg',
		},
		stack: 'HTML , JavaScript, TypeScript, React.js, TailwindCSS, Next.js, API, SWR, Eslint',
		git: 'https://github.com/lucadumitru/rickandmorty',
		preview: 'https://rickandmorty.lucadevelop.com/',
	},

	{
		id: 9,
		title: 'Tech Ecommerce',
		slug: 'tech-ecommerce',
		description:
			'For this project, React.js, Next.js, and TypeScript were chosen as the primary stacks. The development environment was meticulously set up with Linters and Prettier to adhere to best practices.',
		img: {
			svg: '/projects/ecommerce/img/ecommerce.svg',
			jpg: '/projects/ecommerce/img/ecommerce.jpg',
		},
		keyfeatures: [
			{
				key: 'Responsive Design',
				description:
					'A landing page for a tech store was meticulously crafted using a Figma template and styled with TailwindCSS. The page boasts full adaptability across various devices.',
			},
			{
				key: 'Custom UI Components',
				description:
					'Several UI-kit components, including Buttons, Icons, Typography, and Inputs, were custom-built and seamlessly integrated using Storybook. These components underwent thorough UI testing using Jest and React Testing Library.',
			},
			{
				key: 'Global State Management',
				description:
					'A robust global store was implemented for Cart and Products Filters utilizing Redux Toolkit, ensuring efficient management and synchronization of state across the application.',
			},
			{
				key: 'Contact Form Integration',
				description:
					'A user-friendly contact form with built-in validation was created and seamlessly integrated with React Hook Form and Resend for streamlined email communication',
			},
			{
				key: 'Backend Integration',
				description:
					'Strapi CMS was seamlessly integrated to handle backend functionalities, enabling efficient data management and content delivery.',
			},
			{
				key: 'GraphQLImplementation',
				description:
					'GraphQL was leveraged for server-side requests, providing a flexible and efficient means of data retrieval. Apollo Client was utilized on the client-side to seamlessly interact with GraphQL APIs.',
			},
			{
				key: 'Deployment',
				description:
					'The frontend portion of the project was deployed on Vercel, ensuring seamless deployment and scalability. Meanwhile, Strapi CMS was deployed on the Reder platform, guaranteeing optimal performance and reliability.',
			},
		],
		stack: 'HTML, JavaScript, React.js, Next.js, TypeScript, TailwindCSS, Strapi CMS, Redux Toolkit, GraphQL, Apollo Client, Storybook, Jest, React Testing Library, React Hook Form, External UI Library',
		git: 'https://github.com/lucadumitru/ecommerce',
	},
	{
		id: 10,
		title: "L'Interior",
		slug: 'linterior',
		description:
			'This is a freelance project for an interior design and architecture agency based in Seville.',
		img: {
			svg: '/projects/linterior/img/linterior.svg',
			jpg: '/projects/linterior/img/linterior.jpg',
		},
		keyfeatures: [
			{
				key: 'Design',
				description:
					'This project was designed and built by me in Figma using UX/UI concepts. Some icons were also designed.',
			},
			{
				key: 'Project Architecture',
				description:
					'The modular architecture was selected for this project. This allows for better scalability and maintainability.',
			},
			{
				key: 'Responsive Design',
				description:
					'The project was styled and made responsive for all devices using TailwindCSS.',
			},
			{
				key: 'Shadcn/UI Components',
				description:
					'Shadcn/UI components such as buttons, carousel, accordion, and more were integrated.',
			},
			{
				key: 'Contact Form Integration',
				description:
					'A user-friendly contact form with built-in validation was created and seamlessly integrated with React Hook Form, Zod schema, and Resend for streamlined email communication. Toaster notifications were added to improve user experience.',
			},
			{
				key: 'Image Lazy Loading and Blur Placeholder',
				description:
					'With lazy loading, images were loaded only when in view. Additionally, a blur placeholder was implemented to provide a more engaging and visually appealing experience.',
			},
			{
				key: 'SEO',
				description:
					'The project was optimized using Next SEO, ensuring high search engine visibility. JSON-LD was used for SEO meta tags, and all metadata (title, description, image, author, etc.) was added to improve search engine optimization.',
			},
			{
				key: 'Deployment',
				description:
					'Finally, the project was deployed on Vercel. Additionally, a custom domain name was added.',
			},
		],
		stack: 'HTML, React.js, Next.js, Shadcn/UI, TailwindCSS, SEO, JSON-LD, Zod, React Hook Form, Prettier, ESLint',
		git: 'https://github.com/lucadumitru/linterior-newdesign',
		preview: 'https://linterior.lucadevelop.com/',
	},
];
