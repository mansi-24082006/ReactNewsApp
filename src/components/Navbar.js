import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: "100%", height: "auto"}}>
    <div className="container-fluid">
       {/* <a className="navbar-brand" href="/">NewsApp</a> */}
       <Link className="navbar-brand" to="/">NewsApp</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
          <a className="nav-link" aria-current="page" to="/">Home</a>
       </li>
        {/* <li className="nav-item"><a className="nav-link" href="/about">About</a></li>   */}
        {/* <li className="nav-item"><a className="nav-link" href="/busssiness">Bussiness</a></li>  
        <li className="nav-item"><a className="nav-link" href="/entertaintment">Entertainment</a></li>  
        <li className="nav-item"><a className="nav-link" href="/general">General</a></li> 
        <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>  
        <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>  
        <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>  
        <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>   */}
        <li className="nav-item"><Link className="nav-link" to="/busssiness">Bussiness</Link></li>  
        <li className="nav-item"><Link className="nav-link" to="/entertaintment">Entertainment</Link></li>  
        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> 
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>  
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>  
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>  
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>  
       </ul>
    </div>
    </div>
    </nav> 
</div>
    )
  }
}

export default Navbar
