'use client';

import Link from './Link';
import logo from '/public/logo.svg';

const Logo = ({ className }) => {
	return (
		<>
			<Link
				imgWidth={40}
				imgHeight={40}
				className={`z-10  ${className || ''}`}
				img={logo}
				href={'#'}
			></Link>
		</>
	);
};
export default Logo;
