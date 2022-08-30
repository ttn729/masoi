import { Button, Stack } from "@mui/material"
import { Container } from "@mui/system";
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function RandomizeButton() {
    const roles = useSelector((state) => state.role.roles);
    const players = useSelector((state) => state.player.players);
    const [message, setMessage] = React.useState("");

    const onClickButton = () => {
        if (roles.length != players.length) {
            alert("Number of roles must equal number of players!");
        }
        else {
            const shuffled = [...players];
            shuffleArray(shuffled);
            setMessage(
                <Stack direction="row" justifyContent="center" spacing={20}>
                    <Stack>{roles.map(role => <p>{role}</p>)}</Stack>
                    <Stack>{shuffled.map(player => <p>{player}</p>)}</Stack>
                </Stack>
            );  
        }
    }

    return (
        <Container>
            <Stack justifyContent="top" alignItems="center" spacing={2}>

                <Button onClick={() => onClickButton()}>Randomize!</Button>

            </Stack>
            <h1>{message}</h1>

        </Container>
        

    )
};