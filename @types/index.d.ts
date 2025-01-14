interface KeyFeature {
	description: string;
	key?: string;
}

interface Project {
	description: string;
	designImg?: string;
	designLink?: string;
	git?: string;
	id: number;
	keyfeatures?: KeyFeature[];
	preview?: string;
	slug: string;
	stack?: string;
	title: string;
	img: {
		jpg: string;
		svg?: string;
	};
	video?: {
		macbook?: string;
		preview?: string;
	};
}

interface Technology {
	icon: string;
	iconDark?: string;
	name: string;
}

type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;
