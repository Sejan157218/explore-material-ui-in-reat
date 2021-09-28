import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news,SetNews] =useState([])
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=839ad78f6a9641949bbde3b084af417f')
          .then(res=>res.json())
          .then(data=>SetNews(data.articles))
      },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {news.map(nw => (
            <Grid item xs={2} sm={4} md={4}>
                <News news={nw}></News>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default Newspaper;