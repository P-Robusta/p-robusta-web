import 'react-slideshow-image/dist/styles.css';
import './partners.css';
import { Slide } from 'react-slideshow-image';

export const Partners = (props) => {
  return (
    <div id="partners" className="text-center partners">
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
                  <div key={i} className="col-md-3 col-sm-6">
                    <div className="thumbnail imageLogo">
                      <img src={e.image} alt="company" key={`${e}-${i}`} />
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
