import styled from '@emotion/styled';

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: rgb(216, 216, 216);
`;

const InnerContainer = styled.div`
	height: 800px;
	width: 425px;
	position: relative;
	background-color: #FFFFFF;
	overflow-x: hidden;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
`;

export default function MobileDisplay(props) {
	return (
		<OuterContainer>
			<h1>Kurly App Emulator</h1>
			<InnerContainer>{props.children}</InnerContainer>
		</OuterContainer>
	);
}
