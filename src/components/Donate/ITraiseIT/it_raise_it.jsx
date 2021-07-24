import React, { useEffect, useState } from 'react';
import './ITRaiseIT.css';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import $ from 'jquery';
import CallAPI from '../../../helper/callAPI';
import NumberOverview from './number_overview';

const initialState = {
  name: '',
  email: '',
  phone: '',
  selectedOption: '',
};

export const ITRaiseIT = (props) => {
  const [focus, setFocus] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);

  const [numbers, setNumbers] = useState({});
  useEffect(() => {
    CallAPI('number_overviews')
      .then((res) => {
        setNumbers(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const changeOpen = () => {
    setOpenForgot(!openForgot);
  };

  const [selectedOptionOne, setState] = useState(initialState);

  const [code, setCode] = useState();

  const getCode = async (e) => {
    e.preventDefault();
    const email = $('#email-forgot').val();
    let code = await CallAPI('donors').then((res) => {
      let temp = res.data.data;
      return temp.map((e) => (e.email === email ? e.code : null));
    });
    if (code) {
      setCode(code);
    } else {
      Swal.fire('Thất bại!', 'Email không tồn tại!', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const new_code = await CallAPI('donors').then((res) => {
      let data = res.data.data;
      let finalID = data.sort(function (a, b) {
        return a.id - b.id;
      })[data.length - 1].id;

      if (finalID < 10) {
        return `DNTT00${finalID + 1}`;
      } else if (finalID < 100) {
        return `DNTT0${finalID + 1}`;
      } else {
        return `DNTT${finalID + 1}`;
      }
    });

    const data = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      code: new_code,
      selectedOption:
        $('#selectedOptionOne').val() === 'Monthly'
          ? $('#selectedOptionTwo').val()
          : $('#selectedOptionOne').val(),
    };

    Swal.fire({
      title:
        'Đồng ý trở thành một nhà tài trợ cho chương trình #IT-nuôi-IT PNV?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#22bbea',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        clearState();
        CallAPI('donors', 'post', data).then(
          (res) => {
            Swal.fire(
              'Thành công!',
              'Bạn đã gửi bạn đã trở thành 1 nhà tài trợ cho chương trình IT nuôi IT của PNV.',
              'success'
            );
            setCode(new_code);
            CallAPI('email_register_donor', 'POST', res.data.data);
          },
          (err) => {
            Swal.fire(
              'Thất bại!',
              'Có lỗi đã xảy ra trong quá trình gửi đăng ký. Có thể email đã tồn tại.',
              'error'
            );
          }
        );
      }
    });
  };

  const onFocus = (e) => {
    e.preventDefault();
    setFocus(!focus);
  };
  return (
    <div id="it_raise_it">
      <div className="ITraiseIT ">
        <div className=" title text-center">
          <h2>
            HỖ TRỢ CÁC EM SINH VIÊN NGHÈO THEO ĐUỔI VIỆC HỌC CNTT #ITRAISEIT
          </h2>
        </div>
        <div className="form-inline">
          <div className="col-xs-12 col-md-6">
            <img
              style={{ width: '90%' }}
              src="img/ItRaiseIt/IMG_1179.JPG"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="it_raise_it-text text-center">
              <h3>HỖ TRỢ CÁC EM SINH VIÊN NGHÈO THEO ĐUỔI CNTT</h3>
              <p>
                Gây quỹ 70 triệu đồng mỗi tháng từ cộng đồng IT hảo tâm để trang
                trải các chi phí học CNTT và chỗ ăn ở cho sinh viên PNV trong 7
                tháng tới (Tổng cộng: 500 triệu đồng đến hết năm 2021).
              </p>
              <h3 style={{ textAlign: 'center' }}>#ITraiseIT</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h5>TẠI SAO LẠI LÀ #ITNUOIIT?</h5>
                  <ul>
                    <p>
                      Vì Passerelles numériques Việt Nam (PNV) là một ngôi
                      trường đặc biệt, nơi gieo mầm và nuôi dưỡng ước mơ của
                      những kỹ sư công nghệ trong tương lai.
                    </p>
                  </ul>
                  <a href="#form-it-raise-it">
                    <button type="button" className="btn btn-info btn-lg">
                      Hỗ trợ ngay
                    </button>
                  </a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h5>KHOẢN HỖ TRỢ HÀNG THÁNG</h5>
                  <ul>
                    <p>
                      Cùng PNV xây dựng một cộng đồng những người làm việc tử tế
                      để hướng tới một xã hội phát triển.{' '}
                    </p>
                  </ul>
                  <NavLink to="/itraiseit-transaction-update">
                    <button type="button" className="btn btn-info btn-lg">
                      Xem chi tiết
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="form-row">
          <div className="col-xs-8 col-md-6 text-center">
            <h3>
              ĐÓNG GÓP NHỎ NUÔI ƯỚC MƠ TO CHUNG TAY VIẾT TIẾP ƯỚC MƠ HỌC TẬP CỦA
              SINH VIÊN NGHÈO TRONG ĐẠI DỊCH
            </h3>
            <p>
              Sự xuất hiện của đại dịch COVID-19 từ năm 2020 đến nay ít nhiều đã
              thay đổi cuộc sống của tất cả chúng ta. Với các em sinh viên nghèo
              đang theo học tại Passerelles Numériques Vietnam, dịch bệnh hoành
              hành không chỉ ảnh hưởng tới sinh hoạt thường ngày mà còn mang
              theo nhiều nỗi lo về việc học tập sắp tới. “Em chỉ muốn được tiếp
              tục học hành. Dù là trong dịch bệnh phải học online, khó khăn hơn
              học bình thường ở lớp, em vẫn muốn được tiếp tục học.” Đó là chia
              sẻ của một sinh viên năm nhất tại PNV, và cũng là tâm sự chung của
              tất cả các em khác nơi đây.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img
              src="img/ItRaiseIt/IMG_1209.JPG"
              className="img-responsive"
              alt=""
            />
          </div>
          {!focus === true ? (
            <div className=" show text-center" onClick={(e) => onFocus(e)}>
              Xem thêm
            </div>
          ) : (
            <div>
              <ul>
                <p>
                  Các học viên đã và đang theo học ở PNV đều có hoàn cảnh khó
                  khăn, lại sinh sống ở miền Trung quanh năm bão lũ nên việc
                  tiếp tục học tập sau bậc phổ thông vốn là một ước mơ xa xỉ.
                  Thấu hiểu những điều này, PNV hơn 10 năm nay đã tìm kiếm và
                  trao cho các em cơ hội được học hoàn toàn miễn phí với chương
                  trình đào tạo ngành Công nghệ thông tin chuyên sâu và các kỹ
                  năng mềm cần thiết, mong muốn giúp đỡ các em thoát nghèo bền
                  vững bằng chính nỗ lực học tập của mình. Thế nhưng, trước tình
                  hình đại dịch, hoạt động của PNV hai năm gần đây đang phải đối
                  mặt với rất nhiều khó khăn. Tính đến tháng 7 năm nay, chúng
                  tôi vẫn đang thiếu đến 71% nguồn quỹ để tiếp tục vận hành.
                  Nhìn các em sinh viên thiếu thốn các thiết bị cần thiết để học
                  online từ ký túc xá, lại thấp thỏm vì không biết việc học sắp
                  tới thế nào, chúng tôi rất thương. Trong những lá thư các em
                  gửi về cho ban điều hành PNV, được tiếp tục học là ước mơ cháy
                  bỏng nhất. Vậy nên, PNV không muốn phụ lòng các em. Chiến dịch
                  ĐÓNG GÓP NHỎ NUÔI ƯỚC MƠ TO được lập nên cũng vì lý do đó.
                  Thông qua chiến dịch, chúng tôi mong muốn kêu gọi đóng góp
                  15.000.000 đồng tiền mặt từ các nhà hảo tâm để trang trải việc
                  học cũng như sinh hoạt tại ký túc xá cho 126 em sinh viên hiện
                  đang theo học tại PNV. Mọi khoản đóng góp dù là nhỏ nhất đều
                  có thể thay đổi cuộc sống của các em. Chỉ với 32.000 đồng,
                  tương đương với một ly cà phê, một em sinh viên sẽ có cơ hội
                  tiếp tục một buổi học IT và tiến gần hơn với ước mơ đưa gia
                  đình thoát nghèo bền vững. Hãy cùng chúng tôi san sẻ một chút
                  tình thương giữa đại dịch, trao tay các em một cơ hội được
                  viết tiếp tương lai tươi sáng hơn.
                </p>
              </ul>
              <div className="show" onClick={(e) => onFocus(e)}>
                &#171; Ẩn{' '}
              </div>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <iframe
              title="Share IT raise IT"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpasserelles.numeriques%2Fvideos%2F984946508932118%2F&show_text=true&width=560&t=0"
              width="100%"
              height="370"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="container-fluid text-center">
          <div className="col-12">
            <h3 className="text-center">TẠI SAO LẠI LÀ #ITNUOIIT </h3>
            <h4>
              CHƯƠNG TRÌNH GÂY QUỸ CỘNG ĐỒNG CỦA TỔ CHỨC PHI CHÍNH PHỦ
              PASSERELLES NUMÉRIQUES VIETNAM?
            </h4>
            <p>
              - Vì các bạn không chỉ đóng góp cho các thanh niên có hoàn cảnh
              khó khăn được đi học mà còn trao quyền để họ có thể tự cầm cần câu
              và câu lấy những con cá thay đổi cuộc đời của chính họ.
              <br />
              - Vì Passerelles numériques Việt Nam (PNV) là một ngôi trường đặc
              biệt, nơi gieo mầm và nuôi dưỡng ước mơ của những kỹ sư công nghệ
              trong tương lai.
              <br />- Vì lòng tốt thì dễ lan tỏa nhưng không thể đi xa nếu thiếu
              mục đích để phát triển bền vững. Cùng PNV xây dựng một cộng đồng
              những người làm việc tử tế để hướng tới một xã hội phát triển lâu
              dài.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="section-title ">
            <p style={{ textAlign: 'center' }}>
              <b>Chiến dịch gây quỹ cộng đồng #ITnuôiIT</b>
            </p>
          </div>
          <div>
            <ul>
              <img src="img/ItRaiseIt/1.jpg" alt="" />
              <img src="img/ItRaiseIt/2.jpg" alt="" />
              <img src="img/ItRaiseIt/3.jpg" alt="" />
              <img src="img/ItRaiseIt/4.jpg" alt="" />
              <img src="img/ItRaiseIt/5.jpg" alt="" />
              <img src="img/ItRaiseIt/6.jpg" alt="" />
              <img src="img/ItRaiseIt/7.jpg" alt="" />
              <img src="img/ItRaiseIt/8.jpg" alt="" />
              <img src="img/ItRaiseIt/9.jpg" alt="" />
              <img src="img/ItRaiseIt/10.jpg" alt="" />
              <img src="img/ItRaiseIt/11.jpg" alt="" />
              <img src="img/ItRaiseIt/13.jpg" alt="" />
            </ul>
          </div>
        </div>

        <div className="container ">
          <div className="donate">
            <p>
              <strong className="donate-header">
                CÁCH THỨC HỖ TRỢ HÀNG THÁNG:
              </strong>
            </p>
            <p className="text-light">
              <strong>Bước 1:</strong>&nbsp;Điền thông tin vào khung bên dưới để
              nhận được email chứa&nbsp;
              <em>
                <strong>mã hỗ trợ cá nhân</strong>
              </em>
              &nbsp;(<em>được gửi trong vòng 24 giờ</em>)
            </p>
            <p className="text-light">
              <strong>Bước 2:&nbsp;</strong>Sau khi nhận được mã, bạn vui
              lòng&nbsp;
              <em>
                <strong>chuyển khoản theo cú pháp</strong>
              </em>
              <b>&nbsp;</b>
              <span style={{ fontWeight: 400 }}>
                ITnuoiIT&nbsp;Mã hỗ trợ&nbsp;(
              </span>
              <i>
                <span style={{ fontWeight: 400 }}>
                  Ví dụ: ITnuoiIT DNTT001)&nbsp;
                </span>
              </i>
              <span style={{ fontWeight: 400 }}>
                đến tài khoản ngân hàng của PN Việt Nam:
              </span>
            </p>
            <ul>
              <li className="bank-info">Ngân hàng: TECHCOMBANK</li>
              <li className="bank-info">
                Tên tài khoản: PASSERELLES NUMERIQUES(PN)
              </li>
              <li className="bank-info">
                Số tài khoản:&nbsp;<strong>19134608156019</strong>
              </li>
              {code && (
                <li className="bank-info">
                  Mã code của bạn là:&nbsp;<strong>{code}</strong>
                </li>
              )}
            </ul>
          </div>
          <div className="text-center">
            <NavLink to="/itraiseit-transaction-update">
              <button className="btn btn-custom-view-donate">
                Xem cập nhật Khoản hỗ trợ Hàng tháng tại đây
              </button>
            </NavLink>
          </div>

          <div>
            {!openForgot ? (
              <form
                id="form-it-raise-it"
                className="form-it-raise-it"
                onSubmit={handleSubmit}
              >
                <p className="header">
                  Bạn vui lòng nhập thông tin tại đây để nhận mã hỗ trợ (Please
                  provide your information here to get the donation code):
                </p>
                <div className="form-group">
                  <label htmlFor="name">
                    Họ và tên của bạn (Your full name)
                    <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nguyen Van A"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Địa chỉ email của bạn (Your email address)
                    <span className="red">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Số điện thoại của bạn (Your phone number)
                    <span className="red">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="0123456789"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Hình thức hỗ trợ (Donation type)
                    <span className="red">*</span>
                  </label>
                  <select
                    className="form-control"
                    id="selectedOptionOne"
                    name="selectedOptionOne"
                    required
                    onChange={handleChange}
                    defaultValue="Một lần (Once time)"
                  >
                    <option value="Một lần (Once time)">
                      Một lần (Once time)
                    </option>
                    <option value="Monthly">Hàng tháng (Monthly)</option>
                  </select>
                </div>

                {selectedOptionOne === 'Monthly' && (
                  <div className="form-group">
                    <label htmlFor="phone">
                      Khoảng thời gian bạn muốn hỗ trợ (Subscription period of
                      your donation)
                      <span className="red">*</span>
                    </label>
                    <select
                      className="form-control"
                      id="selectedOptionTwo"
                      name="selectedOptionTwo"
                      onChange={handleChange}
                      required
                    >
                      <option value="12 tháng (12 months)">
                        12 tháng (12 months)
                      </option>
                      <option value="9 tháng (9 months)">
                        9 tháng (9 months)
                      </option>
                      <option value="6 tháng (6 months)">
                        6 tháng (6 months)
                      </option>
                      <option value="3 tháng (3 months)">
                        3 tháng (3 months)
                      </option>
                    </select>
                  </div>
                )}
                <p className="text-helper" onClick={changeOpen}>
                  Quên mã hỗ trợ cá nhân? (Forgot the donation code?)
                </p>
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    Gửi (Submit)
                  </button>
                </div>
              </form>
            ) : (
              <form className="form-it-raise-it" onSubmit={getCode}>
                <p className="header">
                  Bạn hãy cung cấp email/số điện thoại để lấy lại mã hỗ trợ cá
                  nhân (Please provide your email/phone number to get back the
                  donation code):
                </p>
                <div className="form-group">
                  <label htmlFor="email">
                    Địa chỉ email của bạn (Your email address)
                    <span className="red">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-forgot"
                    name="email-forgot"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <p className="text-helper" onClick={changeOpen}>
                  Đăng ký mã khác (Register another code)
                </p>
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    Gửi (Submit)
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <NumberOverview numbers={numbers} />
      </div>
      <div className=" container text-center">
        <iframe
          width={'100%'}
          height={512}
          src="https://www.youtube.com/embed/bKkqeqoGaPY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <i>
          <p className="title-video">Video: Một ngày của sinh viên PNV.</p>
        </i>
      </div>
    </div>
  );
};

export default ITRaiseIT;
