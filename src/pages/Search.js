import styled from '@emotion/styled';
import { useContext, useState } from 'react';

import Navbar from '../components/common/Navbar';
import MobileDisplay from '../components/common/MobileDisplay';
import Header from '../components/common/Header';
import SearchInput from '../components/search/SearchInput';
import { SearchContext } from '../context/SearchContext';
import TopTab from '../components/search/TopTab';
import SearchBox from '../components/search/SearchBox';

const SearchWrapper = styled.div`
	position: relative;
	z-index: 2;
	padding: 10px 16px;
	background-color: rgb(255, 255, 255);
`;

export default function Search() {
	const { input, setInput } = useContext(SearchContext);
	const [searchResult, setSearchResult] = useState([]);

	return (
		<>
			<MobileDisplay>
				<Header />
				<SearchWrapper>
					<SearchInput />
				</SearchWrapper>
				{input ? <SearchBox searchResult={searchResult} /> : <TopTab />}
		
				<Navbar />
			</MobileDisplay>
		</>
	);
}
