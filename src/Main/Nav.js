import React, { Component} from 'react';
import Bulletin from './Bulletin';
import LostPet from '../Posts/LostPet';
import Lessons from '../Posts/Lessons';
import CarPool from '../Posts/CarPool';
import Party from '../Posts/Party';
import SellingWanted from '../Posts/SellingWanted';
import Volunteers from '../Posts/Volunteers';
import JobPosting from '../Posts/JobPosting';
import ShiftCoverage from '../Posts/ShiftCoverage';
import LookingForFriends from '../Posts/LookingForFriends';
import PlayGames from '../Posts/PlayGames';
import './css/Nav.css';
import '../Posts/css/LostPet.css';
import '../Posts/css/Lessons.css';
import '../NewPostInput.css';




class Nav extends Component{

    state = {
        lostPetHidden: "LostPet-Off", 
        lessonsHidden: "Lessons-Off",
        carPoolHidden: "CarPool-Off", 
        jobPostingHidden: "JobPosting-Off",
        shiftCoverageHidden: "ShiftCoverage-Off", 
        sellingWantedHidden: "SellingWanted-Off",
        volunteersHidden: "Volunteers-Off", 
        partyHidden: "Party-Off",
        lookingForFriendsHidden: "LookingForFriends-Off", 
        playGamesHidden: "PlayGames-Off",
        LostPet: false, 
        Lessons: false,
        CarPool: false,
        JobPosting: false,
        ShiftCoverage: false,
        SellingWanted: false,
        Volunteers: false,
        Party: false,
        LookingForFriends: false,
        PlayGames: false,
        PostDescription: "Description:",
        PostPhone: "Phone Number:",
        PostName: "Name:",
        PostEmail: "Email:"
   }

    showModal = (type) => {
        if(type === 'LostPet'){
        this.setState({lostPetHidden: "LostPet-On", LostPet: true});
        }
        if(type === 'Lessons'){
        this.setState({lessonsHidden: "Lessons-On", Lessons: true});
        }
        if(type === 'CarPool'){
        this.setState({carPoolHidden: "CarPool-On", CarPool: true});
        }
        if(type === 'JobPosting'){
        this.setState({jobPostingHidden: "JobPosting-On", JobPosting: true});
        }
        if(type === 'ShiftCoverage'){
        this.setState({shiftCoverageHidden: "ShiftCoverage-On", ShiftCoverage: true});
        }
        if(type === 'SellingWanted'){
        this.setState({sellingWantedHidden: "SellingWanted-On", SellingWanted: true});
        }
        if(type === 'Volunteers'){
        this.setState({volunteersHidden: "Volunteers-On", Volunteers: true});
        }
        if(type === 'Party'){
        this.setState({partyHidden: "Party-On", Party: true});
        }
        if(type === 'LookingForFriends'){
        this.setState({lookingForFriendsHidden: "LookingForFriends-On", LookingForFriends: true});
        }
        if(type === 'PlayGames'){
        this.setState({playGamesHidden: "PlayGames-On", PlayGames: true});
        }
        console.log(this.state.lostPet)
        console.log(this.state.lessons)
    }
    
    hideModal = () =>{
        if(this.state.LostPet === true){
        this.setState({lostPetHidden: "LostPet-Off", LostPet: false});
        }
        if(this.state.Lessons === true){
        this.setState({lessonsHidden: "Lessons-Off", Lessons: false});
        }
        if(this.state.CarPool === true){
        this.setState({carPoolHidden: "CarPool-Off", CarPool: false});
        }
        if(this.state.JobPosting === true){
        this.setState({jobPostingHidden: "JobPosting-Off", JobPosting: false});
        }
        if(this.state.ShiftCoverage === true){
        this.setState({shiftCoverageHidden: "ShiftCoverage-Off", ShiftCoverage: false});
        }
        if(this.state.SellingWanted === true){
        this.setState({sellingWantedHidden: "SellingWanted-Off", SellingWanted: false});
        }
        if(this.state.Volunteers === true){
        this.setState({volunteersHidden: "Volunteers-Off", Volunteers: false});
        }
        if(this.state.Party === true){
        this.setState({partyHidden: "Party-Off", Party: false});
        }
        if(this.state.LookingForFriends === true){
        this.setState({lookingForFriendsHidden: "LookingForFriends-Off", LookingForFriends: false});
        }
        if(this.state.PlayGames === true){
        this.setState({playGamesHidden: "PlayGames-Off", PlayGames: false});
        }
        console.log(this.state.lostPet)
        console.log(this.state.lessons)
    }
    
    
render(){
    
  return (
    <div className="Container">
        <div className="row justify-content-center">
            <div className="col nav-full col-lg-2 ">
                <div className="row nav-header">
                    <div className="col nav-header">
 
                    </div>
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 bulletin-lost-cat"> 
                            <button onClick={()=>this.showModal('LostPet')}>                      
                                <h5>Lost Pet</h5>
                            </button>   
                        </div>
                        <div className="col-12 col-md-1">
                        
                        </div>
                        <div className="col-12 col-md-5 bulletin-lost-cat">
                        <button onClick={()=>this.showModal('Lessons')}>                      
                                <h5>Lessons</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 bulletin-lost-cat"> 
                            <button onClick={()=>this.showModal('CarPool')}>                      
                                <h5>Car Pool</h5>
                            </button>   
                        </div>
                        <div className="col-12 col-md-1">
                        
                        </div>
                        <div className="col-12 col-md-5 bulletin-lost-cat">
                        <button onClick={()=>this.showModal('JobPosting')}>                      
                                <h5>Job Posting</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 bulletin-lost-cat"> 
                            <button onClick={()=>this.showModal('ShiftCoverage')}>                      
                                <h5>Shift Coverage</h5>
                            </button>   
                        </div>
                        <div className="col-12 col-md-1">
                        
                        </div>
                        <div className="col-12 col-md-5 bulletin-lost-cat">
                        <button onClick={()=>this.showModal('SellingWanted')}>                      
                                <h5>Selling/
                                    Wanted</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 bulletin-lost-cat"> 
                            <button onClick={()=>this.showModal('Volunteers')}>                      
                                <h5>Volunteers</h5>
                            </button>   
                        </div>
                        <div className="col-12 col-md-1">
                        
                        </div>
                        <div className="col-12 col-md-5 bulletin-lost-cat">
                        <button onClick={()=>this.showModal('Party')}>                      
                                <h5>Party</h5>
                            </button> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 bulletin-lost-cat"> 
                            <button onClick={()=>this.showModal('LookingForFriends')}>                      
                                <h5>Looking For Friends</h5>
                            </button>   
                        </div>
                        <div className="col-12 col-md-1">
                        
                        </div>
                        <div className="col-12 col-md-5 bulletin-lost-cat">
                        <button onClick={()=>this.showModal('PlayGames')}>                      
                                <h5>Play games</h5>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
            <Bulletin/>
            <div className={this.state.lostPetHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <LostPet />                
            </div>
            <div className={this.state.lessonsHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <Lessons />                
            </div>
            <div className={this.state.carPoolHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <CarPool />                
            </div>
            <div className={this.state.jobPostingHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <JobPosting />                
            </div>
            <div className={this.state.shiftCoverageHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <ShiftCoverage />                
            </div>
            <div className={this.state.sellingWantedHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <SellingWanted />                
            </div>
            <div className={this.state.volunteersHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <Volunteers />                
            </div>
            <div className={this.state.partyHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <Party />                
            </div>
            <div className={this.state.lookingForFriendsHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <LookingForFriends />                
            </div>
            <div className={this.state.playGamesHidden}>
                <button onClick={this.hideModal}>
                    X
                </button>
                <PlayGames />                
            </div>
        </div>     
    </div>
    );
    }
};





export default Nav;
