import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
          pt:5,
          left:0,
          bottom:0,
          width:'100%',
          // display:'flex',
          position:'fixed',
          textAlign:'center',
          justifyContent:'center',
          backgroundColor: 'grey'

      }}
      component="footer"
    >
      <Container  sx={{display:'flex',textAlign:'center',justifyContent:'center'}}>
        <Typography variant="body2" color="text.secondary" align="center" pb={3} pr={3}>
          {"Copyright © "}
          <Link color="inherit" href="">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography pb={3}>
          Terms&Conditions:
        </Typography>
      </Container>
    </Box>
  );
}