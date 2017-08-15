// import styled from 'styled-components';
//
// const CleanTerminal = styled.div`
//     background: #000000;
//     width: 80%;
// 	height: 300px;
// 	margin: 3% auto;
// 	display: flex;
// 	flex-wrap: wrap;
// 	flex-direction: column;
// `;
//
// export default CleanTerminal;

import React from "react";
import Toolbar from "../elements/Toolbar";
import ContentContainer from "../elements/ContentContainer";
import RoundButton from "../elements/RoundButton";

function CleanTerminal(props) {
    return (
        <div>
            <Toolbar>
                <RoundButton />
                <RoundButton />
                <RoundButton />
            </Toolbar>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </div>
    );
}

export default CleanTerminal;
