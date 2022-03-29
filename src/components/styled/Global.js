import {
    createGlobalStyle
} from "styled-components";

export const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,500&display=swap');

    * {
    box-sizing: border-box;
    margin:0;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #212121;
        padding: 0;
        margin: 0;
    }
    h1,h2,h3{
        font-family: 'Poppins', sans-serif;
    }
    `