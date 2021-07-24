import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './joinUs.css';
import CallAPI from '../../helper/callAPI';
import Swal from 'sweetalert2';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import $ from 'jquery';
const useStyles = makeStyles({
  applyButton: {
    textAlign: 'end',
  },
  recruitment_form: {
    width: '340px',
  },
});

export const ModalJoinUs = (props) => {
  const classes = useStyles();

  const [cv, setCV] = useState();
  const [coverLetter, setCoverLetter] = useState();

  const onChangeCV = (e) => {
    setCV(e.target.files[0]);
  };

  const onChangeCoverLetter = (e) => {
    setCoverLetter(e.target.files[0]);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (
      (cv.type.indexOf('image') ||
        cv.type.indexOf('pdf') ||
        cv.type.indexOf('pptx') ||
        cv.type.indexOf('doc') ||
        cv.type.indexOf('docx')) &&
      (coverLetter.type.indexOf('image') ||
        coverLetter.type.indexOf('pdf') ||
        coverLetter.type.indexOf('pptx') ||
        coverLetter.type.indexOf('doc') ||
        coverLetter.type.indexOf('docx')) &&
      cv.size < 25000000 &&
      coverLetter.size < 25000000
    ) {
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
          let data = new FormData();
          data.append('candidate_name', $('#candidate_name').val());
          data.append('candidate_phone', $('#candidate_phone').val());
          data.append('candidate_email', $('#candidate_email').val());
          data.append('candidate_cv', cv);
          data.append('candidate_cover_letter', coverLetter);
          CallAPI('send_email_recuitment', 'POST', data)
            .then(
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
            )
            .catch((err) => console.error(err));
        }
      });
    } else {
      Swal.fire(
        'Lỗi!',
        'File phải là một trong các định dạng pptx, doc, docx, pdf, image và kích thước file ≤ 25MB.',
        'error'
      );
    }
    $('#btn-close-recuitment-form').click();
  };
  return (
    <div className={classes.applyButton}>
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
                id="btn-close-recuitment-form"
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
                    className={classes.recruitment_form}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="tel"
                    id="candidate_phone"
                    name="candidate_phone"
                    label="Số điện thoại"
                    pattern="[0-9]{10}"
                    required
                    className={classes.recruitment_form}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    type="email"
                    id="candidate_email"
                    name="candidate_email"
                    label="Email"
                    required
                    className={classes.recruitment_form}
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
                    onChange={onChangeCV}
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
                    required
                    onChange={onChangeCoverLetter}
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
