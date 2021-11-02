//define some sample data
var tabledata = [
    {Property: "ProgramIndicator", Header: "", Type: "number", Search: false, Print: true, HozAlign: "center", Width:"40"},
    {Property: "BeamSawIndicator", Header: "", Type: "number", Search: false, Print: true, HozAlign: "center", Width:"40"},
    {Property: "SWPanelIDEx", Header: "#", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"50"},
    {Property: "Name", Header: "Part Name", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"auto"},
    // {Property: "EBString", Header: "Edging", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"200"},
    // {Property: "EBStringOrder", Header: "Edging by Order", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"200"},
    {Property: "Description", Header: "Description", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"250"},
    {Property: "Length", Header: "Length", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
    {Property: "Width", Header: "Width", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
    {Property: "Thickness", Header: "Thickness", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
    {Property: "Quantity", Header: "Qty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"100"},
    // {Property: "NestingQty", Header: "Nesting Qty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"180"},
    // {Property: "DesignQty", Header: "DesignQty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"180"},
    {Property: "Grain", Header: "Grain", Type: "tickCross", Search: false, Print: true, HozAlign: "center", Width:"90"},
    {Property: "Material", Header: "Material", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"250"},

]



function CreateTable(){

    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#example-table", {
        height: 500, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        // data: tabledata, //assign data to table
        data: PanelColumns, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        movableRows:true,
        movableColumns: false,
        selectable:true, //make rows selectable
        columns:[ //Define Table Columns
            {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
            {title:"Property", field:"Property", width:150, hozAlign:"center", editor: true, validator:"string"},
            {title:"Column Header", field:"Header", hozAlign:"center", editor: true},
            {title:"PropertyType", field:"PropertyType", hozAlign:"center", editor:"select", editorParams:{values:{"SW Custom Property":"SW Custom Property", "Swood Material Property":"Swood Material Property", "Swood Property":"Swood Property"}}},
            {title:"Type", field:"Type", hozAlign:"center", editor:"select", editorParams:{values:{"alphanum":"alphanum", "number":"number", "tickCross":"tickCross"}}},
            {title:"Search", field:"Search", hozAlign:"center", formatter:"tickCross", editor: true},
            {title:"Print", field:"Print", hozAlign:"center", formatter:"tickCross", editor: true},
            {title:"Column Width", field:"Width", hozAlign:"center", editor: true},// validator: ["in:auto", "numeric"]},
            {title:"HozAlign", field:"HozAlign", sorter:"date", hozAlign:"center", editor:"select", editorParams:{values:{"center":"Center", "left":"Left", "right":"Right"}}},
        ],


        rowClick:function(e, row){ //trigger an alert message when the row is clicked
            alert("Row " + row.getData().id + " Clicked!!!!");
        },
    
    });

    //listen for row move
    table.on("rowMoved", function(row){
        console.log("Row: " + row.getData().name + " has been moved");
    });
    
    
    //Save Settings
    document.getElementById("SaveSettings").addEventListener("click", function(){
        // Obtain new data from table
        var NewTableData = table.getData();     
        
        document.getElementById('SaveSettings').onclick = function() {
            ipcRenderer.send('app:display-image', NewTableData);
            console.log( '[message sent]', 'app:display-image' );
        }
    });

    //Add row on "Add Row" button click
    document.getElementById("add-row").addEventListener("click", function(){
        table.addRow({});
    });

    //Delete row on "Delete Row" button click
    document.getElementById("del-row").addEventListener("click", function(){
        var selectedRows = table.getSelectedRows();
        // table.deleteRow(1);
        var selectedRows = table.getSelectedRows();
        for (let i in selectedRows){
            selectedRows[i].delete()
        }
    });

    //Clear table on "Empty the table" button click
    document.getElementById("clear").addEventListener("click", function(){
        table.clearData()
    });

    //Reset table contents on "Reset the table" button click
    document.getElementById("reset").addEventListener("click", function(){
        table.setData(tabledata);
    });

}

