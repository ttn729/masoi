import { Button, Stack } from "@mui/material"
import { Container } from "@mui/system";
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { SHUFFLE } from '../../redux/playersSlice';

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
    const shuffledPlayers = useSelector((state) => state.player.shuffled);
    const dispatch = useDispatch();

    const onClickButton = () => {
        if (roles.length != players.length) {
            alert("Number of roles must equal number of players!");
        }
        else {
            const shuffled = [...players];
            shuffleArray(shuffled);
            dispatch(
                SHUFFLE(
                    <Stack direction="row" justifyContent="center" spacing={20}>
                        <Stack>{roles.map(role => <p key={role}>{role}</p>)}</Stack>
                        <Stack>{shuffled.map(player => <p key={player}>{player}</p>)}</Stack>
                    </Stack>
                    ));
        }
    }

    return (
        <Container>
            <Stack justifyContent="top" alignItems="center" spacing={2}>

                <Button onClick={() => onClickButton()}>Randomize!</Button>

            </Stack>
            <h1>{shuffledPlayers}</h1>

        </Container>


    )
}