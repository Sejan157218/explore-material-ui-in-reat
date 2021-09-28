import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {title,description,urlToImage} = props.news;
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    );
};

export default News;