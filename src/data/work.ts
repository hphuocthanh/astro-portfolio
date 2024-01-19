export type WorkExperience = {
	title: string
	techs: string[]
	link: string
	isComingSoon?: boolean
}

const works: WorkExperience[] = [
	{
		title: 'Not your ordinary Bakery / GoBake',
		techs: ['ReactJS (Vite)', '.NET'],
		link: '/',
		isComingSoon: true,
	}
]

export default works
