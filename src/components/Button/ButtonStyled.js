import styled from "styled-components";


export const Buttons = styled.button `
border: none;
background-color: rgb(80, 60, 209);
background-color: ${props => props.color};
font-size: 24px;
color: rgb(255, 255, 255);
font-weight: bold;
cursor: pointer;
border-radius: 10px;
outline: none;
display: flex;
flex-display: flex;
justify-content: center;
text-align: center;
padding-top: 16px;
opacity:1;
&:hover {
    opacity:0.8; 
}
`;

