import './donate-vnpay.css';

import $ from 'jquery';
import CallAPI from '../../../helper/callAPI';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const DonateBYVNPay = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    setOpen(true);
    const present_url = window.location.href;
    const return_url =
      present_url.slice(0, present_url.lastIndexOf('/')) +
      '/return-from-donate-by-vnpay';

    let data = {
      amount: $('#amount').val(),
      order_desc: $('#order_desc').val() || 'Không có chú thích gì.',
      bank_code: $('#bank_code').val(),
      language: $('#language').val(),
      return_url: return_url,
    };

    await CallAPI('donate-by-vnpay', 'POST', data)
      .then((res) => window.location.assign(res.data.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container by-vnpay">
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="primary" />
      </Backdrop>
      <div className="header clearfix hero">
        <img src="favicon.png" alt="Logo of PN" />
        <h2>Tài trợ cho PNV thông qua VNPAY</h2>
      </div>
      <div className="table-responsive">
        <form onSubmit={onSubmitHandle}>
          <div className="form-group">
            <label htmlFor="amount">Số tiền ủng hộ</label>
            <input
              className="form-control"
              id="amount"
              name="amount"
              type="number"
              defaultValue={100000}
            />
          </div>
          <div className="form-group">
            <label htmlFor="order_desc">Lời nhắn gửi/Chú thích</label>
            <textarea
              className="form-control"
              cols={20}
              id="order_desc"
              name="order_desc"
              rows={2}
              placeholder="Hãy gửi đôi lời đến PNV"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bank_code">Ngân hàng</label>
            <select name="bank_code" id="bank_code" className="form-control">
              <option value="">Không chọn</option>
              <option value="NCB"> Ngân hàng NCB</option>
              <option value="AGRIBANK"> Ngân hàng Agribank</option>
              <option value="SCB"> Ngân hàng SCB</option>
              <option value="SACOMBANK">Ngân hàng SacomBank</option>
              <option value="EXIMBANK"> Ngân hàng EximBank</option>
              <option value="MSBANK"> Ngân hàng MSBANK</option>
              <option value="NAMABANK"> Ngân hàng NamABank</option>
              <option value="VNMART"> Vi dien tu VnMart</option>
              <option value="VIETINBANK">Ngân hàng Vietinbank</option>
              <option value="VIETCOMBANK"> Ngân hàng VCB</option>
              <option value="HDBANK">Ngân hàng HDBank</option>
              <option value="DONGABANK"> Ngân hàng Dong A</option>
              <option value="TPBANK"> Ngân hàng TPBank</option>
              <option value="OJB"> Ngân hàng OceanBank</option>
              <option value="BIDV"> Ngân hàng BIDV</option>
              <option value="TECHCOMBANK"> Ngân hàng Techcombank</option>
              <option value="VPBANK"> Ngân hàng VPBank</option>
              <option value="MBBANK"> Ngân hàng MBBank</option>
              <option value="ACB"> Ngân hàng ACB</option>
              <option value="OCB"> Ngân hàng OCB</option>
              <option value="IVB"> Ngân hàng IVB</option>
              <option value="VISA"> Thanh toán qua VISA/MASTER</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language">Ngôn ngữ</label>
            <select name="language" id="language" className="form-control">
              <option value="vn">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Quyên góp
          </button>
        </form>
      </div>
      <p>&nbsp;</p>
      <footer className="footer">
        <p>© VNPAY 2015</p>
      </footer>
    </div>
  );
};

export default DonateBYVNPay;
