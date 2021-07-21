import AnimatedNumber from 'animated-number-react';
import React from 'react';
import PropTypes from 'prop-types';
// css
import './number_overview.css';

const NumberOverview = (props) => {
  const { numbers } = props;
  const formatValue = (value) => Number(value).toFixed(0);
  return (
    <div className="container page-scroll">
      <div className="row">
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            <AnimatedNumber
              value={numbers ? numbers.total_students : 0}
              formatValue={formatValue}
            />
            +
          </p>
          <p className="mean-of-number text-center">
            sinh viên nghèo được nhận học bổng
          </p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            <AnimatedNumber
              value={numbers ? numbers.alumni : 0}
              formatValue={formatValue}
            />
          </p>
          <p className="mean-of-number text-center">cựu sinh viên</p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            <AnimatedNumber
              value={numbers ? numbers.percent_get_job : 0}
              formatValue={formatValue}
            />
          </p>
          <p className="mean-of-number text-center">
            sinh viên tốt nghiệp có việc làm ổn định
          </p>
        </div>
        <div className="col-md-3 number-overview">
          <p className="number text-center">
            <AnimatedNumber
              value={numbers ? numbers.alumni_allowance : 0}
              formatValue={formatValue}
            />
          </p>
          <p className="mean-of-number text-center">
            là phần thu nhập cựu sinh viên phụ cấp cho gia đình hàng tháng
          </p>
        </div>
      </div>
    </div>
  );
};

NumberOverview.propTypes = {
  numbers: PropTypes.object,
};

NumberOverview.defaultProps = {
  numbers: {},
};

export default React.memo(NumberOverview);
