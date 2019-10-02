import React from 'react';
import ReactDOM from 'react-dom'; 
import User from './components/User';
import UniqueId from 'react-html-id';
 

class App extends React.Component {

    constructor(){
      super();
      UniqueId.enableUniqueIds(this);
     this.state= {
        users: [
          {id:this.nextUniqueId(), name:'nani',age:28},
          {id:this.nextUniqueId(), name:'Ravi',age:58},
          {id:this.nextUniqueId(), name:'Suri',age:18}  
        ]
      }
      console.log(this.state);
    }  

deleteUser = (index , e)=>{
  const users = Object.assign([], this.state.users);
  users.splice(index,1);
  this.setState({users:users});
}
 changeUserName = (id, e) =>{
   const index = this.state.users.findIndex((user)=>{
     return user.id === id
   });

   const user = Object.assign({}, this.state.users[index]);

   user.name = e.target.value;

   const users = Object.assign([], this.state.users);

   users[index] = user;

   this.setState({users:users});

 }

  render()  {
    return(
      <div>
        <ul>
          {
            this.state.users.map((user , index)=>{
              return(<User 
                age={user.age}
                delEvent={this.deleteUser.bind(this,index)}
                changeEvent={this.changeUserName.bind(this,user.id)}
                > {user.name}  </User>)
            }) 
          }
        </ul>
      </div>
    );
  }

}
export default App;