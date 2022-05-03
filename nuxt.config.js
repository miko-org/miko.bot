import { resolve } from 'path'

export default {
	rootDir: __dirname,
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Miko - %s',
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		bodyAttrs: {
			class: ['min-w-xs']
		}
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['virtual:windi.css', 'virtual:windi-devtools'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'nuxt-vite',
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss'
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa'
	],

	vite: {
		// ssr: true,
		// build: true,
		// server: {
		// 	fs: {
		// 		strict: false
		// 	}
		// }
	},

	windicss: {
		root: resolve(__dirname),
		config: resolve(__dirname, 'windi.config.ts'),
		analyze: true
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
