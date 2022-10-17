import React from 'react';
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
    const location = useLocation();

    let prodDetails = location.state;

    return (
        <>
            <Navbar />

            <Typography m={2} ml={6} variant='h4'>Product Details</Typography>

            <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                <img height="450px" src={prodDetails.image} />
                <Grid item lg={6} md={12} m={1}>
                    <Typography variant='caption' style={{ textTransform: 'capitalize' }}>{prodDetails.category}</Typography>
                    <Typography variant='h4'>{prodDetails.title}</Typography>
                    <Typography variant='h5'>${prodDetails.price}</Typography>
                    <br />
                    <Typography variant='subtitle2' color="text.secondary">{prodDetails.description}</Typography>
                    <br />
                    <Typography variant='body2'>{prodDetails.rating.rate}</Typography>
                    <Typography variant='caption' style={{ textTransform: 'capitalize' }}>{prodDetails.rating.count ? 'In Stock' : 'Out of Stock'}</Typography>
                </Grid>
            </Grid>

            <Container sx={{ textAlign: "right" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained">Go Back</Button>
                </Link>
            </Container>

        </>
    )
}