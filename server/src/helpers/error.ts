import { Middleware } from 'koa'

class ExtendedError extends Error {
	code: number
	constructor(name: string, code = 500, message?: string) {
		super(message)
		this.name = name
		this.code = code
	}
}

export class UnknownError extends ExtendedError {
	constructor(message?: string) {
		super('UnknownError', 500, message)
	}
}

export const errorMiddleware: Middleware = async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.status = 500
		if (err instanceof ExtendedError) {
			ctx.status = err.code
			ctx.body = {
				message: err.message ?? err.name,
				name: err.name,
			}
			// handle my errors
		} else if (err instanceof Error) {
			// Normal error object, outside of my scope
			ctx.body = {
				message: err.message ?? err.name,
				name: err.name,
			}
		} else {
			// Unknown error
			ctx.body = {
				message: err,
			}
		}
	}
}
