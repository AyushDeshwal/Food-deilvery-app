import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            count:1, 
            user : {
                name: "dummy",
                location : "dummy",
                contact: "gmail.com",
                avatar_url: "dummy", 
            }
        }
        
    }
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/AyushDeshwal")
   
    const json = await data.json();
    console.log(json);  


    this.setState({
        user: json, 
    })
}
  
render(){
  
    const {count} = this.state; 
    const {name, location, avatar_url   }= this.state.user; 

    return (
        <div className="user-card">
            <h5>Class-Based</h5>
             <h3>Count : {count} </h3>
            <button onClick={()=>{ 
                 this.setState ({
                    count: this.state.count + 1,
                })
            }}> Count++ </button>
            <img src={avatar_url}></img>
            <h3>Name: {name}  </h3>
            <h3>Location: {location} </h3>
            <h4>Contact: </h4>
        </div>
    )
}
}
        
export default UserClass; 