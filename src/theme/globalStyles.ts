import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-size: 16px;
    font-family: Lato;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  h1{
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
  .my-masonry-grid {
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    margin-left: -30px;
    width: auto;
    
  }
  
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
  
  .my-masonry-grid_column > div {
    margin-bottom: 30px;
 
  }
  .my-masonry-grid_column > div > img {
    height: 100%;
  }
  .portfolio-container {
    margin-bottom: 120px;
  }
  .portfolio-container div {
    overflow: hidden;
  }
  .portfolio-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .flex {
    display: flex;
  }
  .col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .w-100prec {
    width: 100%;
  }
  .text-center {
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    .my-masonry-grid {
      margin-left: 0px;
      /* gutter size offset */
      margin-right: 10px;
    }
  
    .my-masonry-grid_column {
      padding-left: 10px;
      /* gutter size */
    }
    .my-masonry-grid_column > .gatsby-image-wrapper {
      margin-bottom: 10px;
    }
  }
`;
