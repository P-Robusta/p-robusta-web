import 'react-slideshow-image/dist/styles.css'
import './partners.css'
import { Slide } from 'react-slideshow-image';

export const Partners = (props) => {
  const slideImages = [
    'https://i.pinimg.com/originals/e1/2c/2b/e12c2bf7228f4597ffde4c80d6200ea0.png',
    'https://i.pinimg.com/originals/e1/2c/2b/e12c2bf7228f4597ffde4c80d6200ea0.png',
    'https://i.pinimg.com/originals/e1/2c/2b/e12c2bf7228f4597ffde4c80d6200ea0.png'
  ];

  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Các đối tác</h2>
          <p>Họ đã hỗ trợ chúng tôi</p>
        </div>
        <div className="row">
        <Slide>
          {props.data ? props.data.map(item => {
            console.log(item)

            return (
              <div key={item.image} className="each-slide">
                <div className="slideContent">
                  <img className="slideImage" src={item.image} alt="PNV" />
                  <span className="slideTitle">{item.text}</span>
                </div>
              </div>
            )
          }) : 'Loading...'}
        </Slide>


          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-md-4">
                  <img
                    src={d.image}
                    alt="Hinh anh"
                    width="400"
                    height="284"
                    style={{ padding: '10px' }}
                  />
                  <div className="partner-desc">
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'} */}
        </div>
      </div>
    </div>
  );
};
