import styled from '@emotion/styled';
import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { SearchContext } from '../context/SearchContext';

import Navbar from '../components/common/Navbar';
import MobileDisplay from '../components/common/MobileDisplay';
import Header from '../components/common/Header';
import SearchInput from '../components/search/SearchInput';
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
	const [recommendResult, setRecommendResult] = useState([]);
	const socket = useContext(SocketContext);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		socket.on('searchResult', (data) => {
			console.log(data);
			setSearchResult(data.matchedItemsByItem);
			let uniqueSet = [
				...new Set(data.matchedItemsByFeature.map((item) => item.itemName)),
			];

			console.log(uniqueSet);
			setRecommendResult(uniqueSet);
		});

		return () => {
			socket.off('connect');
			socket.off('display');
		};
	}, [socket]);

	return (
		<>
			<MobileDisplay>
				<Header />
				<SearchWrapper>
					<SearchInput />
				</SearchWrapper>
				{input ? (
					<SearchBox
						searchResult={searchResult}
						recommendResult={recommendResult}
					/>
				) : (
					<TopTab />
				)}

				<Navbar />
			</MobileDisplay>
		</>
	);
}
