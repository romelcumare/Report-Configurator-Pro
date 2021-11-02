
var fs = require('fs');

// const app = window.require('electron').remote
// const fs = app.require('fs')

// const fs = require('fs');
// const path = require('path');

// fs.writeFile('mynewfile3.js', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    
    // fs.readFile('ReportSettings.js', function(err, data){
    //     console.log(data);
    // })
    
    
    // WriteReportSettingsFromFile()
    // WriteDBFile()
    WriteCFGFile()
    
    function AddVariableDB(Placeholder, variable, DBString){
    
        // DataBaseString = "Add"
        var Trigger = Placeholder
        var Position = DBString.indexOf(Trigger)
    
        if (Position == -1){
            return DBString
        }else{
            var VariableString = `\n`
            VariableString += `        [[${variable}\n`
            VariableString += `            TYPE=S\n`
            VariableString += `            EVALUATION=<SWCP.${variable}>\n`
            VariableString += `        ]]`
               
            return [DBString.slice(0, Position + Trigger.length), VariableString, DBString.slice(Position + Trigger.length)].join('')
        }
    
    }
    
    function WriteCFGFile(){
    
        fs.readFile('Report.cfg', 'utf8' , (err,JSData) => {
            if (err) {
                console.log ('Error Ocurred')
                console.log (err)
            } else {
                try {
                    // Read Data from JS file 
                    // eval(JSData)
    
                    var DataBaseString = JSData
    
                    DataBaseString = AddVariableDB("// Project Placeholders", "Hello", DataBaseString)
                    DataBaseString = AddVariableDB("// Project Placeholders", "Test2", DataBaseString)
                    DataBaseString = AddVariableDB("// Project Placeholders", "Test3", DataBaseString)
    
                    
                    fs.writeFile('ReportCFGNew.cfg', DataBaseString, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    })  
    
                } catch (err) {
                    console.log ('Error parsing JSON', err)
                }
            }
    
        })
    }
    
    function WriteDBFile(){
    
        fs.readFile('DataBase.js', 'utf8' , (err,JSData) => {
            if (err) {
                console.log ('Error Ocurred')
                console.log (err)
            } else {
                try {
                    // Read Data from JS file 
                    // eval(JSData)
    
                    var DataBaseString = JSData
    
                    DataBaseString = AddVariableDB("//Project Placeholders", "Test", DataBaseString)
                    DataBaseString = AddVariableDB("//Project Placeholders", "Test2", DataBaseString)
                    DataBaseString = AddVariableDB("//Project Placeholders", "Test3", DataBaseString)
    
                    
                    fs.writeFile('DataBaseNew.js', DataBaseString, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    })  
    
                } catch (err) {
                    console.log ('Error parsing JSON', err)
                }
            }
    
        })
    }
    
    function WriteReportSettings(){
    
        try {
            // Read Data from JS file 
            // eval(JSData)

            var ReportSettingsString = ""

            ReportSettingsString += AddTitle("REPORT HEADER")
            ReportSettingsString += FormatJS(ReportHeader, "ReportHeader")
            ReportSettingsString += AddTitle("PANELS PAGE")
            ReportSettingsString += AddVariable(UseTopLevelProperties, "UseTopLevelProperties")
            ReportSettingsString += AddVariable(GenerateIDs, "GenerateIDs")
            ReportSettingsString += AddVariable(LongestEdge, "LongestEdge")
            ReportSettingsString += AddVariable(NoParentTitle, "NoParentTitle")
            ReportSettingsString += AddVariable(CombinedPanelName, "CombinedPanelName")
            ReportSettingsString += AddVariable(CombinedStockName, "CombinedStockName")
            ReportSettingsString += AddVariable(CombinedProfileName, "CombinedProfileName")
            ReportSettingsString += "\n"
            ReportSettingsString += FormatJS(PanelColumns, "PanelColumns")
            ReportSettingsString += FormatJS(SortByPanel, "SortByPanel")
            ReportSettingsString += AddTitle("STOCKS PAGE")
            ReportSettingsString += AddVariable(CombineStocks, "CombineStocks")
            ReportSettingsString += AddVariable(CombineBeamSaw, "CombineBeamSaw")
            ReportSettingsString += FormatJS(StockColumns, "StockColumns")
            ReportSettingsString += FormatJS(SortByStock, "SortByStock")
            ReportSettingsString += AddTitle("PROFILES PAGE")
            ReportSettingsString += AddVariable(CombineProfiles, "CombineProfiles")
            ReportSettingsString += FormatJS(ProfileColumns, "ProfileColumns")
            ReportSettingsString += FormatJS(SortByProfile, "SortByProfile")
            ReportSettingsString += AddTitle("PANEL DETAILS PAGE")
            ReportSettingsString += FormatJS(ShowPanelID, "ShowPanelID")
            ReportSettingsString += AddVariable(WriteStockProperties, "WriteStockProperties")
            ReportSettingsString += FormatJS(PanelDetailsColumns, "PanelDetailsColumns")
            ReportSettingsString += FormatJS(PanelDetailsStockColumns, "PanelDetailsStockColumns")
            ReportSettingsString += FormatJS(PanelDetailsExtraColumns, "PanelDetailsExtraColumns")
            ReportSettingsString += FormatJS(PanelListColumns, "PanelListColumns")
            ReportSettingsString += FormatJS(PanelLayersColumns, "PanelLayersColumns")
            ReportSettingsString += FormatJS(PanelLaminatesColumns, "PanelLaminatesColumns")
            ReportSettingsString += FormatJS(PanelEdgebandsColumns, "PanelEdgebandsColumns")
            ReportSettingsString += FormatJS(PanelProgramsColumns, "PanelProgramsColumns")
            ReportSettingsString += FormatJS(PanelProgramsColumns, "PanelProgramsColumns")
            ReportSettingsString += AddTitle("FRAMES PAGE")
            ReportSettingsString += FormatJS(FrameColumns, "FrameColumns")
            ReportSettingsString += FormatJS(SortByFrame, "SortByFrame")
            ReportSettingsString += AddTitle("FRAMES DETAILS PAGE")
            ReportSettingsString += FormatJS(FrameDetailsColumns, "FrameDetailsColumns")
            ReportSettingsString += FormatJS(FramePanelColumns, "FramePanelColumns")
            ReportSettingsString += AddVariable(SortByPanelFrame, "SortByPanelFrame")
            ReportSettingsString += FormatJS(FrameHardwareColumns, "FrameHardwareColumns")
            ReportSettingsString += FormatJS(FrameProgramColumns, "FrameProgramColumns")
            ReportSettingsString += AddTitle("PROGRAMS PAGE")
            ReportSettingsString += FormatJS(ShowPanelIDPrograms, "ShowPanelIDPrograms")
            ReportSettingsString += "\n"
            ReportSettingsString += "\n"
            ReportSettingsString += FormatJS(ProgramDetailsColumns, "ProgramDetailsColumns")
            ReportSettingsString += FormatJS(ProgramColumns, "ProgramColumns")

            ReportSettingsString += AddTitle("NESTED PANELS")
            ReportSettingsString += FormatJS(NestingPanelsColumns, "NestingPanelsColumns")
            ReportSettingsString += FormatJS(SortByNestingPanels, "SortByNestingPanels")
            
            ReportSettingsString += AddTitle("NESTED SHEETS")
            ReportSettingsString += AddVariable(GroupSheetPanels, "GroupSheetPanels")
            ReportSettingsString += AddVariable(ShowNestTools, "ShowNestTools")
            ReportSettingsString += FormatJS(NestedSheetColumns, "NestedSheetColumns")
            ReportSettingsString += FormatJS(NestedSheetPanelsColumns, "NestedSheetPanelsColumns")
            
            ReportSettingsString += AddTitle("HARDWARE PAGE")
            ReportSettingsString += AddVariable(NoParentTitleHardware, "NoParentTitleHardware")
            ReportSettingsString += AddVariable(NoTypeTitleHardware, "NoTypeTitleHardware")
            ReportSettingsString += FormatJS(HardwareColumns, "HardwareColumns")
            ReportSettingsString += FormatJS(SortByHardware, "SortByHardware")
            
            ReportSettingsString += AddTitle("SUMMARY PAGE")
            ReportSettingsString += AddVariable(ShowMachiningCosts, "ShowMachiningCosts")
            ReportSettingsString += AddVariable(GroupPanelMachiningCosts, "GroupPanelMachiningCosts")
            ReportSettingsString += AddVariable(GroupSheetMachiningCosts, "GroupSheetMachiningCosts")
            ReportSettingsString += AddVariable(ShowSummaryChart, "ShowSummaryChart")
            
            ReportSettingsString += AddVariable(TotalCellWidth, "TotalCellWidth")
            ReportSettingsString += AddVariable(QuantityCellWidth, "QuantityCellWidth")
            ReportSettingsString += AddVariable(UnitCostWidth, "UnitCostWidth")
            
            ReportSettingsString += FormatJS(SummaryColumns, "SummaryColumns")
            ReportSettingsString += FormatJS(SummaryProfileColumns, "SummaryProfileColumns")
            ReportSettingsString += FormatJS(SummaryPaintColumns, "SummaryPaintColumns")
            ReportSettingsString += FormatJS(SummarySortBy, "SummarySortBy")
            ReportSettingsString += FormatJS(SummaryHardwareColumns, "SummaryHardwareColumns")
            ReportSettingsString += FormatJS(SummaryHardwareSortBy, "SummaryHardwareSortBy")
            ReportSettingsString += FormatJS(SummaryLabourCostsColumns, "SummaryLabourCostsColumns")
            ReportSettingsString += FormatJS(SummaryMachiningCostsColumns, "SummaryMachiningCostsColumns")
            
            ReportSettingsString += AddTitle("LABELS PAGE")
            ReportSettingsString += FormatJS(ShowPanelIDLabel, "ShowPanelIDLabel")
            ReportSettingsString += "\n"
            ReportSettingsString += FormatJS(LabelData, "LabelData")
            ReportSettingsString += FormatJS(SortByLabel, "SortByLabel")
            
            ReportSettingsString += AddTitle("PRINT SETTINGS")
            ReportSettingsString += FormatJS(PrintList, "PrintList")
            
            fs.writeFile('ReportSettingsNew.js', ReportSettingsString, function (err) {
            if (err) throw err;
            console.log('Saved!');
            })  

        } catch (err) {
            console.log ('Error parsing JSON', err)
        }
    }

    function WriteReportSettingsFromFile(){
    
        fs.readFile('ReportSettings.js', 'utf8' , (err,JSData) => {
            if (err) {
                console.log ('Error Ocurred')
                console.log (err)
            } else {
                try {
                    // Read Data from JS file 
                    eval(JSData)
    
                    var ReportSettingsString = ""
    
                    ReportSettingsString += AddTitle("REPORT HEADER")
                    ReportSettingsString += FormatJS(ReportHeader, "ReportHeader")
                    ReportSettingsString += AddTitle("PANELS PAGE")
                    ReportSettingsString += AddVariable(UseTopLevelProperties, "UseTopLevelProperties")
                    ReportSettingsString += AddVariable(GenerateIDs, "GenerateIDs")
                    ReportSettingsString += AddVariable(LongestEdge, "LongestEdge")
                    ReportSettingsString += AddVariable(NoParentTitle, "NoParentTitle")
                    ReportSettingsString += AddVariable(CombinedPanelName, "CombinedPanelName")
                    ReportSettingsString += AddVariable(CombinedStockName, "CombinedStockName")
                    ReportSettingsString += AddVariable(CombinedProfileName, "CombinedProfileName")
                    ReportSettingsString += "\n"
                    ReportSettingsString += FormatJS(PanelColumns, "PanelColumns")
                    ReportSettingsString += FormatJS(SortByPanel, "SortByPanel")
                    ReportSettingsString += AddTitle("STOCKS PAGE")
                    ReportSettingsString += AddVariable(CombineStocks, "CombineStocks")
                    ReportSettingsString += AddVariable(CombineBeamSaw, "CombineBeamSaw")
                    ReportSettingsString += FormatJS(StockColumns, "StockColumns")
                    ReportSettingsString += FormatJS(SortByStock, "SortByStock")
                    ReportSettingsString += AddTitle("PROFILES PAGE")
                    ReportSettingsString += AddVariable(CombineProfiles, "CombineProfiles")
                    ReportSettingsString += FormatJS(ProfileColumns, "ProfileColumns")
                    ReportSettingsString += FormatJS(SortByProfile, "SortByProfile")
                    ReportSettingsString += AddTitle("PANEL DETAILS PAGE")
                    ReportSettingsString += FormatJS(ShowPanelID, "ShowPanelID")
                    ReportSettingsString += AddVariable(WriteStockProperties, "WriteStockProperties")
                    ReportSettingsString += FormatJS(PanelDetailsColumns, "PanelDetailsColumns")
                    ReportSettingsString += FormatJS(PanelDetailsStockColumns, "PanelDetailsStockColumns")
                    ReportSettingsString += FormatJS(PanelDetailsExtraColumns, "PanelDetailsExtraColumns")
                    ReportSettingsString += FormatJS(PanelListColumns, "PanelListColumns")
                    ReportSettingsString += FormatJS(PanelLayersColumns, "PanelLayersColumns")
                    ReportSettingsString += FormatJS(PanelLaminatesColumns, "PanelLaminatesColumns")
                    ReportSettingsString += FormatJS(PanelEdgebandsColumns, "PanelEdgebandsColumns")
                    ReportSettingsString += FormatJS(PanelProgramsColumns, "PanelProgramsColumns")
                    ReportSettingsString += FormatJS(PanelProgramsColumns, "PanelProgramsColumns")
                    ReportSettingsString += AddTitle("FRAMES PAGE")
                    ReportSettingsString += FormatJS(FrameColumns, "FrameColumns")
                    ReportSettingsString += FormatJS(SortByFrame, "SortByFrame")
                    ReportSettingsString += AddTitle("FRAMES DETAILS PAGE")
                    ReportSettingsString += FormatJS(FrameDetailsColumns, "FrameDetailsColumns")
                    ReportSettingsString += FormatJS(FramePanelColumns, "FramePanelColumns")
                    ReportSettingsString += AddVariable(SortByPanelFrame, "SortByPanelFrame")
                    ReportSettingsString += FormatJS(FrameHardwareColumns, "FrameHardwareColumns")
                    ReportSettingsString += FormatJS(FrameProgramColumns, "FrameProgramColumns")
                    ReportSettingsString += AddTitle("PROGRAMS PAGE")
                    ReportSettingsString += FormatJS(ShowPanelIDPrograms, "ShowPanelIDPrograms")
                    ReportSettingsString += "\n"
                    ReportSettingsString += "\n"
                    ReportSettingsString += FormatJS(ProgramDetailsColumns, "ProgramDetailsColumns")
                    ReportSettingsString += FormatJS(ProgramColumns, "ProgramColumns")
    
                    ReportSettingsString += AddTitle("NESTED PANELS")
                    ReportSettingsString += FormatJS(NestingPanelsColumns, "NestingPanelsColumns")
                    ReportSettingsString += FormatJS(SortByNestingPanels, "SortByNestingPanels")
                    
                    ReportSettingsString += AddTitle("NESTED SHEETS")
                    ReportSettingsString += AddVariable(GroupSheetPanels, "GroupSheetPanels")
                    ReportSettingsString += AddVariable(ShowNestTools, "ShowNestTools")
                    ReportSettingsString += FormatJS(NestedSheetColumns, "NestedSheetColumns")
                    ReportSettingsString += FormatJS(NestedSheetPanelsColumns, "NestedSheetPanelsColumns")
                    
                    ReportSettingsString += AddTitle("HARDWARE PAGE")
                    ReportSettingsString += AddVariable(NoParentTitleHardware, "NoParentTitleHardware")
                    ReportSettingsString += AddVariable(NoTypeTitleHardware, "NoTypeTitleHardware")
                    ReportSettingsString += FormatJS(HardwareColumns, "HardwareColumns")
                    ReportSettingsString += FormatJS(SortByHardware, "SortByHardware")
                    
                    ReportSettingsString += AddTitle("SUMMARY PAGE")
                    ReportSettingsString += AddVariable(ShowMachiningCosts, "ShowMachiningCosts")
                    ReportSettingsString += AddVariable(GroupPanelMachiningCosts, "GroupPanelMachiningCosts")
                    ReportSettingsString += AddVariable(GroupSheetMachiningCosts, "GroupSheetMachiningCosts")
                    ReportSettingsString += AddVariable(ShowSummaryChart, "ShowSummaryChart")
                    
                    ReportSettingsString += AddVariable(TotalCellWidth, "TotalCellWidth")
                    ReportSettingsString += AddVariable(QuantityCellWidth, "QuantityCellWidth")
                    ReportSettingsString += AddVariable(UnitCostWidth, "UnitCostWidth")
                    
                    ReportSettingsString += FormatJS(SummaryColumns, "SummaryColumns")
                    ReportSettingsString += FormatJS(SummaryProfileColumns, "SummaryProfileColumns")
                    ReportSettingsString += FormatJS(SummaryPaintColumns, "SummaryPaintColumns")
                    ReportSettingsString += FormatJS(SummarySortBy, "SummarySortBy")
                    ReportSettingsString += FormatJS(SummaryHardwareColumns, "SummaryHardwareColumns")
                    ReportSettingsString += FormatJS(SummaryHardwareSortBy, "SummaryHardwareSortBy")
                    ReportSettingsString += FormatJS(SummaryLabourCostsColumns, "SummaryLabourCostsColumns")
                    ReportSettingsString += FormatJS(SummaryMachiningCostsColumns, "SummaryMachiningCostsColumns")
                    
                    ReportSettingsString += AddTitle("LABELS PAGE")
                    ReportSettingsString += FormatJS(ShowPanelIDLabel, "ShowPanelIDLabel")
                    ReportSettingsString += "\n"
                    ReportSettingsString += FormatJS(LabelData, "LabelData")
                    ReportSettingsString += FormatJS(SortByLabel, "SortByLabel")
                    
                    ReportSettingsString += AddTitle("PRINT SETTINGS")
                    ReportSettingsString += FormatJS(PrintList, "PrintList")
                    
                    fs.writeFile('ReportSettingsNew.js', ReportSettingsString, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    })  
    
                } catch (err) {
                    console.log ('Error parsing JSON', err)
                }
            }
    
        })
    }

    function FormatJS (JSData, DataName){
    
        var json = JSON.stringify(JSData);
    
        // Remove quotes from property names
        json = json.replace(/"([^"]+)":/g, '$1:');
        // Add break after every property
        json = json.replace(/},{/g, "},\n{")
        // Add break after opening bracket
        json = json.replace(/\[/g, "[\n")
        // Add break after closing bracket
        json = json.replace(/\]/g, "\n]\n\n")
        // Add space between property and value
        json = json.replace(/:/g, ": ")
        // Add space after comma
        json = json.replace(/,/g, ", ")
        // Add tab for every property
        json = json.replace(/{/g, "    {")
        // Add Property Name
        json = "var " + DataName + " = " + json
    
        return json
    }
    
    function AddVariable (Var, VarName){
        return "var " + VarName + " = " + Var + "\n"
    }
    
    function AddTitle (Name){
        var TitleString = "// =======================================================\n"
        TitleString += "//               " + Name + "\n"
        TitleString += "// =======================================================\n\n"
        return TitleString
    }
    
    // fs.readFile('Report.cfg', 'utf8' , (err,jsonString) => {
    //     if (err) {
    //         console.log ('Error Ocurred')
    //         console.log (err)
    //     } else {
    //         try {
    //             //for JSON
    //             // const data = JSON.parse(jsonString)
    //             const data = (jsonString)
    //             // const data = jsonString
    //             //for JS
    //             // const data = JSON.parse(JSON.stringify(jsonString))
    //             // console.log(data.ReportData.ProjectName)
    
    //             console.log(data)
    
    
    //         } catch (err) {
    //             console.log ('Error parsing JSON', err)
    //         }
    //     }
    
    // })
    
    
    
    
    // --------- reading files --------- 
    // fs.readFile('./readme.txt', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     // console.log (data)
    //     console.log (data.toString())
    // })
    
    // console.log('Last Line')
    
    //  --------- writing files --------- 
    // fs.writeFile('./readme.txt', 'hello, world', () => {
    //     console.log('file was written')
    // })
    
    // This will create the file if it doesn't exist
    // fs.writeFile('./readme2.txt', 'hello, world2', () => {
    //     console.log('file was written')
    // })
    
    
    //  --------- directories --------- 
    // Check it folder exists
    // if (!fs.existsSync('./Assets')) { 
    //     fs.mkdir('./Assets', (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         console.log('Folder Created')
    //     })
    // } else {
    //     // Deletes the folder if it exists
    //     fs.rmdir('./Assets', (err) => {
    //         if (err)
    //             console.log(err)
    //         }
    //         console.log('Folder Deleted')
    //     }) 
    // }
    
    // //  --------- deleting files --------- 
    // if (fs.existsSync('./docs/deleteme.txt')) {
    
    //     fs.unlink('./docs/deleteme.txt', (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //         console.log('File Deleted')
    //     })
    // }
    
    // fs.readFile('./customer.json', 'utf-8' , (err,jsonString) => {
    //     if (err) {
    //         console.log (err)
    //     } else {
    //         try {
    //             //for JSON
    //             const data = JSON.parse(jsonString)
    //             // const data = jsonString
    //             //for JS
    //             // const data = JSON.parse(JSON.stringify(jsonString))
    //             // console.log(data.ReportData.ProjectName)
    
    //             console.log(data)
    //         } catch (err) {
    //             console.log ('Error parsing JSON', err)
    //         }
    //     }
    
    // })
    
    // function jsonReader(filePath, cb) {
    //     fs.readFile(filePath, 'utf-8', (err, fileData) => {
    //         if (err) {
    //             console.log (err)
    //             return cb && cb(err)
    //         } else {
    //             try {
    //                 const object = JSON.parse(fileData)
    //                 console.log(object.name)
    //                 return cb && cb(null, object)
    //             } catch (err) {
    //                 console.log ('Error parsing JSON', err)
    //                 return cb && cb(err)
    //             }
    //         }
            
    //     })
    // }
        
    // const newObject = {
        
    //     "name" : "Newbie Corp",
    //     "order_count" : 2500,
    //     "address" : "Po"
        
    // }
    
    // const jsonString = JSON.stringify(newObject)
    // console.log(jsonString)    
    
    // fs.writeFile('./newCustomer.json', JSON.stringify(newObject, null, 2), err =>{
    //     if (err) {
    //         console.log (err)
    //     } else {
    //         console.log('File successfully written')
    //     }
    // })
    
    
    // jsonReader('./Customer.json', (err, data) =>{
    //     if (err) {
    //         console.log (err)
    //     } else {
    
    //         console.log(data.order_count)
    //         data.order_count += 100
    
    //         fs.writeFile('./newCustomer.json', JSON.stringify(data, null, 2), err =>{
    //             if (err) {
    //                 console.log (err)
    //             } else {
    //                 console.log('File successfully written')
    //             }
    //         })
    //     }
    // })
    