import React from 'react';

interface ProvidersProps {
	isOpen: boolean;
	toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = React.createContext<ProvidersProps>({
	isOpen: false,
	toggleIsOpen: () => {},
});
