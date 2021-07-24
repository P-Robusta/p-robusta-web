import React from 'react';
import './Feedback.css';
const FItem = (props) => {
    return (
        <div


        >
            <div className="large button card-front testimonial-image">
                {props.data ? props.data.image : 'Loading'}
                <h5>
                    {props.data ? props.data.name : 'Loading'}
                </h5>
                <p>{props.data ? props.data.infor : 'Loading'}</p>
            </div>
            <div className="panel card-back testimonial-content">

                <i className="fa fa-code card-icon" />

                <div className="hub-info">
                    <p>{props.data ? props.data.qoute : 'Loading'}</p>
                </div>
            </div>
        </div >
    );
};

export default FItem;
