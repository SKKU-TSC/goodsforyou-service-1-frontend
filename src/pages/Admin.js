import styled from '@emotion/styled';
import MobileDisplay from '../components/common/MobileDisplay';

const SearchWrapper = styled.div`
	position: relative;
	z-index: 2;
	padding: 10px 16px;
	background-color: rgb(255, 255, 255);
`;

const Callout = styled.div`
	border: 1px solid rgb(244, 244, 244);
	border-radius: 8px;
	padding: 10px;
	margin-bottom: 10px;
	background-color: rgb(255, 255, 255);
	width: 50%;
	word-break: keep-all;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
`;

export default function Search() {
	return (
		<>
			<MobileDisplay>
				<Callout>
					<h4>📌 참고</h4>
					<p>
						현재 Machine Learning Server 구현이 완성되지 않아 Admin 페이지가
						작동하지 않습니다.
					</p>
				</Callout>

				<h1>데이터 추출</h1>
				<Callout>
					<h4>📌 참고</h4>
					<p>
						데이터 크롤링이 허용되지 않아 직접 리뷰 데이터를 복사 붙여넣기
						했습니다. 컬리의 자체 리뷰 API를 연동시켜도 좋을 것 같습니다.
					</p>
				</Callout>

				<form>
					<label>
						리뷰 데이터 아이디:
						<input type="text" name="name" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</MobileDisplay>
		</>
	);
}
