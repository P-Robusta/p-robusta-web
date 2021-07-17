import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const News = (props) => {
  const classes = useStyles();

  return (
    <div id="news" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Tin tức &amp; Sự kiện</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={d.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {d.title}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="textSecondary"
                          component="p"
                        >
                          {d.text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <NavLink to={d.link}>
                        <Button
                          size="small"
                          style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            background: '#ff9933',
                            color: '#fff',
                          }}
                        >
                          Xem thêm
                        </Button>
                      </NavLink>
                    </CardActions>
                  </Card>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
