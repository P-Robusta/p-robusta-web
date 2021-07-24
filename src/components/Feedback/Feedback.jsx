import './Feedback.css';
import FItem from './FeedbackItem';

export const Feedback = (props) => {
  return (
    <div id="staff">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our students and staffs say</h2>
        </div>

        <div>
          {/* Hero Unit */}
          <section className="hero-unit">
            <div className="row">
              <div className="large-12 columns">
                <ul className="small-block-grid-2 medium-block-grid-3 flip-cards testimonial">
                  {props.feedback.map((item, index) => (
                    <FItem data={item} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
