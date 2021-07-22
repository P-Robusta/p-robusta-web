// export const Contact = (props) => {
import './joinUs.css';
import React from 'react';
export const ModalJoinUs = (props) => {
  return (
    <div class="container">
      <button
        type="button"
        class="btn btn-info modal_button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Thư ứng tuyển
      </button>

      <div
        class="modal fade modal-form"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Điền thư ứng tuyển
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="form-horizontal" action="/action_page.php">
                <div className="form-group">
                  <label
                    className="control-label col-sm-2 label-form"
                    htmlFor="name"
                  >
                    Họ và tên
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nguyễn Văn A"
                      name="name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="control-label col-sm-2"
                    htmlFor="labelPhone"
                  >
                    Số điện thoại
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="096162756"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="a.nguyen@gmail.com"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="control-label col-sm-2 label-form"
                    htmlFor="filecv"
                  >
                    Đính kèm CV
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className="form-control"
                      id="cv"
                      name="cv"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="control-label col-sm-2"
                    htmlFor="fileCoverLetter"
                  >
                    Đính kèm thư xin việc
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className="form-control"
                      id="letter"
                      name="letter"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10 button-form">
                    <button type="submit" className="btn btn-info ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
