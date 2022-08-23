import styled from '@emotion/styled';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { SocketContext } from '../../context/SocketContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 42px;
	padding: 0px 0px 0px 16px;
	border-radius: 6px;
	position: relative;
	-webkit-box-align: center;
	align-items: center;
	background-color: rgb(244, 244, 244);
	box-shadow: rgb(247 247 247);
`;

const Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	font-size: 16px;
	letter-spacing: -0.05em;
	background-color: rgb(244, 244, 244);
	color: #333;
	padding-right: 40px;
	caret-color: rgb(95, 0, 128);
`;

const SearchContainer = styled.div`
	display: flex;
`;

const SearchBtn = styled.button`
	position: relative;
	width: 30px;
	height: 30px;
	margin-right: 7px;
	background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgPHBhdGggZD0iTTE2LjQzMyA5Ljg2OGMwIDIuMDctLjkgMy44NjgtMi4zMzkgNS4wMzgtMS4xNy45OS0yLjYwOCAxLjUyOS00LjIyOCAxLjUyOUE2LjU0NSA2LjU0NSAwIDAgMSAzLjMgOS44NjhhNi41NDUgNi41NDUgMCAwIDEgNi41NjYtNi41NjZjMy41OTktLjA5IDYuNTY3IDIuODc4IDYuNTY3IDYuNTY2ek0xOS40OTEgMTkuNDkxbC00LjQ5Ny00LjQ5NyIvPgogICAgPC9nPgo8L3N2Zz4K)
		50% 50% no-repeat;
	border-radius: 0;
	font-size: 14px;
	color: #333;
	text-transform: none;
	overflow: visible;
	background-color: transparent;
	border: none;
`;

const DeleteAllBtn = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 16px;
	height: 16px;
	right: 47px;
	margin-left: 20px;
	background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjOTk5IiBvcGFjaXR5PSIuNSIgY3g9IjgiIGN5PSI4IiByPSI4Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPHBhdGggZD0ibTEwLjg5NyAxMC43ODYtNS43Ny01Ljc2OU01LjEyMiAxMC43ODVsNS43NzUtNS43NzUiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=)
		0% 0% / 16px 16px no-repeat transparent;
	border-width: initial;
	border-style: none;
	border-color: initial;
	border-image: initial;
`;

const CancelBtn = styled.button`
	width: 56px;
	height: 21px;
	margin: 11px 2px;
	font-size: 16px;
	line-height: 1.31;
	text-align: right;
	letter-spacing: normal;
	color: rgb(51, 51, 51);
	overflow: visible;
	background-color: transparent;
	border: none;
`;

export default function SearchInput() {
	const socket = useContext(SocketContext);
	
	const { input, setInput } = useContext(SearchContext);
	const [recentKeywords, setRecentKeywords] = useLocalStorage(
		'recentKeywords',
		[],
		'array'
	);

	const addRecentKeyword = (keyword) => {
		if (recentKeywords.includes(keyword)) {
			return;
		}
		setRecentKeywords([...recentKeywords, keyword]);
		console.log(recentKeywords);
	};

	return (
		<SearchContainer>
			<Wrapper>
				<Input
					type="text"
					placeholder="검색어를 입력해 주세요"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						console.log(input)
						socket.emit('search', input.toString());
					}}
				/>
				{input !== '' && (
					<DeleteAllBtn onClick={() => setInput('')}></DeleteAllBtn>
				)}
				<SearchBtn
					onClick={(e) => {
						addRecentKeyword(input);
						console.log(input);
					}}
				/>
			</Wrapper>
			{input !== '' && (
				<CancelBtn
					onClick={() => {
						setInput('');
					}}
				>
					취소
				</CancelBtn>
			)}
		</SearchContainer>
	);
}
