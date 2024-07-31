type KeyFeature = {
	key?: string;
	description: string;
};

type Project = {
	id: number;
	title: string;
	slug: string;
	description: string;
	img?: {
		svg: string;
		jpg: string;
	};
	video?: {
		preview?: string;
		macbook?: string;
	};
	keyfeatures?: KeyFeature[];
	stack?: string;
	git: string;
	preview?: string;
	designImg?: string;
	designLink?: string;
};

type ReactTagProps<T> = import("react").ComponentPropsWithRef<T>;
