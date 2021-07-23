import { useEffect, useState } from 'react';
import Item from './item';
import NumberOverview from './number_overview';
import CallAPI from '../../helper/callAPI';
import './header.css';
export const Header = (props) => {
  const [numbers, setNumbers] = useState({});
  useEffect(() => {
    CallAPI('number_overviews')
      .then((res) => {
        setNumbers(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <header id="header">
      <div id="headerCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {props.banners.map((item, index) => {
            if (index === 0) {
              return (
                <li
                  key={index}
                  data-target="#headerCarousel"
                  data-slide-to={0}
                  className="active"
                />
              );
            } else {
              return (
                <li
                  key={index}
                  data-target="#headerCarousel"
                  data-slide-to={index}
                />
              );
            }
          })}
        </ol>
        <div className="carousel-inner" role="listbox">
          {props.banners.map((item, index) => {
            if (index === 0) {
              return (
                <div className="item active">
                  <Item
                    data={{
                      image: item.image,
                      paragraph: item.text,
                    }}
                  />
                </div>
              );
            } else {
              return (
                <div className="item">
                  <Item
                    data={{
                      image: item.image,
                      paragraph: item.text,
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
        <a
          className="left carousel-control"
          href="#headerCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#headerCarousel"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <div className="hero text-center">
        <p className="container title">
          Passerelles numériques là tổ chức phi chính phủ của Pháp thành lập năm
          2005 và hiện có ba trung tâm đào tạo tại Campuchia, Philippines và
          Việt Nam
        </p>
        <p className="pnv-text">PN Vietnam</p>
        <p className="container">
          <span className="detail">
            PN Việt Nam và 10 năm tác động bền vững cho xã hội Việt Nam:
          </span>
        </p>
      </div>

      <div>
        <NumberOverview numbers={numbers} />
      </div>
    </header>
  );
};
