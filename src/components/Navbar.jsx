import { Link, NavLink,useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  function nlStyle({isActive}){
    return({
        textDecoration: isActive ?  'underline':'none',
        color: isActive ?  '#CD5888':'#243763',
        fontWeight: "large" 
    })
  }
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <NavLink to={"/"} className="navbar-brand" ><b>TextUtils</b></NavLink>
        

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <span><li className="nav-item navbar-brand">
              <NavLink to={"/users"} style={nlStyle}>Users</NavLink>

            </li></span>
            <span>
            <li className="nav-item navbar-brand" >
              <NavLink to={"/Products"} style={nlStyle}>Products</NavLink>
            </li>
            </span>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to={"/"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={nlStyle} 
              >
                Cart
              </NavLink>

              <ul className="dropdown-menu">
                <li className="nav-item navbar-brand">
                  <Link to={"/"}>Header</Link>

                </li>

                <li className="nav-item navbar-brand">
                  <Link to={"/Products"}>Products2</Link>

                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="nav-item navbar-brand">
                <Link to={"/users"}>Users2</Link>  

                </li>
              </ul>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" onClick={()=>navigate(-1)}>
              Back
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;