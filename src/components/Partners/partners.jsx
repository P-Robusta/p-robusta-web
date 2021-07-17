export const Partners = (props) => {
  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Các đối tác</h2>
          <p>Họ đã hỗ trợ chúng tôi</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-md-4">
                  <img
                    src={d.image}
                    alt="Hinh anh"
                    width="400"
                    height="284"
                    style={{ padding: '10px' }}
                  />
                  <div className="partner-desc">
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
