import React from 'react'
import cns from 'classnames'

const withUnit = (size: string | number) => {
	const units = ['px', 'em', 'rem', '%', 'vh', 'vw']
	if (typeof size === 'number') return `${size}px`
	const hasUnit = units.some(unit => size.endsWith(unit))
	return hasUnit ? size : `${size}px`
}

type UAvatarProps = {
	src: string
	className?: string
	size?: string | number
}
const UAvatar: React.FC<UAvatarProps> = ({ src, className, size = 40 }) => {

	const sizeWithUnit = withUnit(size)

	return (
		<div
			className={cns(className, 'relative rounded-full bg-center bg-cover')}
			style={{ height: sizeWithUnit, width: sizeWithUnit, backgroundImage: `url(${src})` }}
		>
		</div>
	)
}

export default UAvatar
