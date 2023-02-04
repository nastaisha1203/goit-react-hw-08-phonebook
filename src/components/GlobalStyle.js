import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import img from 'img/img2.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    background-image: url(${img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  ul, ol {
    list-style: none;
  }
  h1, h2, ul, ol, p {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    }
  img {
  display: block;
  max-width: 100%;
  height: auto;
} 
`;
