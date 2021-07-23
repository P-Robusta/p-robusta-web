import React from 'react';
import './ITRaiseIT.css';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


export const ITRaiseIT = (props) => {






  const [focus, setFocus] = useState(false);

  const onFocus = (e) => {
    e.preventDefault();
    setFocus(!focus);
  };
  return (
    <div id="it_raise_it" >
      <NavLink to="/">
        <Button size="large" variant="contained" color="primary">
          <h5>
            <i className="fa fa-arrow-left"></i> Quay trở lại
          </h5>
        </Button>
      </NavLink>

      <div className="ITraiseIT ">
        <div className=" title text-center">
          <h2>SUPPORT POOR STUDENTS FOLLOWING IT LEARNING #ITRAISEIT</h2>
        </div>
        <div className="form-inline">
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img style={{ width: "90%" }} src="https://nerdpasserellesnumeriquesvn.herokuapp.com/images/activity/IMG_1179.JPG" className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='it_raise_it-text text-center'>
              <h3>HỖ TRỢ CÁC EM SINH VIÊN NGHÈO THEO ĐUỔI VIỆC HỌC CNTT</h3>
              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
              <p>Gây quỹ 70 triệu đồng mỗi tháng từ cộng đồng IT hảo tâm để trang trải các chi phí học CNTT và chỗ ăn ở cho sinh viên PNV trong 7 tháng tới (Tổng cộng: 500 triệu đồng đến hết năm 2021).</p>
              <h3 style={{ textAlign: 'center' }}>#ITraiseIT</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <h5>TẠI SAO LẠI LÀ #ITNUOIIT?</h5>
                  <ul>
                    <p>Vì Passerelles numériques Việt Nam (PNV) là một ngôi trường đặc biệt, nơi gieo mầm và nuôi dưỡng ước mơ của những kỹ sư công nghệ trong tương lai.</p>
                  </ul>
                  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#ITRaiseITModal">Join Us</button>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <h5>KHOẢN HỖ TRỢ HÀNG THÁNG</h5>
                  <ul>
                    <p> Cùng PNV xây dựng một cộng đồng những người làm việc tử tế để hướng tới một xã hội phát triển. </p>
                  </ul>
                  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#ITRaiseITDetailModal"> See more</button>

                </div>
              </div>
            </div>
          </div>

        </div>
        <br />

        <div className="form-row">
          <div className='col-xs-8 col-md-6 text-center'>
            <h3>ĐÓNG GÓP NHỎ NUÔI ƯỚC MƠ TO CHUNG TAY VIẾT TIẾP ƯỚC MƠ HỌC TẬP CỦA SINH VIÊN NGHÈO TRONG ĐẠI DỊCH</h3>
            <p>Sự xuất hiện của đại dịch COVID-19 từ năm 2020 đến nay ít nhiều đã thay đổi cuộc sống của tất cả chúng ta. Với các em sinh viên nghèo đang theo học tại Passerelles Numériques Vietnam, dịch bệnh hoành hành không chỉ ảnh hưởng tới sinh hoạt thường ngày mà còn mang theo nhiều nỗi lo về việc học tập sắp tới.
              “Em chỉ muốn được tiếp tục học hành. Dù là trong dịch bệnh phải học online, khó khăn hơn học bình thường ở lớp, em vẫn muốn được tiếp tục học.”
              Đó là chia sẻ của một sinh viên năm nhất tại PNV, và cũng là tâm sự chung của tất cả các em khác nơi đây.</p>


          </div>
          <div className='col-xs-12 col-md-6'>
            <img src="https://nerdpasserellesnumeriquesvn.herokuapp.com/images/activity/IMG_1209.JPG" className='img-responsive' alt='' />

          </div>
          {!focus === true ? (
            <div className=" show text-center" onClick={(e) => onFocus(e)}>
              Xem thêm
            </div>

          ) : (
            <div >
              {/* <span className="title-content">Bối cảnh và nhiệm vụ</span> */}
              <ul>
                <p>
                  Các học viên đã và đang theo học ở PNV đều có hoàn cảnh khó khăn, lại sinh sống ở miền Trung quanh năm bão lũ nên việc tiếp tục học tập sau bậc phổ thông vốn là một ước mơ xa xỉ. Thấu hiểu những điều này, PNV hơn 10 năm nay đã tìm kiếm và trao cho các em cơ hội được học hoàn toàn miễn phí với chương trình đào tạo ngành Công nghệ thông tin chuyên sâu và các kỹ năng mềm cần thiết, mong muốn giúp đỡ các em thoát nghèo bền vững bằng chính nỗ lực học tập của mình.
                  Thế nhưng, trước tình hình đại dịch, hoạt động của PNV hai năm gần đây đang phải đối mặt với rất nhiều khó khăn. Tính đến tháng 7 năm nay, chúng tôi vẫn đang thiếu đến 71% nguồn quỹ để tiếp tục vận hành. Nhìn các em sinh viên thiếu thốn các thiết bị cần thiết để học online từ ký túc xá, lại thấp thỏm vì không biết việc học sắp tới thế nào, chúng tôi rất thương. Trong những lá thư các em gửi về cho ban điều hành PNV, được tiếp tục học là ước mơ cháy bỏng nhất. Vậy nên, PNV không muốn phụ lòng các em.
                  Chiến dịch ĐÓNG GÓP NHỎ NUÔI ƯỚC MƠ TO được lập nên cũng vì lý do đó. Thông qua chiến dịch, chúng tôi mong muốn kêu gọi đóng góp 15.000.000 đồng tiền mặt từ các nhà hảo tâm để trang trải việc học cũng như sinh hoạt tại ký túc xá cho 126 em sinh viên hiện đang theo học tại PNV.  Mọi khoản đóng góp dù là nhỏ nhất đều có thể thay đổi cuộc sống của các em. Chỉ với 32.000 đồng, tương đương với một ly cà phê, một em sinh viên sẽ có cơ hội tiếp tục một buổi học IT và tiến gần hơn với ước mơ đưa gia đình thoát nghèo bền vững.
                  Hãy cùng chúng tôi san sẻ một chút tình thương giữa đại dịch, trao tay các em một cơ hội được viết tiếp tương lai tươi sáng hơn.</p>
              </ul>
              <div className="show" onClick={(e) => onFocus(e)}>
                &#171; Ẩn{' '}
              </div>
            </div>
          )}
        </div>


        <div className="row">
          <div className='col-xs-12 col-md-6'>

            <iframe
              title="Share IT raise IT"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpasserelles.numeriques%2Fvideos%2F984946508932118%2F&show_text=true&width=560&t=0"
              width="100%"
              height="370"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

          </div>
          <div className='col-xs-12 col-md-6'>
            <h3 className="text-center">TẠI SAO LẠI LÀ #ITNUOIIT  </h3>
            <h4 className="text-center">CHƯƠNG TRÌNH GÂY QUỸ CỘNG ĐỒNG CỦA TỔ CHỨC PHI CHÍNH PHỦ PASSERELLES NUMÉRIQUES VIETNAM?</h4>
            <p >- Vì các bạn không chỉ đóng góp cho các thanh niên có hoàn cảnh khó khăn được đi học mà còn trao quyền để họ có thể tự cầm cần câu và câu lấy những con cá thay đổi cuộc đời của chính họ.<br />
              - Vì Passerelles numériques Việt Nam (PNV) là một ngôi trường đặc biệt, nơi gieo mầm và nuôi dưỡng ước mơ của những kỹ sư công nghệ trong tương lai.<br />
              - Vì lòng tốt thì dễ lan tỏa nhưng không thể đi xa nếu thiếu mục đích để phát triển bền vững. Cùng PNV xây dựng một cộng đồng những người làm việc tử tế để hướng tới một xã hội phát triển lâu dài.</p>
          </div>
        </div>



        <div className="row text-center">
          <div className="section-title ">
            <p style={{ textAlign: 'center' }}><b>Chiến dịch gây quỹ cộng đồng #ITnuôiIT</b></p>
          </div>
          <div style={{}}>
            <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/1.jpg" alt="" />

            {!focus === true ? (
              <div className=" show text-cente" onClick={(e) => onFocus(e)}>
                Xem thêm
              </div>
            ) : (
              <div >
                {/* <span className="title-content">Bối cảnh và nhiệm vụ</span> */}
                <ul>
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/2.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/3.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/4.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/5.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/6.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/7.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/8.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/9.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/10.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/11.jpg" alt="" />
                  <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/07/13.jpg" alt="" />

                </ul>
                <div className="show" onClick={(e) => onFocus(e)}>
                  &#171; Ẩn{' '}
                </div>
              </div>
            )}

          </div>

        </div>




        <div class="modal fade modal-form"
          id="ITRaiseITModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ITRaiseITModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ITRaiseITModalLabel">
                  Please provide your information here to get the donation code
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="form-row">
                  <div className=" col-sm-4">

                    <p>YOU CAN SUPPORT DIREACTLY AT<br />

                      <br />
                      TECHCOMBANK<br />
                      Account’s name: PASSERELLES NUMERIQUES(PN)<br />
                      Account’s number: 19134608156019<br />
                      Swift code: VTCBVNVX</p>
                  </div>

                  <div className="col-sm-8">
                    <div className="form-group">
                      <label htmlFor="name">Your Full Name</label>
                      <input type="text" className="form-control" id="name" required aria-describedby="name" placeholder="Enter name" />

                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email Address</label>
                      <input type="email" className="form-control" id="email" required aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" required placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" className="form-control" id="phone" required placeholder="Phone" />
                    </div>
                    <div className="form-group" id="select" required>
                      <label htmlFor="selectType">Donation Type</label>
                      <select className="form-control" id="select">
                        <option >Monthly</option>
                        <option>Once time</option>

                      </select>


                    </div>
                    <div className="form-group" id="monthlySelect" required>
                      <label htmlFor="selectType">Subscription period of your donation</label>
                      <select className="form-control" id="monthlySelect">Select
                        <option >3 Month</option>
                        <option>6 Month</option>
                        <option>9 Month</option>
                        <option>12 Month</option>

                      </select>


                    </div>

                  </div>

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
              </div>

            </div>

          </div>
        </div>

        <div class="modal fade modal-form"
          id="ITRaiseITDetailModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ITRaiseITDetailModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ITRaiseITDetailModalLabel">
                  PNV VÀ NHỮNG KHOẢN ĐÓNG GÓP TRONG CHƯƠNG TRÌNH #ITNUOIIT VÀ HỖ TRỢ MÙA DỊCH COVID 2021 <br />PNV AND DONATIONS TO #ITRAISESIT AND COVID 2021 RELIEF</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group col-md-12">
                  <div  >
                    <h4>Your donation to the campaign IT raises IT of PNV is recorded. Our students are really grateful for your kindness!</h4>
                    <iframe src="https://docs.google.com/spreadsheets/d/1Me-YzPvC3c8cnicLro97vLgdBMqb4H9ZDPyyrJ4P3Do/edit?usp=sharing"></iframe>
                  </div>
                  <p>_________________________________________________________________</p>
                  <div >

                    <h4>Your donation to PNV during COVID relief from May to July is recorded. Our students are really grateful for your kindness!</h4>

                    <iframe src="https://docs.google.com/spreadsheets/d/1PGllImiGgaZ3qr0EWehC432WIUdUIAiuyYa46QFlkog/edit?usp=sharing"></iframe>

                  </div>

                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ITRaiseIT;




