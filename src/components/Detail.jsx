import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DivDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 110px;
    padding: 20px;
    width: 70%;
    height: 450px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
`;

const DivSpecImg = styled.div`
    display: flex;

    justify-content: space-around;
`;

const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    width: 55px;
    margin: -30px 0px 20px 90%;
    color: #090909;
    padding: 0.4em 0.8em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5c5,
                -6px -6px 12px #ffffff;

    &:hover {
        border: 1px solid white;
    }

    &:active {  
        box-shadow: 4px 4px 12px #c5c5c5,
                -4px -4px 12px #ffffff;
    } 
`;

const DivSpec = styled.div`
    color: #4e4e4e;
`;

const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    border-radius: 25px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
`;

const Img = styled.img`
     border-radius: 15px;
     width: 290px;
`;

const Detail = () => {
    const { id } = useParams();

    const [ character, setCharacter ] = useState({
        name: "",
		status: "",
		species: "",
		gender: "",
		origin: {},
		location: {},
		image: "",
    });

    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/home");
      }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              console.log(err);
           });
        return setCharacter({
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {},
            location: {},
            image: "",
        });
     }, [id]);

     return (
        <DivDetail>
            <Button onClick={backToHome}>X</Button>
            <DivSpecImg>
                <DivSpec>
                    <h1>Name: {character.name}</h1>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin.name}</h2>
                </DivSpec>
                <DivImg>
                    <Img src={character.image} alt="" />
                </DivImg>
            </DivSpecImg>
        </DivDetail>
     );


}

export default Detail;  