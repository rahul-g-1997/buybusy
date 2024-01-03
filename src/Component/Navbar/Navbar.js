// custom context hook
import { useAuthValue } from "../../authContext";

// css styles
import styles from "../../styles/navbar.module.css";

// import form react router
import { Outlet, NavLink } from "react-router-dom";

//import png
import logo from "../../Assets/logo.png";

// Navbar Component
export default function Navbar() {
  // user's login status
  const { isLoggedIn, signOut } = useAuthValue();

  return (
    <>
      {/* main container */}
      <nav className={styles.navbar}>
        {/* app heading */}
        <div className={styles.logo}>
          {/* logo of the app */}
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink to="/">
            <h1>
              <strong className={styles.name}>BuyBusy</strong>
            </h1>
          </NavLink>
        </div>

        {/* all the navigation link */}
        <ul className={styles.navList}>
          {/* homepage link */}
          <li>
            <NavLink to="/">
              <span className={styles.navItem}>
                {/* home logo */}
                <i class="fa-solid fa-house"></i>
                _Home
              </span>
            </NavLink>
          </li>

          {/* myorder link */}
          {/* show when user is logged in */}
          <li>
            {isLoggedIn && (
              <NavLink to="/myorder">
                <span className={styles.navItem}>
                  {/* my order logo */}
                  <i class="fa-solid fa-bag-shopping"></i>
                  _My Order
                </span>
              </NavLink>
            )}
          </li>

          {/* cart link */}
          {/* show when user is logged in */}
          <li>
            {isLoggedIn && (
              <NavLink to="/cart">
                <span className={styles.navItem}>
                  {/* cart icon */}
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                  _Cart
                </span>
              </NavLink>
            )}
          </li>

          {/* for signIN and signOut */}
          <li>
            <NavLink to={!isLoggedIn ? "/signin" : "/"}>
              <span className={styles.navItem}>
                {!isLoggedIn ? (
                  <>
                    {/* sign in icon */}
                    <i class="fa-solid fa-right-to-bracket"></i>
                    _SignIn
                  </>
                ) : (
                  <>
                    {/* sign out icon */}
                    <i class="fa-solid fa-right-from-bracket"></i>
                    {/* sign out user  */}
                    <span onClick={signOut}>_SignOut</span>
                  </>
                )}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* render child pages */}
      <Outlet />
    </>
  );
}
