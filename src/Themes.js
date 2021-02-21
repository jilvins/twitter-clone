  import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    fontColor: "#000", 
    body: "#fff"
}

export const lighTheme = {
    fontColor: "#fff",
    body: "#000"
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`