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
              ? props.data.map((e) => {
                  if (e.image_with_pn) {
                    return (
                      <div key={e.image_with_pn}>
                        <div className="slideContent">
                          <img
                            className="slideImage"
                            src={e.image_with_pn}
                            alt="PNV"
                          />
                          {e.note_for_image && (
                            <span className="slideTitle title">
                              {e.note_for_image}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  }
                  return '';
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
                      <a href={e.website}>
                        <img src={e.logo} alt="company" key={`${e}-${i}`} />
                      </a>
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
