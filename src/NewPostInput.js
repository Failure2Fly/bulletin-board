import React from 'react';
import './NewPostInput.css';

function NewPost() {
  return (
<div className="inputBoarder">
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
  <div class="col"></div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Include Picture?</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
        <div class="form-group">
        <h5>How should someone get in contact with you?</h5>
            <textarea class="form-control" rows="3"></textarea>
        </div>
      <h5>How should someone get in contact with you?</h5>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="emailAddress"></input>
  </div>
</form>     
</div>

   
    
        
    
  );
}



export default NewPost;