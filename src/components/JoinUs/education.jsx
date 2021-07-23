import './joinUs.css';
import React, { useState } from 'react';
import Data from '../../data/data.json';
// return (

export const Education = (props) => {
  const [focus, setFocus] = useState(false);
  // const [data] = useState(null);

  const onFocus = (e) => {
    e.preventDefault();
    setFocus(!focus);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="titleJoinUs">{Data.Education.title}</div>

        {/* </div>
      <div className="row"> */}
        <div className="date">{Data.Education.start_date}</div>
      </div>
      <div className="row">
        <ul>
          {Data.Education.contextAndMission.map((d, i) => (
            <li key={`${d}-${i}`}>{d}</li>
          ))}
        </ul>
      </div>
      {!focus === true ? (
        <div className=" row show" onClick={(e) => onFocus(e)}>
          Xem thêm
        </div>
      ) : (
        <div className="row">
          <span className="title-content">Bối cảnh và nhiệm vụ</span>
          <ul>
            {Data.Education
              ? Data.Education.background.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>

          <span className="title-content">Nhiệm vụ và trách nhiệm</span>
          <br />
          <span className="title-content-children">
            Sự giám sát với sinh viên
          </span>
          <ul>
            {Data.Education
              ? Data.Education.contextAndMission.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>
          <span className="title-content-children">Ký túc xá</span>
          <ul>
            {Data.Education
              ? Data.Education.dormitory.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>
          <span className="title-content-children">Hoạt động giáo dục</span>
          <ul>
            {Data.Education
              ? Data.Education.educationActivities.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>
          <span className="title-content-children">Báo cáo</span>
          <br />

          {Data.Education.report}
          <br />
          <span className="title-content-children">Yêu cầu cần có</span>
          <ul>
            {Data.Education
              ? Data.Education.other.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
            <br />
          </ul>
          <span className="title-content">Kỹ năng và kinh nghiệm</span>
          <br />
          <span className="title-content-children">
            Giáo dục - chuyên ngành
          </span>
          <ul>
            {Data.Education
              ? Data.Education.education.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>
          <span className="title-content-children">
            Kinh nghiệm - chuyên môn
          </span>
          <ul>
            {Data.Education
              ? Data.Education.skillAndExperience.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>
          <span className="title-content-children">Lương và phúc lợi</span>
          <ul>
            {Data.Education
              ? Data.Education.statusAndCondition.map((d, i) => (
                  <li key={`${d}-${i}`}>{d}</li>
                ))
              : null}
          </ul>

          <div className="show" onClick={(e) => onFocus(e)}>
            &#171;Ẩn{' '}
          </div>
        </div>
      )}
    </div>
  );
};
