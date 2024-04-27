import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import Data from './data/data.js';
import MediaCard from './components/employeeCard.jsx';
import Container from '@mui/material/Container';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from "@mui/material/Switch";



function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
  console.log(showOnLeave);
 /* const [count, setCount] = useState(0) */
  /*console.log(Data); */

  const filteredData = !showOnLeave ? Data.filter((employee) => employee.onLeave) : Data;

  const toggleOnLeave =  (event) => { if (showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true)};


return(
<Container fixed>
  <Box>
<Typography variant="h4" component="h1">
        Employee Dashboard
      </Typography>
      </Box>
 <Stack spacing = {2} direction="row" justifyContent = "center">
<Switch onChange={toggleOnLeave} />
</Stack>
<MediaCard  data={filteredData}/>
  </Container>
  );
}

export default App
