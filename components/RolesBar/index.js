import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

import { PREPEND } from '../../redux/rolesSlice';
import {useSelector, useDispatch} from 'react-redux'

export default function RolesBar() {
    const roles = useSelector((state) => state.role.roles);
    const dispatch = useDispatch();

    const [roleName, setRoleName] = React.useState("");

    const onInput = (event) => {   
        setRoleName(event.target.value)
    };

    const onKeyPress = (event) => {
        if (event.keyCode == 13) {
            event.preventDefault();
            onClickCheck();
        }
    }

    const onClickClear = () => {
        setRoleName("");
    }

    const onClickCheck = () => {
      // Check if role is already in list, duplicates not allowed 
      if (roles.indexOf(roleName) != -1) {
        alert(roleName + " already in list.")
      }
      else if (roleName != "") { // Does not add an empty role
        dispatch(PREPEND(roleName));
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
        placeholder="Add role"
        value={roleName}
        onChange={onInput}
        onKeyDown={onKeyPress}
        inputProps={{ 'aria-label': 'add role' }}
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