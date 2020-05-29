import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/authHooks';
import LogInSignUp from './LogInSignUp';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import logo from '../../assets/mainLogo.png';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './Header.css';
import Search from '../Search/Search';
import { 
  RiShoppingCartLine, 
  RiHomeLine, 
  RiUserLine, 
  RiLogoutBoxRLine, 
  RiMapPinLine,
  RiQuestionLine } from 'react-icons/ri';

const Header = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const match = useRouteMatch('/portland/:area');
  const area = match?.params.area ?? 'all';
  
  const handleLogOut = () => {
    dispatch(logout());
    return toast('👋 Thanks for stopping by!');
  };
  
  return (
    <div className={styles.Header}>
      
      <div>
        <img 
          src={logo} 
          alt="Crowd Pleaser Logo" 
          className={styles.logo} 
          style={{ height: '100px' }}
        >
        </img>
      </div>

      <div className={styles.NavLinks}>
        <div className={styles.Search}>
          <Search type={area}/>
        </div>

        <div className={styles.Icons}>
          <Link to="/"><RiHomeLine />  </Link>
          <Link to="/portland"><RiMapPinLine/>  </Link>
          { user && <Link to={`/user/${user._id}`}><RiUserLine />  </Link>}
          { user && <Link to="/checkout"><RiShoppingCartLine />  </Link>}
          { user &&  <Link to="/"><RiLogoutBoxRLine onClick={handleLogOut}/>  </Link>}
          &nbsp;&nbsp;
          <Link to="/about"><RiQuestionLine className={styles.Info}/>  </Link>
          { !user && <LogInSignUp />}
        </div>
      </div>

    </div>
  );
};

export default Header;
