import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    padding: 0 10px;
    background-color: #e8edfc;
  }

  a {
    text-decoration: none;
    color: #1b262c;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 30px;
  }
`

export default GlobalStyles
