import styled from 'styled-components';

const RoundButton = styled.div`
    height: 12px;
	width: 12px;
	border-radius: 100%;
	margin: 12px 6px;
	background-color: #333333;
	border: 1px solid #222222;

	&:first-child {
		margin-left: 12px;
	}
`;

export default RoundButton;
