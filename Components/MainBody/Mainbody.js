import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
  width: '1700px',
  height: '700px'
};

const center = {
  lat: 23.810331,
      lng: 90.412521
};

const Mainbody = () => {


  const defaultProps = {
    center: {
      lat: 23.810331,
      lng: 90.412521
    },
    zoom: 11
  };

 
  
  return (
    <Box sx={{backgroundColor:"#f2f2f2",height:'100%'}}>
    <Box sx={{px:8, pt:8}}>
    
<LoadScript
      googleMapsApiKey="AIzaSyBvBnZai9XWRmUq1Q1wbRKz47V1Im_hyPk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
      >
        
        <></>
      </GoogleMap>
    </LoadScript>
    </Box>
    </Box>
  )
}

export default Mainbody
