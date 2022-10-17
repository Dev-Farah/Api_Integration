import React from 'react';
import error from '../images/404-error.jpg';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Container sx={{ textAlign: "center" }}>
                <img src={error} width="80%" alt="error" />
                <br />
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained">Go Back</Button>
                </Link>
            </Container>
        </>
    )
}