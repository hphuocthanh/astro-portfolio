export type Project = {
	title: string
	techs: string[]
	link: string
	isComingSoon?: boolean
}

const projects: Project[] = [
	{
		title: 'Not your ordinary Bakery / GoBake',
		techs: ['ReactJS (Vite)', '.NET'],
		link: '/',
		isComingSoon: true,
	},
	{
		title: 'Stock Trading / AI Bot',
		techs: ['Python', 'Data'],
		link: '/',
		isComingSoon: true,
	},
	{
		title: 'Reel Editor / Generator',
		techs: ['NextJS', 'TypeScript', 'NestJS'],
		link: 'https://github.com/hphuocthanh/video-editor-fe',
	},
	{
		title: 'Instagramme / Clone',
		techs: ['JavaScript', 'Cypress'],
		link: 'https://github.com/hphuocthanh/instagram-clone',
	},
]

export default projects
