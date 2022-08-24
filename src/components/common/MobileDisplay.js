import styled from '@emotion/styled';
import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

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
	background-color: #ffffff;
	overflow-x: hidden;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
`;

const CustomButton = styled.button`
	appearance: button;
	backface-visibility: hidden;
	background-color: rgb(95, 0, 128);
	border-radius: 6px;
	border-width: 0;
	box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
		rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	font-size: 100%;
	height: 44px;
	line-height: 1.15;
	margin: 12px 10px;
	outline: none;
	overflow: hidden;
	padding: 0 25px;
	position: relative;
	text-align: center;
	text-transform: none;
	transform: translateZ(0);
	transition: all 0.2s, box-shadow 0.08s ease-in;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	width: 100%;

	&:disabled {
		cursor: default;
	}

	&:focus {
		box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
			rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
			rgba(50, 151, 211, 0.3) 0 0 0 4px;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	height: 50px;
	margin: 0;
	padding: 0;
	margin-bottom: 20px;
`;

export default function MobileDisplay(props) {
	const navigate = useNavigate();

	const handleHome = useCallback(() => navigate('/', { replace: true }), [navigate]);
	const handleAkinator = useCallback(() => navigate('/akinator', { replace: true }), [navigate]);
	
	return (
		<OuterContainer>
			<h1>Kurly App Emulator</h1>
			<ButtonDiv>
				<CustomButton onClick={handleHome}>Search</CustomButton>
				<CustomButton onClick={handleAkinator}>Akinator</CustomButton>
			</ButtonDiv>
			<InnerContainer>{props.children}</InnerContainer>
		</OuterContainer>
	);
}
