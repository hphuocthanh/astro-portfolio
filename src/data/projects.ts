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
		link: 'https://github.com/Biscottezi/GoBake',
	},
	{
		title: 'Stock Trading / AI Bot',
		techs: ['Python', 'Data'],
		link: 'https://github.com/hphuocthanh/stock-trading-analysis',
	},
	{
		title: 'Reel Editor / Generator',
		techs: ['NextJS', 'TypeScript'],
		link: 'https://github.com/hphuocthanh/video-editor-fe',
	},
	{
		title: 'Instagramme / Clone',
		techs: ['JavaScript', 'Cypress'],
		link: 'https://github.com/hphuocthanh/instagram-clone',
	},
]

export default projects
