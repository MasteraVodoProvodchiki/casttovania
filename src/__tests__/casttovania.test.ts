import cast from '../casttovania'

import { Primitive, Options } from '../types'


type TestCase = {
	name: string,
	str: string,
	options?: Partial<Options>,
	expected: Primitive | Primitive[],
}

const tests: TestCase[] = [{
	name: 'parse positive number',
	str: ' 5',
	expected: 5,
}, {
	name: 'parse negative number',
	str: '-5.44 ',
	expected: -5.44,
}, {
	name: 'parse wrong number',
	str: ' --6.66',
	expected: ' --6.66',
}, {
	name: 'parse \'null\' as null',
	str: '  null ',
	expected: null,
}, {
	name: 'parse \'NULL\' as null',
	str: '  NULL ',
	expected: null,
}, {
	name: 'parse \'true\' as true',
	str: ' true',
	expected: true,
}, {
	name: 'parse \'TRUE\' as true',
	str: ' TRUE',
	expected: true,
}, {
	name: 'parse \'false\' as false',
	str: 'false ',
	expected: false,
}, {
	name: 'parse \'FALSE\' as false',
	str: 'FALSE ',
	expected: false,
}, {
	name: 'parse empty string',
	str: '',
	expected: '',
}, {
	name: 'parse spaces string',
	str: '  ',
	expected: '  ',
}, {
	name: 'parse simple string',
	str: ' foo',
	expected: ' foo',
}, {
	name: 'parse array with default separator',
	str: ' foo,bar,55,false,null',
	expected: [' foo', 'bar', 55, false, null],
}, {
	name: 'parse array one element',
	str: 'foo,',
	expected: ['foo'],
}, {
	name: 'parse array with custom separator',
	str: ' foo:bar:55:false:null',
	options: { arraySeparator: ':' },
	expected: [' foo', 'bar', 55, false, null],
}]


describe('casttovania', () => {
	tests.forEach((testData) => {
		test(testData.name, () => {
			expect(cast(testData.str, testData.options)).toEqual(testData.expected)
		})
	})
})
