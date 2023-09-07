import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import tableData from "../../constants/table-data.json";
import { tableHeaderNames } from "../../utils/table";
import useWindowDimensions from "../../utils/window";
import { TableImage } from "./table-image";


import React, { useState } from "react";
import "../../App.js";
import "../../App.css";



class Table extends React.Component{

  constructor(props) {

    super(props);
    this.state ={
        coulumnDefs : tableData[0],
        rowData: tableData,
        selectedValue: this.props.selectedValue
        
    }
}

componentWillReceiveProps(nextProps){
    if(this.state.selectedValue !== nextProps.selectedValue){
        this.setState({
            selectedValue:nextProps.selectedValue
        })
    }
}

    
  
  render() {
        const {selectedValue} = this.state;
    return (

      <div className="ag-theme-alpine-dark" style={{ height: '500px', width: '100%', clear: 'both'}}>

<AgGridReact
        animateRows
        pagination={true}
        rowData={this.state.rowData}
        paginationPageSize={50}
        quickFilterText ={selectedValue}
        frameworkComponents={{
          imageCellRenderer: TableImage,
        }}
        rowHeight={80}
         >
        {Object.keys(this.state.coulumnDefs).map(
          (cellField) =>
            cellField !== "id" && (
              <AgGridColumn
                key={cellField}
                minWidth={240}
                resizable={true}
                field={cellField}
                filter
                sortable
                editable
                headerName={tableHeaderNames[cellField]}
                cellRenderer={cellField === "imageurl" && "imageCellRenderer"}
                cellRendererParams={{ cell:cellField }}
              ></AgGridColumn>
            )
        )}
      </AgGridReact>
      </div>

    )

  }
}
export default Table

