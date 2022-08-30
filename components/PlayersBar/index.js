import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import { PREPEND } from '../../redux/playersSlice';
import {useSelector, useDispatch} from 'react-redux'

export default function PlayersBar() {
    const players = useSelector((state) => state.player.players);
    const dispatch = useDispatch();

    const [playerName, setPlayerName] = React.useState("");

    const onInput = (event) => {   
        setPlayerName(event.target.value)
    };

    const onKeyPress = (event) => {
        if (event.keyCode == 13) {
            event.preventDefault();
            onClickCheck();
        }
    }

    const onClickClear = () => {
        setPlayerName("");
    }

    const onClickCheck = () => {
      // Check if player is already in list, duplicates not allowed 
      if (players.indexOf(playerName) != -1) {
        alert(playerName + " already in list.")
      }
      else if (playerName != "") { // Does not add an empty player
        dispatch(PREPEND(playerName));
        onClickClear();
      }
    }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add player"
        value={playerName}
        onChange={onInput}
        onKeyDown={onKeyPress}
        inputProps={{ 'aria-label': 'add player' }}
      />


      <IconButton color="primary" sx={{ p: '10px' }} aria-label="clear" onClick={() => onClickClear()}>
        <CancelIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="check" onClick={() => onClickCheck()}>
        <DoneIcon />
      </IconButton>
    </Paper>
  );
}