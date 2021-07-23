export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img alt="Passerelles numériques" src="logo.png" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{ border: 'none' }}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#news" className="page-scroll">
                Tin tức
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Về chúng tôi
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#donate-and-partners"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
              >
                Tài trợ &amp; Đối tác &nbsp;
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
              <ul
                id="donate-and-partners-menu"
                className="dropdown-menu clearfix nav navbar-nav navbar-right"
                role="menu"
              >
                <li>
                  <a href="#partners" className="page-scroll">
                    Các đối tác
                  </a>
                </li>
                <li>
                  <a href="#donate" className="page-scroll">
                    Tài trợ
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#staff-and-join-us"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
              >
                Nhân sự &nbsp;
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
              <ul
                id="staff-and-join-us-menu"
                className="dropdown-menu clearfix nav navbar-nav navbar-right"
                role="menu"
              >
                <li>
                  <a href="#staff" className="page-scroll">
                    Nhân sự
                  </a>
                </li>
                <li>
                  <a href="#join-us" className="page-scroll">
                    Tuyển dụng
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
