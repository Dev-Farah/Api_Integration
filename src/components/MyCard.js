import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Tooltip, Typography, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function MyCard(props) {
    let { key, src, alt, title, price, onClick } = props;
    return (
        <>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={12} mx={1} my={2}
                key={key}
            >
                <Card
                    sx={{ maxWidth: 290 }}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <img src={src} width="auto" height="180px" alt={alt} />
                    </Box>

                    <CardContent>
                        <Tooltip title={title}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                                <Typography
                                    sx={{ height: 50, overflow: "hidden" }}
                                    variant="subtitle1"
                                >
                                    {title.slice(0, 25) + (title.length > 25 ? "..." : "")}
                                </Typography>

                                <FavoriteBorderIcon />
                            </Box>
                        </Tooltip>

                        <Typography gutterBottom variant="h6" component="div">
                            {`$${price}`}
                        </Typography>

                        <Button variant="contained" mt={2} onClick={onClick}>See More</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
};