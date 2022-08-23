import { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContext } from './context/SearchContext';
import { SocketContext, socket } from './context/SocketContext';

// Import Pages
import Search from './pages/Search';

function App() {
	const [input, setInput] = useState('');
	const value = useMemo(() => ({ input, setInput }), [input]);

	return (
		<SearchContext.Provider value={value}>
			<SocketContext.Provider value={socket}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Search />} />
					</Routes>
				</BrowserRouter>
			</SocketContext.Provider>
		</SearchContext.Provider>
	);
}

export default App;
