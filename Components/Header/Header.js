import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, TextField, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person2Icon from '@mui/icons-material/Person2';
const Header = () => {

  // AIzaSyBvBnZai9XWRmUq1Q1wbRKz47V1Im_hyPk
  return (
    <>
      <Box sx={{ flexGrow: 1,display:'flex',justifyContent:'space-between',alignItems:'center' ,mx:10,my:2}}>
    <Box>
        <Image src='/leftlogo.png' width='89'height='30' alt=''/>
        <Typography variant="caption" display="block" gutterBottom>
        The Honest Elite
      </Typography>
    </Box>


    <Box sx={{display:'flex',gap:1}}>

        <Box>
        <input type="text" style={{width:"117px",height:'37px',marginRight:'5px'}}></input>
        <input type="text" style={{width:"427px",height:'37px',paddingLeft:"10px"}} placeholder='Search love qestions and answers'></input>
        </Box>
 
    
<Box>
      <SearchIcon sx={{fontSize:"37px",border:'1px solid gray',px:1}}/></Box>
    </Box>

<Box sx={{display:'flex',gap:3,alignItems:'center'}}>
    <Box>
    <NotificationsNoneIcon />
    <MailOutlineIcon sx={{mx:3}}/>
    <Person2Icon/>
    </Box>
    <Box>
    <Button variant="outlined" sx={{backgroundColor:"#ED028C",color:'white',border:'none', }} className="button">Upload all related</Button>

    </Box>
</Box>

    </Box>
    </>
  )
}

export default Header
