import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from '@mui/material';
import MyCard from './MyCard';

export default function Data() {
    let [data, setData] = useState([]);
    let navigate = useNavigate();

    let getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((resolved) => {
                console.log(resolved.data);
                setData(resolved.data)
            }).catch((error) => {
                console.error(error.message);
            })
    }

    let goToDetails = (e) => {
        navigate(`/productdetails`, {
            state: e
        }
        )
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", my: 10, p: 2, pb: 5 }}>
                {data.map((e, i) => {
                    return (
                        <>
                            <MyCard key={e.id} src={e.image} alt={e.title} title={e.title} price={e.price} onClick={() => goToDetails(e)} />
                        </>
                    )
                })}
            </Grid>
        </>
    )
}
