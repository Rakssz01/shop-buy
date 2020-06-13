import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux'
import CartDropdown from '../cart_Dropdown/CartDropdown';
import CartIcon from '../cart_Icon/CartIcon';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelectors';


const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden? null: <CartDropdown />}
   
  </div>
    )
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
