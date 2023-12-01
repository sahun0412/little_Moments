import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddCircle } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import  "../styles/overView.css";



const OverView = () => {
  return (
    <div>
      <Grid container spacing={2}>
       <Grid item xs={12} sm={12} md={6} lg={6} >
       <Box sx={{
          m:2,
          p:2
        }}>
          <Accordion elevation={0} sx={{
            borderBottom:"2px solid black",
            bgcolor:"none"
          }}>
            <AccordionSummary
              expandIcon={<AddCircle/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{
                fontFamily:"Oswald, sans-serif",
                fontWeight:'bold',
                fontSize:"40px",
                letterSpacing:"-2px"
              }}>Overview</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="accordionHeader"
            >
              <Typography sx={{
                fontFamily:"Oswald, sans-serif",
                fontWeight:'bold',
                fontSize:"40px",
                letterSpacing:"-2px"
              }}>Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="accordionHeader"
            >
              <Typography sx={{
                fontFamily:"Oswald, sans-serif",
                fontWeight:'bold',
                fontSize:"40px",
                letterSpacing:"-2px"
              }}>Listing Videos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

       </Grid>
        <Grid  item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ m: 2, p: 2,}}>
          <Typography sx={{
            fontWeight:"bold",
            fontFamily:"Oswald, sans-serif",
            fontSize:'40px',
            letterSpacing:"-2px"
          }}>Location</Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            frameBorder="2"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            width="349px"
            height="277px"
            style={{
              border:"2px solid black",
              borderRadius:"5px",
              boxShadow: '5px 5px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)'


            }}
          ></iframe>
        </Box>
      </Grid>
      </Grid>

    </div>
  );
}

export default OverView;