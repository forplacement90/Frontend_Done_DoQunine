import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import BuildIcon from '@mui/icons-material/Build';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';


export default function FloatingBtn({ id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const actions = [
    { icon: <Link to={`https://vereon-1.onrender.com/repo/update/${id}`} className='icon-link'><EditIcon /></Link>, name: <span style={{color: "black"}}>Edit</span> },
    { icon: <Link to={`https://vereon-1.onrender.com/repo/delete/${id}`} className='icon-link'><DeleteIcon /></Link>, name: <span style={{color: "black"}}>Delete</span> },
    { icon: <Link to="/" className='icon-link'><HomeIcon /></Link>, name: <span style={{color: "black"}}>Home</span> },
  ];

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open}/>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          color: 'white',
          '& .MuiSpeedDial-fab': {
            backgroundColor: 'rgb(50, 100, 128, 0.3)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'black',
              color: "white"
            },
          },
        }}
        icon={<BuildIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        className="repo-backdrop"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
