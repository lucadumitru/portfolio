import { cva } from 'class-variance-authority';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	size?: 'large' | 'medium' | 'small';
	variant?: 'primary' | 'secondary' | 'tertiary';
}

export const buttonVariants = cva('rounded', {
	variants: {
		variant: {
			primary:
				'p-3 border rounded-full hover:shadow-md transition-shadow dark:hover:shadow-white',
			secondary:
				'border before:content-[" "] relative flex cursor-pointer items-center justify-center place-self-center overflow-hidden whitespace-nowrap rounded-[6.25rem] border-gray bg-white from-cyan-500 to-fuchsia-500 p-4 transition-all before:absolute before:h-full before:w-full before:bg-gradient-to-r before:opacity-0 before:transition-opacity hover:border-white hover:text-white hover:before:opacity-100 dark:bg-bgDark sm:inline-flex md:w-auto md:hover:no-underline',
			tertiary:
				'rounded-3xl bg-green-200  text-green-900 transition hover:bg-[#018C0F] hover:text-[#D7FFE0]',
		},
		size: {
			small: 'text-sm py-1 px-3',
			medium: 'text-base py-3 px-4',
			large: 'text-md py-3 md:p-5 md:text-lg',
		},
		disabled: {
			false: null,
			true: 'opacity-50 cursor-not-allowed',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
		disabled: false,
	},
});

export const Button = ({ className, size, variant, children, ...props }: ButtonProps) => {
	return (
		<button {...props} className={buttonVariants({ variant, size, className })} type='button'>
			<span className='relative z-10'>{children}</span>
		</button>
	);
};
