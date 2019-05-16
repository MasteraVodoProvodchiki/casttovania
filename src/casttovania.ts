import isNumber from 'is-number'

import { isNull, isTrue, isFalse } from './check'
import { Options, Primitive } from './types'


const radixRegEx = /^0x?/

const defaultOptions: Options = {
	arraySeparator: ',',
}

const cast = (str: string, inOptions: Partial<Options> = {}): Primitive | Primitive[] => {
	const options = {
		...defaultOptions,
		...inOptions,
	}

	const trimmed = str.trim()

	if (isNumber(trimmed)) {
		if (radixRegEx.test(trimmed)) {
			return parseInt(trimmed)
		}

		return parseFloat(trimmed)
	}

	if (isNull(trimmed)) {
		return null
	}

	if (isTrue(trimmed)) {
		return true
	}

	if (isFalse(trimmed)) {
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
