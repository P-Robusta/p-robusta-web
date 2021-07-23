export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <iframe
              className="aboutYoutubeLink"
              src="https://www.youtube.com/embed/-PSpCJg7KsI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '100%' }}
            ></iframe>

            <br></br>
            <div className="list-style">
              <h3>Hoạt động</h3>
              <h3>Quy trình tuyển sinh công bằng và nghiêm ngặt</h3>

              <ul>
                {props.data
                  ? props.data.joinUs.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : 'loading'}
              </ul>
            </div>
            <br></br>
            <div className="list-style">
              <h3>Chương trình đào tạo chuyên sâu</h3>

              <ul>
                {props.data
                  ? props.data.intensiveTraining.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : 'loading'}
              </ul>
            </div>
            <br></br>
            <div className="about-text">
              <h3>Chương trình đào tạo và thực hành thiết thức</h3>

              <p>
                {props.data ? props.data.trainingAndPractice : 'loading...'}
              </p>
            </div>
            <br />
            <div className="about-text">
              <h3>Hỗ trợ tìm kiếm việc làm</h3>

              <p>{props.data ? props.data.jobSearchSupport : 'loading...'}</p>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/passerelles.numeriques/?ref=page_internal"
                data-tabs="timeline"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="true"
                style={{ maxWidth: '100%' }}
                data-width={500}
                data-height={300}
              >
                <blockquote
                  cite="https://www.facebook.com/passerelles.numeriques/?ref=page_internal"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/passerelles.numeriques/?ref=page_internal">
                    Passerelles numériques
                  </a>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Chúng tôi là ai?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Những dấu mốc phát triển</h3>
              <div className="list-style">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              </div>
              <div className="list-style">
                <h3>Mục tiêu</h3>
                <ul>
                  {props.data
                    ? props.data.goal.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              </div>
              <div className="list-style">
                <h3>Giáo dục và phát triển nhân cách</h3>

                <ul>
                  {props.data
                    ? props.data.education.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
                <ul>
                  {props.data
                    ? props.data.educationAndPersonalityDevelopment.map(
                        (d, i) => <li key={`${d}-${i}`}>{d}</li>
                      )
                    : 'loading'}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
