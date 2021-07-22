import { Education } from './education.jsx';
import { ModalJoinUs } from './modalJoinUs.jsx';

import './joinUs.css';
import React, { useState } from 'react';

export const JoinUs = (props) => {
  const [focus, setFocus] = useState(false);

  const onFocus = (e) => {
    e.preventDefault();
    setFocus(!focus);
  };
  return (
    <div id="joinUs">
      <div className="container">
        <div className="section-title text-center">
          <h2> Tuyển dụng</h2>
        </div>
        <div className="row">
          {' '}
          <img
            src="img/joinUs/joinUs5.jpg"
            className="img-responsive"
            alt=""
          />{' '}
        </div>
        <br />
        <div className="row">
          <br />
          <div className="col-xs-12 col-md-6">
            {' '}
            <img
              src="img/joinUs/joinUs4.png"
              className="img-responsive"
              alt=""
            />{' '}
            <br />
            <div>
              <ModalJoinUs />
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 className="paragraphJoinUs">Thông tin tuyển dụng</h2>
              {/* <p> */}
              {props.data ? props.data.paragraph : 'loading...'} <br />
            </div>
          </div>

          {!focus === true ? (
            <div className=" show" onClick={(e) => onFocus(e)}>
              Xem thêm
            </div>
          ) : (
            <div className="col-xs-12 col-md-6">
              {/* <span className="title-content">Bối cảnh và nhiệm vụ</span> */}
              <ul>
                {props.data
                  ? props.data.content.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : null}
              </ul>
              <div className="show" onClick={(e) => onFocus(e)}>
                &#171; Ẩn{' '}
              </div>
            </div>
          )}
        </div>
        <br />
        <div className="row">
          <div className="about-text">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};
