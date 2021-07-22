import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

function ITRaiseIT(props) {
  return (
    <div id="it_raise_it">
      <NavLink to="/">
        <Button size="large" variant="contained" color="primary">
          <h5>
            <i className="fa fa-arrow-left"></i> Quay trở lại
          </h5>
        </Button>
      </NavLink>
      <div>
        <div className="container">
          <div className="section-title text-center">
            <h2>SUPPORT POOR STUDENTS FOLLOWING IT LEARNING #ITRAISEIT</h2>
          </div>
          <div class=" et_pb_row et_pb_row_0 et_pb_row_fullwidth">
            <div class="et_pb_column et_pb_column_1_3  et_pb_column_0">
              <div class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_text_0">
                <p>
                  <span class="JsGRdQ">
                    HỖ TRỢ CÁC EM SINH VIÊN NGHÈO THEO ĐUỔI VIỆC HỌC CNTT
                  </span>
                </p>
              </div>
              <div class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_text_1">
                <p>
                  <strong>#ITNUÔIIT</strong>
                </p>
              </div>
              <div class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_text_2">
                <p>
                  <span class="JsGRdQ">
                    Gây quỹ 70 triệu đồng mỗi tháng từ cộng đồng IT hảo tâm để
                    trang trải các chi phí học CNTT và chỗ ăn ở cho sinh viên
                    PNV trong 7 tháng tới (Tổng cộng: 500 triệu đồng đến hết năm
                    2021).
                  </span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <iframe
                title="Share IT raise IT"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpasserelles.numeriques%2Fvideos%2F984946508932118%2F&show_text=true&width=560&t=0"
                width="560"
                height="550"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </div>

            <div class="et_pb_column et_pb_column_1_3  et_pb_column_1 et_pb_column_empty"></div>
            <div class="et_pb_column et_pb_column_1_3  et_pb_column_2">
              <div class="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_text_3">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                {/* <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p> */}
              </div>
            </div>
            <div class="et_pb_text et_pb_module et_pb_bg_layout_dark et_pb_text_align_left  et_pb_text_0">
              <p>
                <em>(English below)</em>
              </p>
              <p>
                <strong>CÁCH THỨC HỖ TRỢ HÀNG THÁNG:</strong>
              </p>
              <p>
                <strong>Bước 1:</strong>&nbsp;Điền thông tin vào khung bên dưới
                để nhận được email chứa&nbsp;
                <em>
                  <strong>mã hỗ trợ cá nhân</strong>
                </em>
                &nbsp;(<em>được gửi trong vòng 24 giờ</em>)
              </p>
              <p>
                <strong>Bước 2:&nbsp;</strong>Sau khi nhận được mã, bạn vui
                lòng&nbsp;
                <em>
                  <strong>chuyển khoản theo cú pháp</strong>
                </em>
                <b>&nbsp;</b>
                <span>ITnuoiIT&nbsp;Mã hỗ trợ&nbsp;(</span>
                <i>
                  <span>Ví dụ: ITnuoiIT DNTT001)&nbsp;</span>
                </i>
                <span>đến tài khoản ngân hàng của PN Việt Nam:</span>
              </p>
              <ul>
                <li>Ngân hàng TECHCOMBANK</li>
                <li>Tên tài khoản: PASSERELLES NUMERIQUES(PN)</li>
                <li>
                  Số tài khoản:&nbsp;<strong>19134608156019</strong>
                </li>
              </ul>
              <p>
                Khoản hỗ trợ hàng tháng của bạn sẽ được cập nhật&nbsp;
                <a href="/en/itraiseit-transaction-update/">
                  <strong>ở đây</strong>
                </a>
                .
              </p>
              <div>
                <p>
                  <strong>HOW YOU CAN BECOME OUR MONTHLY SPONSOR</strong>
                </p>
                <p>
                  <strong>Step&nbsp;1:</strong>&nbsp;Fill your information in
                  the box below to receive an email with a&nbsp;
                  <strong>sponsorship&nbsp;</strong>
                  <strong>code&nbsp;</strong>(<em>sent within 24 hours</em>)
                </p>
                <p>
                  <strong>Step&nbsp;2:&nbsp;</strong>After receiving the code,
                  please kindly&nbsp;<strong>transfer the donation</strong>
                  &nbsp;to PN Vietnam bank account with the syntax:&nbsp;
                  <strong>ITraisesIT Support code</strong>&nbsp;(
                  <em>Ex: ITraisesIT DNTT001)</em>
                  <span>:</span>
                </p>
                <ul>
                  <li>TECHCOMBANK</li>
                  <li>Account’s name: PASSERELLES NUMERIQUES(PN)</li>
                  <li>
                    Account’s number:&nbsp;<strong>19134608156019</strong>
                  </li>
                  <li>Swift code: VTCBVNVX</li>
                </ul>
                <p>
                  Your donation transaction will be updated&nbsp;
                  <a href="/en/itraiseit-transaction-update/">
                    <strong>here</strong>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITRaiseIT;
