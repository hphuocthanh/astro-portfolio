type Social = {
	label: string
	link: string
}

type Presentation = {
	mail: string
	title: string
	description: string[]
	socials: Social[]
	profile?: string
}

const presentation: Presentation = {
	mail: 'tomthanhswe@gmail.com',
	title: 'Hi, I’m Tom Thanh 🧑‍💻',
	profile: '/avatar.jpg',
	description: [
		"I'm a software engineer with 1+ years of experience in *full-stack development*. I am currently working with *React, Typescript* for frontend primarily, and a variety of tools *(.NET, Nodejs...)* when it comes to backend.",
		'I am looking into Cloud computing.',
		'Previously, I worked at two fintech startups and some freelance projects.',
	],
	socials: [
		{
			label: 'Linkedin',
			link: 'https://www.linkedin.com/in/hphuocthanh/',
		},
		{
			label: 'Github',
			link: 'https://github.com/hphuocthanh',
		},
	],
}

export default presentation
