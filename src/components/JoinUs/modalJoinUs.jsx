import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './joinUs.css';
import SendEmail from '../../helper/SendEmail';
import Swal from 'sweetalert2';

import React from 'react';

export const ModalJoinUs = (props) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(e.target);
    Swal.fire({
      title: 'Nộp đơn ứng tuyển ngay?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#22bbea',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Gửi',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        SendEmail(e.target, 'contact_email_pnv').then(
          () => {
            Swal.fire(
              'Thành công!',
              'Bạn đã gửi đơn ứng tuyển của đến cho PNV.',
              'success'
            );
          },
          () => {
            Swal.fire(
              'Thất bại!',
              'Có lỗi đã xảy ra trong quá trình gửi email.',
              'error'
            );
          }
        );
      }
    });
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-info modal_button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Nộp đơn ứng tuyển
      </button>
      <div
        className="modal fade modal-form"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalSubmitEmailRecruitment"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h5 className="modal-title" id="modalSubmitEmailRecruitment">
                Điền thư ứng tuyển
              </h5>
            </div>
            <div className="modal-body">
              <form
                className="form-horizontal text-center"
                onSubmit={onSubmitHandle}
              >
                <div className="form-group">
                  <TextField
                    id="candidate_name"
                    name="candidate_name"
                    type="text"
                    label="Họ và tên"
                    required
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="number"
                    id="candidate_phone"
                    name="candidate_phone"
                    label="Số điện thoại"
                    required
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="email"
                    id="candidate_email"
                    name="candidate_email"
                    label="Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="file"
                    id="candidate_cv"
                    name="candidate_cv"
                    label="CV"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachFileIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="file"
                    label="Cover Letter"
                    id="candidate_cover_letter"
                    name="candidate_cover_letter"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachFileIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10 button-form">
                    <button type="submit" className="btn btn-info ">
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
