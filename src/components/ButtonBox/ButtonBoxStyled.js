import styled from "styled-components";

export const ButtonBoxS = styled.div`
width: 100%;
height: calc(100% - 50px);
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
.item1 { grid-area: header1; }
#item2 { grid-area: header2; }
#item3 { grid-area: header3; }
#item4 { grid-area: header4; }
#item5 { grid-area: header5; }
#item6 { grid-area: header6; }
#item7 { grid-area: header7; }
#item8 { grid-area: header8; }
#item9 { grid-area: header9; }
#item10 { grid-area: header10; }
#item11 { grid-area: header11; }
#item12 { grid-area: header12; }
#item13 { grid-area: header13; }
#item14 { grid-area: header14; }
#item15 { grid-area: header15; }
#item16 { grid-area: header16; }
#item17 { grid-area: header17; }
#item18 { grid-area: header18; }
#item19 { grid-area: header19; }
#item20 { grid-area: header20; }
grid-template-areas:
    'header1 header1 header1 header1'
    'header2 header3 header4 header5'
    'header6 header7 header8 header9'
    'header10 header11 header12 header13'
    'header14 header15 header16 header17'
    'header18 header18 header19 header20'
    ;  
 `;