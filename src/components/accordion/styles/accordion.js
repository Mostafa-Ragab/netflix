import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 70px 45px;
	max-width: 815px;
	margin: auto;
`;

export const Body = styled.div``;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;

	&::first-of-type {
		font-size: 3em;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-space-between;
`;

export const Title = styled.h1`
	font-size: 50px;
	margin-top: 0;
	margin-bottom: 8px;
	line-height: 1.1;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Frame = styled.div`
	margin-bottom: 40px;
`;
