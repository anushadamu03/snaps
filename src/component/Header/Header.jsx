import "./Header.scss";
import filter from "../../assets/images/Filter.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { setIsOpenDrawer } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {}; 

  return (
    <div className="header">
      <div>
        <h1>Snaps</h1>
      </div>

      <div>
        {data?.isClickCard && setIsOpenDrawer ? ( 
          <button type="button" onClick={() => setIsOpenDrawer(true)}>
            Filters <span><img src={filter} alt="Filter icon" /></span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
