import { type ButtonVariantProps, buttonVariantsCVA } from './Button.variants';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		Omit<ButtonVariantProps, 'defaultVariants' | 'disabled'> {
	children: React.ReactNode;
}

export const Button = ({ className, size, variant, children, disabled, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={buttonVariantsCVA({ variant, size, className, disabled })}
			disabled={disabled}
			type='button'
		>
			<span className='relative z-10'>{children}</span>
		</button>
	);
};
