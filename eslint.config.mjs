/* eslint-disable perfectionist/sort-objects */
import { eslint } from '@siberiacancode/eslint';

export default eslint({
	jsx: true,
	jsxA11y: true,
	next: true,
	react: true,
	typescript: true,

	rules: {
		'jsonc/sort-keys': 'off',
		'perfectionist/sort-objects': 'off',
	},
});
