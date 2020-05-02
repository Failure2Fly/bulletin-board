import React from 'react';
import './Nav.css';
import Bulletin from './Bulletin';




function Nav() {
  return (
    <div className="Container">
        <div className="row">
            <div className="col nav-full col-lg-2">
                <div className="row nav-header">
                    <div className="col nav-header">

                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-5 bulletin-lost-cat">
                        <h3>Lost Pet</h3>
                    </div>
                    <div className="col col-md-1">

                    </div>
                    <div className="col col-md-5 bulletin-lost-cat">

                    </div>
                </div>
            </div>
            <Bulletin/>
        </div>     
    </div>
  );
}

export default Nav;
