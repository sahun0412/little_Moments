import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { navItems } from "./nav";
import { Link } from "react-router-dom";
import { LocationOn, Phone } from "@mui/icons-material";
import BackToTop from "./topButton";

const Footer = () => {
    return (
        <div style={{
            backgroundColor: "black"
        }}>
            
            <footer style={{
                color: 'white',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'

            }}>

                <Grid container
                    spacing={4}
                    justifyContent="center">

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h3"
                            sx={{
                                m: 4,
                                fontSize: "50px",
                                fontWeight: "bolder",
                                fontFamily: 'Oswald, sans-serif'
                            }}
                        >Website</Typography>

                        <Typography sx={{
                            display: "flex",
                            flexFlow: "column wrap",
                            lineHeight: "40px",
                            mx: 4,

                        }}>
                            {navItems.map((item) => (
                                <a key={item} sx={{ backgroundColor: "none", color: '#fff', mx: 4 }}>
                                    {item}
                                </a>
                            ))}
                        </Typography>
                        <hr className="d-md-none w-80 mt-4" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h3"
                            sx={{
                                fontSize: "50px",
                                fontWeight: "bold",
                                m: 4,
                                fontFamily: 'Oswald, sans-serif',
                            }}>Important</Typography>

                        <Typography sx={{
                            mx: 4,
                            display: "flex",
                            flexFlow: "column wrap",
                            lineHeight: "40px"
                        }}>
                            <a href="#terms&conditions" style={{ textDecoration: "none", color: "white" }}>Terms & Conditions</a>
                            <a href="#privacyPolicy" style={{ textDecoration: "none", color: "white" }}>Privacy Policy</a>
                            <a href="#termsofUsage" style={{ textDecoration: "none", color: "white" }}>Terms of Usage</a>
                        </Typography>
                        <hr className="d-md-none w-80 mt-4" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h3"
                            sx={{
                                fontSize: "50px",
                                fontWeight: "bold",
                                m: 4,
                                fontFamily: 'Oswald, sans-serif',
                            }}>Contact</Typography>
                        <Typography sx={{
                            mx: 4,
                            display: "flex",
                            flexFlow: "column wrap",
                            lineHeight: "40px"
                        }}>
                            <address>
                                <LocationOn /> Mumbai, India
                            </address>
                            <Typography><Phone /> <a href="tel:+918276427634" style={{ textDecoration: "none", color: "white" }}>+91 8276  4276 34</a></Typography>
                        </Typography>
                        <hr className="d-md-none w-80 mt-4" />
                    </Grid>

                    <Grid item xs={12} sm={12}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            m: 4,
                            alignItems: "center"
                        }}>
                        <Typography sx={{
                            color: "#404040",
                            fontWeight: "bold"
                        }}>
                            All rights are reserved by <a href="#littlemoments.in" style={{ textDecoration: "none", color: "#404040" }}>littlemoments.in</a>
                        </Typography>
                        <Typography><BackToTop /></Typography>
                    </Grid>

                </Grid>

                <Grid sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                    <Typography sx={{
                        color: "#404040",
                        fontWeight: "bold",
                        fontSize: "180px",
                        fontFamily: 'Oswald, sans-serif',
                        letterSpacing: "-5px",
                        lineHeight: "1.8",
                        wordSpacing: "50px"
                    }}>
                        LITTLE MOMENTS
                    </Typography>
                </Grid>


            </footer>
        </div>
    )
}

export default Footer;
