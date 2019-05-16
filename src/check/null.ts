import { inList } from './in-list'

const nullVariants: string[] = ['null']

export const isNull = (str: string) => inList(nullVariants, str.toLowerCase())
