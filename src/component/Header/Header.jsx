import "./Header.scss"
import filter from "../../assets/images/Filter.svg";
import arrow from "../../assets/images/Arrow.svg";
import { useLocation ,useNavigate} from "react-router-dom";

const Header = (props) => {

  const {setIsOpenDrawer} = props;

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <div  className='header'>
        <div>
          <h1>Snaps</h1>
        </div>

<div>  
        {data?.isClickCard ? (
          <div type="button" onClick={() => navigate("/")} className="cardetail-home-button">
            <span>
              <img src={arrow} alt="" />
            </span>
             Home
          </div>
        ) : (
          <button type='button' onClick={()=> setIsOpenDrawer(true)} >Filters<span><img src={filter} alt="" color='white'/></span></button>
       
        )}
         </div> 
       </div>
  )
}

export default Header;
