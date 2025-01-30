import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from './Button';

import { Button } from './Button';
import { buttonVariants } from './Button.variants';

type Story = StoryObj<typeof Button>;

const buttonProps: ButtonProps = {
	children: 'Button',
	variant: 'primary',
	size: 'small',
	disabled: false,
};

const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;

export default {
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: [...Object.keys(buttonVariants.variant)],
		},
		size: {
			control: { type: 'radio' },
			options: [...Object.keys(buttonVariants.size)],
		},
		disabled: {
			control: { type: 'boolean' },
		},
	},
	component: Button,
	title: 'ui/Button',
} satisfies Meta<typeof Button>;
