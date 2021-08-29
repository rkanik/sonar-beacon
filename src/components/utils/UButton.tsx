import React from 'react'
import cns from 'classnames'

type UButtonProps = {
	icon?: string
	className?: string
	disabled?: boolean
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const UButton: React.FC<UButtonProps> = ({ icon, onClick, children, disabled, className }) => {
	return (
		<button onClick={e => onClick && onClick(e)} disabled={disabled} className={cns(className, 'h-10 transition-all duration-300 tracking-wide px-8 flex items-center justify-center space-x-4 rounded text-base  group', [
			disabled ? 'select-none pointer-events-none text-gray-600 bg-gray-300' : 'text-white bg-green-500 hover:bg-green-600'
		])}>
			{icon && <i className={icon}></i>}
			<span className='transform transition-all duration-300 scale-100 group-hover:scale-90'>{children}</span>
		</button>
	)
}

export default UButton
