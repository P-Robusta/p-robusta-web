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
import TextTruncate from 'react-text-truncate'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '20px 0',
    height: '100%',
  },
  media: {
    height: '210px',
    width: '100%',
  },
  postTitle: {
    height: '125px'
  }
}));

const  information = [
  {
    id: 0,
    title: 'Tham gia ủng hộ trong chương trình #ITnuoiIT',
    image: {
      url: '/img/donate/it-raise-it.jpg',
      alt: 'Contemplative Reptile'
    },
    btn: {
      lable: 'Tham gia ngay',
      link: '/alettertoitengineers'
    }
  },
  {
    id: 1,
    title: 'Tài trợ cho Passerelles numériques Vietnam',
    image: {
      url: '/img/donate/donate.jpg',
      alt: 'Contemplative Reptile'
    },
    btn: {
      lable: 'Tài trợ ngay',
      link: '/donate-by-vn-pay'
    }
  },
  {
    id: 2,
    title: ' Tài trợ bằng các hình thức khác(thiết bị,...)',
    image: {
      url: '/img/donate/pnv-kms.jpg',
      alt: 'Contemplative Reptile'
    },
    btn: {
      lable: 'Liên hệ ngay',
      link: 'mailto:ero.vietnam@passerellesnumeriques.org'
    }
  },
]

export const Donate = () => {
  const classes = useStyles();
  return (
    <div id="donate" className="text-center">
      <div className="container">
        <div className="col-md-12 section-title">
          <h2>Tài trợ</h2>
          <h5>
            Nhờ vào những tài trợ của các bạn, chúng tôi có thể duy trì hoạt
            động của tổ chức và đóng góp nhiều lợi ích hơn cho cộng đồng.
          </h5>
          <p style={{ wordWrap: 'break-word' }}>
            Bạn có thể tạo ra sự khác biệt và thay đổi cuộc sống của những thanh
            niên có hoàn cảnh khó khăn bằng cách hỗ trợ tổ chức Passerelles
            numériques.Để hướng đến một tổ chức hoạt động ổn định, hãy hỗ trợ
            chúng tôi hàng tháng. Những tài trợ thường xuyên của bạn là sự giúp
            đỡ có ý nghĩa và thiết thực đối với Passerelles numériques. Bạn có
            thể chọn một loại hình tài trợ và góp phần vào xây dựng Passerelles
            numériques. Tất cả đều đơn giản và được bảo mật!
          </p>
          <p>
            Nếu bạn mong muốn chuyển khoản trực tiếp cho PN Việt Nam (bằng séc
            hoặc tiền mặt), vui lòng liên hệ văn phòng{' '}
            <a href="#contact">PNV</a>.
          </p>
        </div>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {information.map(item => {
              return (
                <Grid key={item.id} item md={4} sm={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image.url}
                        title={item.image.alt}
                      />
                      <CardContent>
                        <Typography gutterBottom
                        variant="h4"
                        component="h4"
                        className={classes.postTitle}>
                          <TextTruncate
                            line={3}
                            element="span"
                            truncateText="…"
                            text={item.title}
                          />
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions dir="rtl">
                      <Button
                        size="large"
                        variant="contained"
                        className="btn-donate-custom"
                        href={item.btn.link}
                      >
                        &nbsp;&nbsp;{item.btn.lable}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};
