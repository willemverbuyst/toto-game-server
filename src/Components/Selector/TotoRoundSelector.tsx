import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

const options = [...Array(11)].map((_u, i) => `Toto ronde ${i + 1}`);

const TotoRoundSelector: React.FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClick = (_event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setOpen(false);
    history.push(`/klassement/totoronde/${index + 1}`);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup color="primary" ref={anchorRef}>
          <Button
            color="primary"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="Ga naar toto ronde"
            aria-haspopup="menu"
            onClick={handleToggle}
            variant="text"
          >
            Toto ronde
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem key={option} onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default TotoRoundSelector;
