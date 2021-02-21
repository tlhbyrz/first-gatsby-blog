import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme";


const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body,html{
        font-family: ${props => props.theme.fonts.main};
        background-color: ${props => props.theme.colors.light1};
        height: 100%;
    }
`


export const wrapRootElement = ({element}) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    )
}