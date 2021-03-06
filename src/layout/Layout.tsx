import React from 'react';
import styled from 'styled-components';
import Content from '../components/main/Content';
import QuizPlay from '../components/main/QuizPlay';
import Header from '../components/shared/Header';

const Grid = styled.div`
    display: grid;
    grid-template:
    [row-1-start] min-content 
    [row-1-end row-2-start] 1fr
    [row-end] / max-content 1fr;
    height: 100vh;
   `;

const Navbar = styled.div.attrs({
})`
  grid-area: 1 / 2 / span 1 / 2;
`


const Main = styled.div.attrs({
    className: ' bg-white'
})`
display: grid;
place-items: center;

  grid-area: row-2-start / 2 / row-end / 3;
  color: #000;
  max-height: 100%;
`

interface Props {
    children: React.ReactNode;
}



const Layout: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <>
            <Grid {...rest} >
                <Navbar> <Header /> </Navbar>
                <Main>
                    {children}
                </Main>
            </Grid>
        </>
    )
};

export default Layout;
