import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  phone: '',
  position: '',
  message: '',
};
export const Contact = (props) => {
  const [{ name, email, phone, position, message }, setState] =
    useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, position, message);
    emailjs
      .sendForm(
        'pnv_email_contact',
        'contact_email_pnv',
        e.target,
        'user_YO5xArGi32BdsNeUGC882'
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>LIÊN HỆ VỚI PNV</h2>
                <p>
                  Vui lòng gửi biểu mẫu cho chúng tôi nếu bạn có bất kì thắc mắc
                  hay đóng góp nào. Chúng tôi rất vinh hạnh khi được nhận thông
                  tin hay đóng góp từ bạn.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Họ và tên"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Địa chỉ Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Số điện thoại"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="position"
                        name="position"
                        className="form-control"
                        required
                        onChange={handleChange}
                      >
                        {/*  */}
                        <option value="partner">Đối tác</option>
                        <option value="donor">Nhà tài trợ</option>
                        <option value="student">Học sinh/sinh viên</option>
                        <option value="parent">Phụ huynh</option>
                        <option value="employee">Nhân viên mới</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Thông tin đóng góp"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Thông tin liên hệ</h3>
              <p>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.110435404449!2d108.2414633152852!3d16.059758038886798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421836ed15dfc9%3A0x99c3cc369a33576c!2sPasserelles%20num%C3%A9riques%20Vietnam!5e0!3m2!1svi!2s!4v1626596418915!5m2!1svi!2s"
                  width="300"
                  height="200"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Passerelles numériques Vietnam
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
