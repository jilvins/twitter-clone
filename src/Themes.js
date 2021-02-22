  import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    fontColor: "#000", 
    body: "#fff",
    header: "#fff"
}

export const lighTheme = {
    fontColor: "#fff",
    body: "#000",
    header: "#000"
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`