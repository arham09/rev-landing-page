import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>We Share,< br/> We Remember</h1>
            <div>
              <div><a className="contact" href="https://drive.google.com/open?id=18v6YqmswT5o7Zv3UNFE3eiV5rUx5fhGd">Contribute to Our Shared Album</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
