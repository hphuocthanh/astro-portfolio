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
		"I'm a software engineer with *1+* years of experience in *full-stack development* ( *React, Typescript, NodeJs, .NET..* ) .",
		'I have worked at startups and some freelance/contract projects. I also work as a research assistant and lab demonstrator for programming classes at UOW, Aus.',
		'I am looking into Cloud computing.',
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
