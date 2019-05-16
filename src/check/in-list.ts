export const inList = <T = any>(list: T[], value: T): boolean =>
	list.some((variant) => variant === value)
