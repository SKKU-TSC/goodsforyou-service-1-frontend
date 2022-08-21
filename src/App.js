import { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContext } from './context/SearchContext';

// Import Pages
import Search from './pages/Search';

function App() {
  const [input, setInput] = useState('');
  const value = useMemo(() => ({ input, setInput }), [input]);

	return (
		<SearchContext.Provider value={value}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Search />} />
				</Routes>
			</BrowserRouter>
		</SearchContext.Provider>
	);
}

export default App;
