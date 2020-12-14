import './App.css';
import React,{Component} from 'react';
import Addtask from './Tasks/Tasks';



class App extends Component{
  state={
    inputarray:[],
     inputtext:'',
     showinput:true,
     inputindex:'',
     editcheck:false
  }
  
  addtasksHandler=()=>{

    if(this.state.editcheck){

      let name=this.state.inputtext;
      let index=this.state.inputindex;
      let copyinputarray=[
        ...this.state.inputarray,
      ]
      let obj=copyinputarray[index]
      obj=name;
      copyinputarray[index]=obj;
      this.setState({inputarray:copyinputarray,editcheck:false})
      
     
    }
    else{

      if(this.state.inputtext!=null){
      let names=this.state.inputtext;
      let copyinputarray=[
        ...this.state.inputarray,
      ]
      let len=copyinputarray.length;
      copyinputarray[len]=names;
      this.setState({inputarray:copyinputarray})
    }
    }
    
    
  }


  editfunction=(index)=>{

    let copyinputarray=[
      ...this.state.inputarray,
    ]
    console.log('index'+index);
    let name=copyinputarray[index];
    this.setState({inputtext:name,editcheck:true,inputindex:index});
    
  }

  deletefunction=(index)=>{

    let copyinputarray=[
      ...this.state.inputarray,
    ];
    copyinputarray.splice(index,1);
    this.setState({
      inputtext:'',
      inputarray:copyinputarray
    })
  }

  add=(event)=>{
    
    this.setState({inputtext:event.target.value})
     
  }
  render(){
    let tasks=null;
    if(this.state.showinput){
      tasks=(
      <div>
        {
        this.state.inputarray.map((ch,index)=>{
          return <Addtask
          editclick={()=>this.editfunction(index)}
          deleteclick={()=>this.deletefunction(index)}
          value={ch}
          key={index}/>
        })}
          </div>
      );
}
    return (
    
      <div className="App">
        
        <h2>Add New Tasks Here: </h2>
       
        <input type="text"  onChange={this.add} value={this.state.inputtext}/>   
        <button  onClick={this.addtasksHandler}>Submit</button> 
        
        <br></br><br></br> 
        {tasks}    
      </div>
    );
  }
}


export default App;
