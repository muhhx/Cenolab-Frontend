import { createGlobalStyle, ThemeProps, DefaultTheme } from "styled-components";

interface Props {
    menuStatus: boolean;
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        overflow: ${(props: Props) => props.menuStatus === true ? 'hidden' : 'initial'}
    }

    :link {
        text-decoration: none;
        color: initial;
    }
`;