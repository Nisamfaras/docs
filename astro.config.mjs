import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Designs',
			social: {
				github: 'https://github.com/ritikdutta.com',
			},
			sidebar: [
				{
					label: 'CWEM Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CWEM Guide', link: '/guides/company_work_environment_management/' },
						{ label: 'HLD', link: '/guides/hld/' },
						{ label: 'LLD', link: '/guides/lld/' },
						{ label: 'Architecture', link: '/guides/architecture/' },
						{ label: 'Wireframe', link: '/guides/wireframe/' },
						{ label: 'KPI', link: '/guides/kpi/' },
						
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	site: 'https://ritikdutta.github.io/docs_ritikdutta',
	base: '/docs_ritikdutta/',
});
