import React from 'react';
import './css/SellingWanted.css';

  
  class SellingWanted extends React.Component {
  
    constructor(props){
      super(props)

      this.state = {
        PostDescription: 'Description',
        PostEmail: 'Email',
        PostPhoneNumber: 'Phone Number',
        PostName: 'Name'

      }

  }

  
  render() {
    return (
      <div className="inputBoarder">
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1"></label>
          <h5>Pet Picture</h5>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
        <div className="form-group">
          <h5>{this.state.PostDescription}</h5>
            <textarea className="form-control" rows="3">
            </textarea>
        </div>
        <div className="form-group">
          <h5>{this.state.PostEmail}</h5>
          <input type="email" className="form-control" id="emailAddress" placeholder="Email"></input>
        </div>
        <div className="form-group">
        <h5>{this.state.PostPhoneNumber}</h5>
          <input type="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number"></input>
        </div>
      </form>
      <button>
        LostPet  
      </button>     
      </div>
    );
  }
  }

 export default SellingWanted;
