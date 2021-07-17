import React from 'react';

const Item = (props) => {
  return (
    <div
      className="intro"
      style={{
        background: `url(${
          props.data ? props.data.image : 'loading.jpg'
        }) no-repeat`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              <a href="#posts" className="btn btn-custom btn-lg page-scroll">
                Đọc thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
