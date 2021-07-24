import AnimatedNumber from 'animated-number-react';
import React from 'react';
import PropTypes from 'prop-types';
// css
import { useState } from 'react';

NumberOverview.propTypes = {
  numbers: PropTypes.object,
};

NumberOverview.defaultProps = {
  numbers: {},
};

function NumberOverview(props) {
  const { numbers } = props;
  const [isRun, setIsRun] = useState(false);

  function isVisible(elem) {
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // top elem edge is visible?
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    // bottom elem edge is visible?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
  }
  if (!isRun) {
    setInterval(() => {
      if (isVisible(document.querySelector('#overview'))) {
        setIsRun(true);
      } else {
        setIsRun(false);
      }
    }, 1000);
  }

  const formatValue = (value) => Number(value).toFixed(0);
  const formatValueMoney = (value) =>
    Number(value).toLocaleString('vi', {
      style: 'currency',
      currency: 'VND',
    });
  return (
    <div className="container page-scroll" id="overview">
      <div className="row">
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.total_students : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
          </p>
          <p className="mean-of-number text-center">
            sinh viên nghèo được nhận học bổng
          </p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.alumni : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
          </p>
          <p className="mean-of-number text-center">cựu sinh viên</p>
        </div>
        <div className="col-md-5 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? Number(numbers.average_wage) : 0}
                formatValue={formatValueMoney}
              />
            ) : (
              0
            )}
          </p>
          <p className="mean-of-number text-center">
            là mức lương trung bình tháng của các cựu sinh viên (VNĐ)
          </p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.current_students : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
          </p>
          <p className="mean-of-number text-center">
            là số sinh viên hiện đang học tại PNV
          </p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.percent_get_job : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
            %
          </p>
          <p className="mean-of-number text-center">
            sinh viên tốt nghiệp có việc làm ổn định
          </p>
        </div>

        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.percent_alumni_it : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
            %
          </p>
          <p className="mean-of-number text-center">
            cựu sinh viên làm việc trong ngành IT
          </p>
        </div>

        <div className="col-md-3 number-overview">
          <p className="number text-center">
            {isRun ? (
              <AnimatedNumber
                value={numbers ? numbers.alumni_allowance : 0}
                formatValue={formatValue}
              />
            ) : (
              0
            )}
            %
          </p>
          <p className="mean-of-number text-center">
            là phần thu nhập cựu sinh viên phụ cấp cho gia đình hàng tháng
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NumberOverview);
