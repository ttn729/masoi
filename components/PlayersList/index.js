import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE } from '../../redux/playersSlice';

export default function Players() {
  const players = useSelector((state) => state.player.players)
  const dispatch = useDispatch();

  const onClickDelete = (player) => {
    dispatch(REMOVE(player));
  }

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {players.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => onClickDelete(value)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
