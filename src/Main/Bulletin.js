import React from 'react';
import './css/Bulletin.css';
import NewPostInput from './NewPostInput';


function Bulletin() {
  return (
    <div className="bulletin col col-lg-10">
    <NewPostInput />
    </div>
  );
}

export default Bulletin;