import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from './Button';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const buttonProps: ButtonProps = {
	children: 'Button',
	variant: 'primary',
	size: 'small',
};

const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;

export default {
	argTypes: {},
	component: Button,
	title: 'ui/Button',
} as Meta<typeof Button>;
