import './BtnBackHome.css';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
const BtnBackHome = () => {
  return (
    <div>
      <NavLink to="/">
        <button className="btn-back-home">
          <HomeIcon className="icon" />
        </button>
      </NavLink>
    </div>
  );
};

export default BtnBackHome;
