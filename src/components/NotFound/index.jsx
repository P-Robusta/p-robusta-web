import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
NotFound.propTypes = {};

function NotFound() {
  return (
    <div>
      <div className="error-bg">
        <table>
          <tbody>
            <tr>
              <td id="text1">404</td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
            </tr>
            <tr>
              <td id="text2">Bạn thấy gì không? Là màn hình đó!</td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <button>
                  <Link to="/">Về trang chủ</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotFound;
