import Item from '../../Header/item';

export const StudentFeedbacks = (props) => {
  return (
    <div id="students">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our students say</h2>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    {' '}
                    <img src={d.img} alt="" />{' '}
                  </div>
                  <div className="testimonial-content">
                    <p>"{d.text}"</p>
                    <div className="testimonial-meta"> - {d.name} </div>
                  </div>
                </div>

              </div>
            ))
            : 'loading'}
        </div> */}

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
            <li data-target="#myCarousel" data-slide-to={4} />
            <li data-target="#myCarousel" data-slide-to={5} />
          </ol>
          <div className="carousel-inner">
            <div className="item active form-group col-sm-12">
              <img className="col-sm-4" src="https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg" alt="" />
              <div className="carousel-caption col-sm-8">
                <h3>Los Angeles</h3>
                <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV), class 21 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety.</p>
              </div>
            </div>
            <div className="item">
              <img className="col-sm-4" src="https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg" alt="" />
              <div className="carousel-caption col-sm-8">
                <h3>Los Angeles</h3>
                <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV), class 21 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety.</p>
              </div>
            </div>
            <div className="item">
              <img className="col-sm-4" src="https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg" alt="" />
              <div className="carousel-caption col-sm-8">
                <h3>Los Angeles</h3>
                <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV), class 21 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety.</p>
              </div>
            </div>
            <div className="item">
              <img className="col-sm-4" src="https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg" alt="" />
              <div className="carousel-caption col-sm-8">
                <h3>Los Angeles</h3>
                <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV), class 21 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety.</p>
              </div>
            </div>
            <div className="item">
              <img className="col-sm-4" src="https://i.ibb.co/xSN48DZ/PNV-students-training-2015-93-1.jpg" alt="" />
              <div className="carousel-caption col-sm-8">
                <h3>Los Angeles</h3>
                <p>That's what Ho T.H., a 2nd year student at Passerelles numériques Vietnam (PNV), class 21 chose. H. has chosen to say no to the prejudice that if a girl is old enough, she should get married to fulfill her filial piety.</p>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
