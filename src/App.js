import './App.css';
import React,{Component} from 'react';
import Addtask from './Tasks/Tasks';



class App extends Component{
  state={
     inputarray:[],
     inputtext:'',
     showinput:true,
     inputindex:'',
     editcheck:false,
     checkarray:[]
  }
  
  addtasksHandler=()=>{

    if(this.state.editcheck){

      if(this.state.inputtext===''){
        alert('Pl enter the tasks!!');
      }

      else if(this.state.checkarray.includes(this.state.inputindex)){
        alert('u cannot edit tasks');
      }

      else{
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
    }

    else{
    
      if(this.state.inputtext!==''){
        let names=this.state.inputtext;
        let copyinputarray=[
         ...this.state.inputarray,
        ]
        let len=copyinputarray.length;
        copyinputarray[len]=names;
        this.setState({inputarray:copyinputarray})
       }

      else if(this.state.checkarray.includes(this.state.inputindex)){

      alert('u cannot edit tasks');
       }

      else{
      alert('Pl enter the Tasks');
      }
    }
 }

  checkboxfunction=(index)=>{
      
      let copyinputarray=[
       ...this.state.inputarray,
      ]
      let name=copyinputarray[index];
      let strike_name=this.strikeThrough(name);
      copyinputarray[index]=strike_name;
  
      let copycheckarray=[ 
        ...this.state.checkarray, 
      ] 
      let len=copycheckarray.length; 
      copycheckarray[len]=index; 
      this.setState({inputarray:copyinputarray,checkarray:copycheckarray})
    
    

  }

   strikeThrough(text) {
    return text
      .split('')
      .map(char => char + '\u0336')
      .join('')
  }

  editfunction=(index)=>{

    if(this.state.checkarray.includes(index)){
      alert('u cannot edit tasks');
    }else{
    let copyinputarray=[
      ...this.state.inputarray,
    ]
    
    let name=copyinputarray[index];
    this.setState({inputtext:name,editcheck:true,inputindex:index});
  }
  }

  deletefunction=(index)=>{

    let copyinputarray=[
      ...this.state.inputarray,
    ];
    if(this.state.checkarray.includes(index)){
      alert('u cannot delete tasks');
    }else{
    copyinputarray.splice(index,1);}
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
          checkboxclick={()=>this.checkboxfunction(index)}
          value={ch}
          key={index}/>
        })}
          </div>
      );
}
    return (
    
      <div className="App">
        
        <h2>Add Tasks Here: </h2>
       
        <input type="text"  onChange={this.add} value={this.state.inputtext}/>   
        <button  onClick={this.addtasksHandler}>Submit</button> 
        
        <br></br><br></br> 
        {tasks}    
      </div>
    );
  }
}


export default App;
