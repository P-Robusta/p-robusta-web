import 'react-slideshow-image/dist/styles.css';
import './partners.css';
import { Slide } from 'react-slideshow-image';

export const Partners = (props) => {
  // const slideImages = [
  //   'https://i.pinimg.com/originals/e1/2c/2b/e12c2bf7228f4597ffde4c80d6200ea0.png',
  //   'https://i.pinimg.com/originals/e1/2c/2b/e12c2bf7228f4597ffde4c80d6200ea0.png',
  // ];
  console.log(props.data, 'uuu');
  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Các đối tác</h2>
          <p>Họ đã hỗ trợ chúng tôi</p>
        </div>
        <div className="row">
          <Slide>
            {props.data
              ? props.data.map((item) => {
                  return (
                    <div key={item.imgPNV}>
                      <div className="slideContent">
                        <img
                          className="slideImage"
                          src={item.imgPNV}
                          alt="PNV"
                        />
                        <span className="slideTitle title">{item.text}</span>
                      </div>
                    </div>
                  );
                })
              : 'Loading...'}
          </Slide>
        </div>
        <br />
        <div className="row ">
          {props.data
            ? props.data.map((e, i) => {
                return (
                  <div class="col-md-3 col-sm-6">
                    <div class="thumbnail imageLogo">
                      {/* <a href="#"> */}
                      <img src={e.image} alt="company" key={`${e}-${i}`} />
                      {/* </a> */}
                    </div>

                    <div class="partner-content" id="partner-content-10850">
                      <p>
                        The&nbsp;
                        <a href="https://unespritdefamille.org/blancmesnil/">
                          Blanc Mesnil Foundation
                        </a>
                        &nbsp;supports the training of our students in our
                        centre in Vietnam (Da Nang) for 3 years
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
