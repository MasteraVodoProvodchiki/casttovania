import { inList } from './in-list'

const trueVariants: string[] = ['true']

export const isTrue = (str: string): boolean => inList(trueVariants, str.toLowerCase())


const falseVariants: string[] = ['false']

export const isFalse = (str: string): boolean => inList(falseVariants, str.toLowerCase())

