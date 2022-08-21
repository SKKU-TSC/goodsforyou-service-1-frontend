import { createContext } from 'react';

export const SearchContext = createContext({
	input: ``,
	setInput: () => {},
});
