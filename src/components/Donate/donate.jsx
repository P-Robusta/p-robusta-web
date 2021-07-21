import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px 0',
  },
  media: {
    height: 300,
    width: '100%',
  },
}));

export const Donate = () => {
  const classes = useStyles();
  return (
    <div id="donate" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Tài trợ</h2>
        </div>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/DSC_4392-1.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tài trợ hàng tháng
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="text-center">
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      background: '#22bbea',
                      fontSize: '13px',
                      fontWeight: '900',
                      color: '#fff',
                    }}
                  >
                    Tài trợ ngay
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/DSC_4392-1.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tài trợ
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="text-center">
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      background: '#22bbea',
                      fontSize: '13px',
                      fontWeight: '900',
                      color: '#fff',
                    }}
                  >
                    Tài trợ ngay
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.passerellesnumeriques.org/wp-content/uploads/2016/04/DSC_4392-1.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tài trợ bằng vật phẩm
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="text-center">
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      background: '#22bbea',
                      fontSize: '13px',
                      fontWeight: '900',
                      color: '#fff',
                    }}
                  >
                    Tài trợ ngay
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
