import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import React, { useState, Component} from "react";
import "./App.css";
import Table from "./components/table/index";
import './components/autocom/style.css'
import 'font-awesome/css/font-awesome.min.css';
import AutoCom from "./components/autocom/AutoCom";
import tableData from "./constants/table-data.json";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      selectedValue:"",
      
    }
    
}

selectedValueHandler = (selectedValue) => {
  this.setState({
    selectedValue
  })
}


  render(){
    const {selectedValue} = this.state;
   return (
    <div className="container">
      <header>
        <div className="App-header">
          <h4 className="alignLeft">Inventory List</h4>
          <div className="alignRight">
            <AutoCom selectedValueHandler ={this.selectedValueHandler} suggestions={tableData.map(data =>data.name)}/>
   </div>
          <div className="clearfloat"></div>
          </div>
        
      </header>
       <Table selectedValue={selectedValue}/>    
    </div>
  )
}
}

export default App;
