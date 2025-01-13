import { eslint } from '@siberiacancode/eslint';

export default eslint(
	{
		jsx: true,
		jsxA11y: true,
		next: true,
		react: true,
		typescript: true,
	},
	{
		rules: {
			'jsonc/sort-keys': 'off',
			'perfectionist/sort-objects': 'off',
			'node/prefer-global/process': ['error', 'always'],
			'siberiacancode-react/prop-types': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/ban-ts-comment': [
				'warn',
				{
					'ts-expect-error': 'allow-with-description',
					minimumDescriptionLength: 10,
				},
			],
			'no-extra-boolean-cast': 'off',
		},
	},
);
