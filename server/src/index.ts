import dotenv from 'dotenv'
import { setupDatabase } from './init/db'
import { setupRoutes } from './init/server'

dotenv.config()

async function main() {
	setupDatabase()
	setupRoutes()
}

main()
