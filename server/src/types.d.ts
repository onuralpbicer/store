declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
		DB_NAME: string
		DB_HOST: string
		DB_PASSWORD: string
		DB_USER: string
	}
}
