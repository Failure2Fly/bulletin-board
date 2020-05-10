import React from 'react';
import './css/ShiftCoverage.css';

  
  class ShiftCoverage extends React.Component {
  
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
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" ></input>
                </div>
              <div className="col"></div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Pet Picture</label>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                    <div className="form-group">
                    <h5>{this.state.PostDescription}</h5>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                  <h5>Contact Info:</h5>
              </div>
              <div className="form-group">
                <h5>{this.state.PostEmail}</h5>
                <input type="email" className="form-control" id="emailAddress" placeholder="Email"></input>
                <h5>{this.state.PostPhoneNumber}</h5>
                <input type="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number"></input>
              </div>
            </form>
            <button>
              ShiftCoverage  
            </button>     
            </div>
      );
    }
  }

 export default ShiftCoverage;
