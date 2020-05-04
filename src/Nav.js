import React, { useState } from 'react';
import Bulletin from './Bulletin';
import Modal from 'react-modal';
import './Nav.css';
import './Modal.css';





function Nav(){

    const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="Container">
        <div className="row">
            <div className="col nav-full col-lg-2 ">
                <div className="row nav-header">
                    <div className="col nav-header">

                    </div>
                </div>
                <div className="row ">
                    <button onClick={() => setModalIsOpen(true)}>
                    <div className="col-12 col-md-5  bulletin-lost-cat">                       
                        <h3>Lost Pet</h3>   
                    </div>
                    </button>
                    <div className="col-12 col-md-1 col-sm-12">

                    </div>
                    <div className="col-12 col-md-5 col-sm-12 bulletin-lost-cat">

                    </div>
                </div>
            </div>
            <Bulletin/>
            <Modal isOpen={modalIsOpen}>
                <div className="Container Modal-cont">
                    <div className="row Modal-row">

                        <div className="col Modal">
                            <h1>HELLO</h1>
                        </div>
                        <button onClick={()=> setModalIsOpen(false)}>
                        <div className="col Modal">
                            <h1>HELLO</h1>
                        </div>
                        </button>
                    </div>    
                </div>
            </Modal>
        </div>     
    </div>

  );
}


export default Nav;
