import styled from '@emotion/styled';
import { useContext, useState } from 'react';

const Container = styled.div`
	padding: 12px 20px 0px;
	background-color: rgb(255, 255, 255);
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
    height: 650px;
`;

const Header = styled.p`
	height: 18px;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: -0.3px;
	color: rgb(153, 153, 153);
	margin: 0;
`;

const NoResultContainer = styled.div`
	width: 350px;
	height: 48px;
	padding: 14px 0px;
	border-bottom: 1px solid rgb(244, 244, 244);
`;

const NoResultText = styled.p`
	width: 335px;
	height: 20px;
	font-size: 16px;
	line-height: 1.25;
	letter-spacing: -0.3px;
	color: rgb(181, 181, 181);
`;

const Box = styled.div`
	padding-top: 800px;
`;
export default function SearchBox(props) {
	return (
		<Container>
			<Header>상품 바로가기</Header>
			{props.searchResult.length === 0 ? (
				<NoResultContainer>
					<NoResultText>검색 결과가 없습니다.</NoResultText>
				</NoResultContainer>
			) : (
				<div></div>
			)}
			<Box />
			<Header>키워드 추천 상품</Header>
			{props.searchResult.length === 0 ? (
				<NoResultContainer>
					<NoResultText>검색 결과가 없습니다.</NoResultText>
				</NoResultContainer>
			) : (
				<div></div>
			)}
		</Container>
	);
}
