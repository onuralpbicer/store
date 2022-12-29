import Router from '@koa/router'
import Koa from 'koa'
import { query } from '../helpers/db'
import { errorMiddleware } from '../helpers/error'
import body from 'koa-body'
import cors from '@koa/cors'

export function setupRoutes() {
	const app = new Koa()

	const router = new Router({
		prefix: '/api',
	})

	router.get('/', async (ctx) => {
		const test = await query('select * from products')
		ctx.body = test
	})

	// Middlewares
	app.use(errorMiddleware)
	app.use(body())
	app.use(cors())

	// routes
	app.use(router.routes())

	//
	app.listen(3000)
	return app
}
