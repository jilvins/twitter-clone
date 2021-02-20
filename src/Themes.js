  import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    fontColor: "#000" 
}

export const lighTheme = {
    fontColor: "#fff"
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`