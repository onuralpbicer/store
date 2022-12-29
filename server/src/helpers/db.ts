import { Pool } from 'pg'
import { UnknownError } from './error'

let pool: Pool | undefined = undefined

export function connectDB() {
	pool = new Pool({
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	})
	return pool
}

export async function query(query: string, vars?: unknown[]) {
	if (!pool) throw new UnknownError('Database not connected')
	return pool.query(query, vars)
}
