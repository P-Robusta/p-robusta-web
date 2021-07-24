import React from 'react';
import './Feedback.css';
const FItem = (props) => {
  return (
    <li ontouchstart="this.classList.toggle('hover');">
      <div className="large button card-front testimonial-image">
        <img src={props.data && props.data.image} alt="Loading" />
        <h3>{props.data ? props.data.name : 'Loading'}</h3>
        <p>{props.data ? props.data.info : 'Loading'}</p>
      </div>
      <div className="panel card-back testimonial-content">
        <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div className="hub-info">
          <p className="text-quote">
            {props.data ? props.data.quote : 'Loading'}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FItem;
