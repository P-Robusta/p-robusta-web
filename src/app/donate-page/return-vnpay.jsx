import React from 'react';

const ReturnVNPAY = () => {
  const url_string = window.location.href;
  const url = new URL(url_string);

  const status = () => {
    switch (url.searchParams.get('vnp_ResponseCode')) {
      case '00':
        return 'Quyên góp thành công!';

      case '01':
        return 'Giao dịch đã tồn tại';

      case '02':
        return 'Merchant không hợp lệ (kiểm tra lại vnp_TmnCode)';

      case '03':
        return 'Dữ liệu gửi sang không đúng định dạng';

      case '04':
        return 'Khởi tạo GD không thành công do Website đang bị tạm khóa';

      case '05':
        return 'Giao dịch không thành công do: Quý khách nhập sai mật khẩu quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch';

      case '13':
        return 'Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.';

      case '07':
        return 'Giao dịch bị nghi ngờ là giao dịch gian lận';

      case '09':
        return 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.';

      case '10':
        return 'Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần';

      case '11':
        return 'Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.';

      case '12':
        return 'Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa.';

      case '51':
        return '	Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.';

      case '65':
        return 'Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày.';

      case '08':
        return 'Giao dịch không thành công do: Hệ thống Ngân hàng đang bảo trì. Xin quý khách tạm thời không thực hiện giao dịch bằng thẻ/tài khoản của Ngân hàng này.';

      default:
        return 'Các lỗi khác!';
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header clearfix text-center">
          <h3 className="text-primary">Thông tin quyên góp</h3>
        </div>
        <div className="container">
          <p>Mã giao dịch: {url.searchParams.get('vnp_TxnRef')}</p>
        </div>
        <div className="container">
          <p>
            Số tiền:{' '}
            {Number(url.searchParams.get('vnp_Amount')).toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
        </div>
        <div className="container">
          <p>Lời nhắn gửi/Chú thích: {url.searchParams.get('vnp_OrderInfo')}</p>
        </div>
        <div className="container">
          <p>Mã GD Tại VNPAY: {url.searchParams.get('vnp_TransactionNo')}</p>
        </div>
        <div className="container">
          <p>Mã Ngân hàng: {url.searchParams.get('vnp_BankCode')}</p>
        </div>
        <div className="container">
          <p>Thời gian thanh toán: {url.searchParams.get('vnp_PayDate')}</p>
        </div>
        <div className="container">
          <p>Kết quả: {status}</p>
        </div>
        <a href="/" className="btn btn-lg btn-info">
          Quay lại
        </a>
      </div>
    </div>
  );
};

export default ReturnVNPAY;
