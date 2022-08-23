import styled from '@emotion/styled';
import { useState, useContext } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import { SearchContext } from '../../context/SearchContext';


const TopTabWrapper = styled.div`
	margin: 0;
	display: flex;
	flex-flow: row no-wrap;
	justify-content: space-around;
	background-color: rgb(255, 255, 255);
`;

const TopTabItem = styled.div`
	text-align: center;
	width: 50%;
	padding: 15px 16px;
	height: 20px;
	font-size: 16px;
	line-height: 20px;
	color: ${(props) => (props.active ? 'rgb(95, 0, 128)' : `color: #333;`)};
	font-weight: ${(props) => (props.active ? 'bolder' : `400`)};
	margin-bottom: 0px;
	cursor: pointer;
	border-bottom: ${(props) =>
		props.active
			? '3px solid rgb(95, 0, 128)'
			: `1px solid rgb(221, 221, 221)`};
	box-shadow: rgb(247 247 247) 0px -0.5px 0px 0px inset;
`;

const FlexBox = styled.div`
	margin: 0px 20px;
	display: flex;
	flex-flow: row wrap;
`;

const FlexItem = styled.div`
	width: 40%;
	padding: 15px 16px;
	height: 20px;
	font-size: 16px;
	line-height: 20px;
	border-bottom: 1px solid rgb(244, 244, 244); ;
`;

const RecentItem = styled.div`
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	border-bottom: 1px solid rgb(244, 244, 244);
`;

const RecentItemName = styled.span`
	text-align: left;
	font-size: 16px;
	line-height: 1.25;
	letter-spacing: -0.3px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding: 14px 0px 13px;
	color: rgb(51, 51, 51);
`;

const RecentItemDelete = styled.span`
	width: 12px;
	height: 12px;
	display: inline-block;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBzdHJva2U9IiM5OTkiPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05Ljg5OSA5Ljg5OUwwIDBNMCA5Ljg5OUw5Ljg5OSAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQzIC0zMDQpIHRyYW5zbGF0ZSgwIDIyMikgdHJhbnNsYXRlKDAgNTYpIHRyYW5zbGF0ZSgzMTkgNCkgdHJhbnNsYXRlKDI0IDIyKSB0cmFuc2xhdGUoMSAxKSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
	background-size: cover;
	background-position: center center;
	padding: 0px;
	margin: 18px 5px;
`;

const RecentWrapper = styled.div`
	margin: 0px 20px;
`;

const mockData = [
	'갈비탕',
	'불고기',
	'삼겹살',
	'주꾸미',
	'스테이크',
	'그래놀라',
	'볶음밥',
	'돈까스',
];

export default function TopTab() {
	const [topActive, setTopActive] = useState(1);
    const [recentActive, setRecentActive] = useState(0);

	const [recentKeywords, setRecentKeywords] = useLocalStorage(
		'recentKeywords',
		['볶음밥', '김'],
		'array'
	);

	const filterArray = (value) => {
		const filteredArray = recentKeywords.filter((item) => !item.includes(value));
		setRecentKeywords(filteredArray);
	};

	return (
		<>
			<TopTabWrapper>
				<TopTabItem
					active={topActive}
					onClick={() => {
						setTopActive(1);
						setRecentActive(0);
					}}
				>
					인기 검색어
				</TopTabItem>
				<TopTabItem
					active={recentActive}
					onClick={() => {
						setTopActive(0);
						setRecentActive(1);
					}}
				>
					최근 검색어
				</TopTabItem>
			</TopTabWrapper>
			{topActive ? (
				<FlexBox>
					{mockData.map((item) => (
						<FlexItem>{item}</FlexItem>
					))}
				</FlexBox>
			) : (
				<RecentWrapper>
					{recentKeywords.map((item) => (
						<RecentItem>
							<RecentItemName>{item}</RecentItemName>
							<RecentItemDelete
								onClick={() => {
									filterArray(item);
								}}
							/>
						</RecentItem>
					))}
				</RecentWrapper>
			)}
		</>
	);
}
