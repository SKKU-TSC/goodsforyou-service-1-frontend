import styled from '@emotion/styled';

const HeaderContainer = styled.div`
	position: relative;
	width: 100%;
	top: 0px;
	left: 0px;
	z-index: 1000;
	background-color: rgb(95, 0, 128);
`;

const Wrapper = styled.div`
	position: relative;
	min-height: 44px;
`;

const Main = styled.div`
	width: 100%;
	height: 100%;
	padding-left: unset;
	padding-right: unset;
	left: 0px;
	top: 0px;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	position: absolute;
	transform: translateZ(0px);
	font-size: 16px;
	font-weight: 600;
	line-height: normal;
	text-align: center;
	color: rgb(255, 255, 255);
`;

const Side = styled.div`
	height: 100%;
	top: 0px;
	right: 6px;
	position: absolute;
	z-index: 99;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
`;

const MapBtn = styled.button`
	width: 44px;
	height: 44px;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMSAyKSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8cGF0aCBkPSJNNy43NTUgMjBTMCAxMy43ODcgMCA3Ljc1NWE3Ljc1NSA3Ljc1NSAwIDAgMSAxNS41MSAwQzE1LjUxIDEzLjc4NyA3Ljc1NSAyMCA3Ljc1NSAyMHoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjcuNzQ4IiBjeT0iNy42NzQiIHI9IjIuMzkxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=);
	background-position: 50% 50%;
	background-repeat: no-repeat;
    overflow: visible;
    background-color: transparent;
    border: none;
`;

const CartBtn = styled.button`
    width: 44px;
    height: 44px;
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTU0IDIuNjUzKSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxNi44IiBjeT0iMTYuOSIgcj0iMS43Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iOCIgY3k9IjE2LjkiIHI9IjEuNyIvPgogICAgICAgIDxwYXRoIGQ9Im0yMSAyLjktMi4yIDkuNUg2TDMuOCAyLjl6TTAgMGgzLjFsMS40MzggNi4xIi8+CiAgICA8L2c+Cjwvc3ZnPgo=);
    background-position: 50% 50%;
	background-repeat: no-repeat;
    overflow: visible;
    background-color: transparent;
    border: none;
`;

export default function Header() {
	return (
		<>
			<HeaderContainer>
				<Wrapper>
					<Main>검색</Main>
					<Side>
						<MapBtn></MapBtn>
						<CartBtn></CartBtn>
					</Side>
				</Wrapper>
			</HeaderContainer>
		</>
	);
}
