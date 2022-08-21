import styled from '@emotion/styled';

const NavbarComponent = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	border-top: 1px solid rgb(221, 221, 221);
	background-color: rgb(252, 252, 252);
	height: 45px;
`;
const Items = styled.a`
	flex: 1 1 25%;
	overflow: hidden;
	height: 100%;
	padding: 0px 16px;
	color: rgb(51, 51, 51);
`;

const ItemsImage = styled.img`
	display: block;
	margin: 10px auto;
`;

export default function Navbar() {
	return (
		<>
			<NavbarComponent>
				<Items>
					<ItemsImage src="home.svg" alt="home" />
				</Items>
				<Items>
					<ItemsImage src="menu.svg" alt="menu" />
				</Items>
				<Items>
					<ItemsImage src="search.svg" alt="search" />
				</Items>
				<Items>
					<ItemsImage src="account.svg" alt="account" />
				</Items>
			</NavbarComponent>
		</>
	);
}
