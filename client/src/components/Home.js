import React from "react";
import styled from 'styled-components';
import logo from '../assets/logo.png'

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 3rem;
`;

const Image = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
	background-size: contain;
    background-position: center; 
    height: 400px;
    width: 100%;

    @media only screen and (max-width: 600px) {
        height: 300px;
    }
`;

const Button = styled.button`
    // background color in App.css
    border: none;
    color: white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    max-width: 10rem;
    margin-top: 3rem;
`;

function Home(props) {
    const routeToQuiz = () => {
        props.history.push("/quiz");
    };
    return (
        <Container className="home-wrapper">
            <Image></Image>
            <Button onClick={routeToQuiz}>Take the Quiz!</Button>
        </Container>
    );
}

export default Home;