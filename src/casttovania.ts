import { Options, Primitive } from './types'


const numberRegEx = /^\-?\d+(\.\d+)?$/

const defaultOptions: Options = {
	arraySeparator: ',',
}

const cast = (str: string, inOptions: Partial<Options> = {}): Primitive | Primitive[] => {
	const options = {
		...defaultOptions,
		...inOptions,
	}

	const trimmed = str.trim()

	if (numberRegEx.test(trimmed)) {
		return parseFloat(trimmed)
	}

	if (trimmed.toLowerCase() === 'null') {
		return null
	}

	if (trimmed.toLowerCase() === 'true') {
		return true
	}

	if (trimmed.toLocaleLowerCase() === 'false') {
		return false
	}

	const arr = str.split(options.arraySeparator)

	if (arr.length > 1) {
		return <Primitive[]>(<any>arr
			.filter(item => !!item)
			.map(item => cast(item)))
	}

	return str
}

export default cast
