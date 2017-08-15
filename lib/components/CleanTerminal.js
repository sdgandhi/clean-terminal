import React from "react";
import Window from "../elements/Window";
import Toolbar from "../elements/Toolbar";
import ContentContainer from "../elements/ContentContainer";
import RoundButton from "../elements/RoundButton";

function CleanTerminal(props) {
    return (
        <Window>
            <Toolbar>
                <RoundButton />
                <RoundButton />
                <RoundButton />
            </Toolbar>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </Window>
    );
}

export default CleanTerminal;
