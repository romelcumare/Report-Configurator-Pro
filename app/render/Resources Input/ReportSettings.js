// Client Name: Solid Solutions

/*	================ 
	  Report Header
	================ */
	var ReportHeader = [
		{Property: "ProjectName", Prefix: "Project", AutoHide: false, Print: true},
		{Property: "CreatedBy", Prefix: "Created By", AutoHide: true, Print: true},
		{Property: "ProjectPath", Prefix: "Project Path", AutoHide: true, Print: false},
		{Property: "ProjectQuantity", Prefix: "ProjectQuantity", AutoHide: true, Print: false},
		{Property: "Customer", Prefix: "Customer", AutoHide: true, Print: true},
		{Property: "OrderNumber", Prefix: "Order Number", AutoHide: true, Print: true},
		{Property: "Location",Prefix: "Location", AutoHide: true, Print: true},
		{Property: "Date", Prefix: "Date", AutoHide: false, Print: true},
		{Property: "ProjectComments", Prefix: "Comments", AutoHide: true, Print: false},
	]

/*	================
	  Panels Page
	================ */

	var UseTopLevelProperties = true
	var GenerateIDs = true
	var LongestEdge = false
	var NoParentTitle = "No Parent"
	var CombinedPanelName = "Combined Panel"
	var CombinedStockName = "Combined Stock"
	var CombinedProfileName = "Combined Profile"

	var PanelColumns = [
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
		// {Property: "IsNested", Header: "Nested", Type: "tickCross", Search: false, Print: false, HozAlign: "center", Width:"80"},
		// {Property: "HasEdgebands", Header: "EB", Type: "tickCross", Search: false, Print: false, HozAlign: "center", Width:"80"},
		// {Property: "HasLaminates", Header: "Lam", Type: "tickCross", Search: false, Print: false, HozAlign: "center", Width:"80"},
		// {Property: "HasPaint", Header: "Paint", Type: "tickCross", Search: false, Print: false, HozAlign: "center", Width:"80"},
		// {Property: "HasProfiles", Header: "PF", Type: "tickCross", Search: false, Print: false, HozAlign: "center", Width:"80"},
		// {Property: "TopLaminate", Header: "Top Laminate", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"150"},
		// {Property: "BottomLaminate", Header: "Bottom Laminate", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"150"},
		// {Property: "PanelDimensions", Header: "Dimensions", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"180"},
		// {Property: "Comments", Header: "Comments", Type: "string", Search: true, Print: true, HozAlign: "center", Width:"auto"},
	]

	var SortByPanel = [
		{Property: "Thickness", Type: -1},
		{Property: "Material", Type: 1},
		{Property: "Length", Type: -1},
		{Property: "Width", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Quantity", Type: 1},
	]

/*	================ 
		Stocks Page
	================ */
	var CombineStocks = true
	var CombineBeamSaw = true
	
	var StockColumns = [
		{Property: "PanelID", Header: "#", Type: "number", Search: true, HozAlign: "center", Width:"60"},
		{Property: "Name", Header: "Part Name", Type: "alphanum", Search: true, HozAlign: "left", Width:"auto"},
		{Property: "Description", Header: "Description", Type: "alphanum", Search: true, HozAlign: "center", Width:"250"},
		{Property: "RoughLength", Header: "Length", Type: "number", Search: true, HozAlign: "center", Width:"200"},
		{Property: "RoughWidth", Header: "Width", Type: "number", Search: true, HozAlign: "center", Width:"200"},
		{Property: "RoughThickness", Header: "Thickness", Type: "number", Search: true, HozAlign: "center", Width:"200"},
		{Property: "Quantity", Header: "Qty", Type: "number", Search: true, HozAlign: "center", Width:"100"},
		{Property: "Material", Header: "Material", Type: "alphanum", Search: true, HozAlign: "center", Width:"250"},	

	]
	
	var SortByStock = [
		{Property: "Thickness", Type: -1},
		{Property: "Material", Type: 1},
		{Property: "Length", Type: -1},
		{Property: "Width", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Quantity", Type: 1},
	]

	
/*	================ 
	  Profiles Page
	================ */

	var CombineProfiles = true;

	var ProfileColumns = [
		{Property: "Name", Header: "Part Name", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"auto"},
		{Property: "Description", Header: "Description", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"250"},
		{Property: "ProfileLength", Header: "Length", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		{Property: "ProfileAngle1", Header: "Angle 1", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"120"},
		{Property: "ProfileAngle2", Header: "Angle 2", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"120"},
		// {Property: "ProfileBBLength", Header: "BB Length", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		// {Property: "ProfileBBWidth", Header: "BB Width", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		// {Property: "ProfileBBThickness", Header: "BB Thickness", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		// {Property: "BBDimensions", Header: "BB Dimensions", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"200"},
		// {Property: "ProfileBBVolume", Header: "BB Volume", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		{Property: "Quantity", Header: "Qty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"100"},
		// {Property: "ProfileTotalLength", Header: "Total Length", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"160"},
		{Property: "Material", Header: "Material", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"250"},
	]

	var SortByProfile = [
		{Property: "ProfileLength", Type: -1},
		{Property: "Name", Type: -1},
		{Property: "Material", Type: 1},
		{Property: "Quantity", Type: 1},
	]
	

/*	=================== 
	Panel Details Page
	=================== */

	var ShowPanelID = {Property: "PanelID", Header: "Panel ID", Show: true}
	var WriteStockProperties = true

	// Set Property to "" to define side header 
	var PanelDetailsColumns = [
		{Property: "", Header: "Panel", Width:"18%"},
		{Property: "Length", Header: "Length", Width:"10%"},
		{Property: "Width", Header: "Width", Width:"10%"},
		{Property: "Thickness", Header: "Thickness", Width:"10%"},
	]

	// Column widths already defined in PanelDetailsColumns
	var PanelDetailsStockColumns = [
		{Property: "", Header: "Stock" },
		{Property: "RoughLength"},
		{Property: "RoughWidth"},
		{Property: "RoughThickness"},
	]

	var PanelDetailsExtraColumns = [
		{Property: "Material", Header: "Material", Width:"10%"},
		{Property: "Description", Header: "Description", Width:"10%"},
		{Property: "Quantity", Header: "Qty", Width:"10%"},
	]

	var PanelListColumns = [
		{Property: "Title", Header: "Panel List"},
		{Property: "Name", Header: "Name", Width:"60%"},
		{Property: "Description", Header: "Description", Width:"30%"},
		{Property: "Quantity", Header: "Qty", Width:"10%"},
	]

	var PanelLayersColumns = [
		{Property: "Title", Header: "Layers"},
		{Property: "Name", Header: "Name", Width:"60%"},
		{Property: "Material", Header: "Material", Width:"30%"},
		{Property: "Thickness", Header: "Thickness", Width:"10%"},
	]

	var PanelLaminatesColumns = [
		{Property: "Title", Header: "Laminates"},
		{Property: "Name", Header: "Laminate", Width:"20%"},
		{Property: "Material", Header: "Material", Width:"50%"},
		{Property: "Thickness", Header: "Thickness", Width:"30%"},
	]

	var PanelEdgebandsColumns = [
		{Property: "Title", Header: "Edgebands"},
		{Property: "Name", Header: "Edgebands", Width:"20%"},
		{Property: "Material", Header: "Material", Width:"10%"},
		{Property: "Thickness", Header: "Thickness", Width:"10%"},
	]

	var PanelProgramsColumns = [
		{Property: "Title", Header: "Programs"},
		{Property: "ProgramName", Header: "Name", Width:"20%"},
		{Property: "ProgramFileName", Header: "Code", Width:"80%"},
	]

	var PanelCombinedProgramsColumns = [
		{Property: "Title", Header: "Programs"},
		{Property: "PartName", Header: "Panel Name", Width:"40%"},
		{Property: "ProgramName", Header: "Name", Width:"20%"},
		{Property: "ProgramFileName", Header: "Code", Width:"40%"},
	]


/*	================ 
	   Frames Page
	================ */

	var FrameColumns = [
		{Property: "Name", Header: "Frame Name", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"auto"},
		{Property: "Description", Header: "Description", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Height", Header: "Height", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"200"},
		{Property: "Width", Header: "Width", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"200"},
		{Property: "Depth", Header: "Depth", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"200"},
		// {Property: "Weight", Header: "Weight", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"200"},
		{Property: "Quantity", Header: "Qty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"150"},
		// {Property: "TotalCost", Header: "Cost", Type: "currency", Search: true, Print: true, HozAlign: "center", Width:"150"},
	]

	var SortByFrame = [
		{Property: "Name", Type: 1},
		{Property: "Height", Type: -1},
		{Property: "Width", Type: -1},
		{Property: "Depth", Type: 1},
		{Property: "Quantity", Type: 1},
	]


/*	=================== 
	Frames Details Page
	=================== */

	var FrameDetailsColumns = [
		{Property: "Height", Header: "Height", Style: "", Width:"250"},
		{Property: "Width", Header: "Width", Style: "", Width:"250"},
		{Property: "Depth", Header: "Depth", Style: "", Width:"250"},
		{Property: "Quantity", Header: "Qty", Style: "", Width:"250"},	
		// {Property: "MaterialCost", Header: "MaterialCost", Type: "currency", Style: "", Width:"250"},	
		// {Property: "HardwareCost", Header: "HardwareCost", Type: "currency", Style: "", Width:"250"},	
		// {Property: "TotalCost", Header: "TotalCost", Type: "currency", Style: "", Width:"auto"},	
	]

	var FramePanelColumns = [
		{Property: "PanelID", Header: "#", Style: "", Width:"5%"},
		{Property: "Name", Header: "Part Name", Style: "", Link: true, Width:"auto"},
		{Property: "Description", Header: "Description", Style: "", Width:"20%"},
		{Property: "PanelDimensions", Header: "Dimensions", Style: "", Width:"15%"},
		{Property: "Quantity", Header: "Qty", Style: "", Width:"5%"},
		{Property: "Material", Header: "Material", Style: "", Width:"15%"},
	]

	var SortByPanelFrame = SortByPanel
	// var SortByPanelFrame = [
	// 	{Property: "Thickness", Type: -1},
	// 	{Property: "Material", Type: 1},
	// 	{Property: "Length", Type: -1},
	// 	{Property: "Width", Type: -1},
	// 	{Property: "Name", Type: 1},
	// 	{Property: "Quantity", Type: 1},
	// ]
	
	var FrameHardwareColumns = [
		{Property: "Name", Header: "Name", Style: "", Width:"auto"},
		{Property: "Description", Header: "Description", Style: "", Width:"25%"},
		{Property: "Configuration", Header: "Configuration", Style: "", Width:"25%"},
		{Property: "Supplier", Header: "Supplier", Style: "", Width:"10%"},	
		{Property: "Quantity", Header: "Qty", Style: "", Width:"100px"},	
		// {Property: "UnitCost", Header: "Unit Cost", Type: "currency", Style: "", Width:"100px"},
		// {Property: "FrameTotalCost", Header: "FrameTotalCost", Type: "currency", Style: "", Width:"100px"},
		// {Property: "TotalCost", Header: "Total Cost", Type: "currency", Style: "", Width:"100px"},
	]

	var FrameProgramColumns = [
		{Property: "PartName", Header: "Part Name", Style: "", Width:"50%"},
		{Property: "ProgramFileName", Header: "Program", Style: "", Width:"50%"},
	]


/*	=================== 
	   Programs Page
	=================== */

	var ShowPanelIDPrograms = {Property: "PanelID", Header: "Panel ID", Show: true}

	var ProgramDetailsColumns = [
		{Property: "Length", Header: "Length", Width:"20%"},
		{Property: "Width", Header: "Width", Width:"20%"},
		{Property: "Thickness", Header: "Thickness", Width:"20%"},
		{Property: "Material", Header: "Material", Width:"20%"},
		{Property: "Quantity", Header: "Qty", Width:"20%"},
		{Property: "ProgramCost", Header: "ProgramCost", Type: "currency", Width:"20%"},
	]

	var ProgramColumns = [
		{Property: "Title", Header: "Programs"},
		{Property: "ProgramName", Header: "Name", Width:"20%"},
		{Property: "ProgramFileName", Header: "Code", Width:"70%"},
		{Property: "Machine", Header: "Machine", Width:"10%"},
	]


/*	================ 
	  Nested Panels
	================ */

	var NestingPanelsColumns = [
		{Property: "ProgramIndicator", Header: "", Type: "number", Search: false, Print: true, HozAlign: "center", Width:"40"},
		{Property: "PanelID", Header: "#", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"60"},
		{Property: "Name", Header: "Name", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"600"},
		{Property: "Length", Header: "Length", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Width", Header: "Width", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Thickness", Header: "Thickness", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		// {Property: "Material", Header: "Material", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Material", Header: "Material", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		// {Property: "NumPrograms", Header: "PartNumProgram", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Quantity", Header: "Quantity", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		// {Property: "PartNumProgram", Header: "PartNumber", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"300"},
	]
	
	var SortByNestingPanels = [
		{Property: "Thickness", Type: -1},
		{Property: "Material", Type: 1},
		{Property: "Length", Type: -1},
		{Property: "Width", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Quantity", Type: 1},
	]


/*	================ 
	  Nested Sheets
	================ */

	var GroupSheetPanels = false
	var ShowNestTools = true

	var NestedSheetColumns = [
		{Property: "ProgramName", Header: ""},
		{Property: "Length", Header: "Length", HozAlign: "center", Width:"10%"},
		{Property: "Width", Header: "Width", HozAlign: "center", Width:"10%"},
		{Property: "MaterialThickness", Header: "Thickness", HozAlign: "center", Width:"10%"},
		{Property: "Material", Header: "Material", HozAlign: "center", Width:"10%"},
		{Property: "Quantity", Header: "Quantity", HozAlign: "center", Width:"10%"},
		{Property: "Time", Header: "Cutting Time", HozAlign: "center", Width:"10%"},
		{Property: "ProgramCost", Header: "Cost", HozAlign: "center", Type: "currency", Width:"10%"},
	]


	var NestedSheetPanelsColumns = [
		{Property: "", Header: "Panel List"},
		{Property: "NestingID", Header: "Nesting ID", HozAlign: "center", Width:"10%"},
		// {Property: "SWPanelID", Header: "Panel ID", HozAlign: "center", Width:"100"},
		{Property: "Name", Header: "Name", HozAlign: "center", Width:"auto"},
		// {Property: "Length", Header: "Length", HozAlign: "center", Width:"200"},
		// {Property: "Width", Header: "Width", HozAlign: "center", Width:"200"},
		// {Property: "QuantityPerSheet", Header: "Qty/Sheet", HozAlign: "center", Width:"200"},
		// {Property: "NestedQuantity", Header: "Req Qty", HozAlign: "center", Width:"200"},
	]


/*	================ 
	  Hardware Page
	================ */
	
	var NoParentTitleHardware = "No Parent"
	var NoTypeTitleHardware = "Hardware"

	var HardwareColumns = [
		{Property: "Image", Header: "", Type: "image", Search: false, Print: true, HozAlign: "center", Width:"100"},
		{Property: "Name", Header: "Name", Type: "alphanum", Search: true, Print: true, HozAlign: "left", Width:"auto", Link: false},
		{Property: "Description", Header: "Description", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		// {Property: "HardwareType", Header: "HardwareType", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Configuration", Header: "Configuration", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"300"},
		{Property: "Reference", Header: "Reference", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Supplier", Header: "Supplier", Type: "alphanum", Search: true, Print: true, HozAlign: "center", Width:"auto"},
		{Property: "Quantity", Header: "Qty", Type: "number", Search: true, Print: true, HozAlign: "center", Width:"100"},
		{Property: "UnitCost", Header: "Unit Cost", Type: "currency", Search: true, Print: true, HozAlign: "center", Width:"200"},
	]
	
	var SortByHardware = [
		{Property: "UnitCost", Type: -1},
		{Property: "Quantity", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Description", Type: 1},
		{Property: "Configuration", Type: 1},
		{Property: "Length", Type: 1},
	]


/*	================ 
	  Summary Page
	================ */

	var ShowMachiningCosts = true
	var GroupPanelMachiningCosts = true
	var GroupSheetMachiningCosts = true
	var ShowSummaryChart = true

	// Variables to maintain table consistency
	var TotalCellWidth = "12%"
	var QuantityCellWidth = "12%"
	var UnitCostWidth = "14%"

	var SummaryColumns = [
		{Property: "Material", Header: "Material", Type: "alphanum", Width:"auto"},
		{Property: "MaterialDescription", Header: "Description", Type: "alphanum", Width:"20%"},
		{Property: "MaterialThickness", Header: "Thickness", Type: "alphanum", Width:"12%"},
		{Property: "MaterialQuantity", Header: "Quantity", Type: "alphanum", Width: QuantityCellWidth},
		{Property: "MaterialUnitCost", Header: "Unit Cost", Type: "alphanum", Width: UnitCostWidth},
		{Property: "TotalCost", Header: "Total Cost", Type: "alphanum", Width: TotalCellWidth},	
	]
	
	var SummaryProfileColumns = [
		{Property: "Material", Header: "Material", Type: "alphanum", Width:"auto"},
		{Property: "MaterialDescription", Header: "Description", Type: "alphanum", Width:"32%"},
		// {Property: "MaterialThickness", Header: "Thickness", Type: "alphanum", Width:"12%"},
		{Property: "MaterialQuantity", Header: "Quantity", Type: "alphanum", Width: QuantityCellWidth},
		{Property: "MaterialUnitCost", Header: "Unit Cost", Type: "alphanum", Width: UnitCostWidth},
		{Property: "TotalCost", Header: "Total Cost", Type: "alphanum", Width: TotalCellWidth},	
	]

	var SummaryPaintColumns = [
		{Property: "Material", Header: "Paint", Type: "alphanum", Width:"auto"},
		{Property: "MaterialDescription", Header: "Description", Type: "alphanum", Width:"32%"},
		// {Property: "MaterialThickness", Header: "Thickness", Type: "alphanum", Width:"12%"},
		{Property: "MaterialQuantity", Header: "Quantity", Type: "alphanum", Width: QuantityCellWidth},
		{Property: "MaterialUnitCost", Header: "Unit Cost", Type: "alphanum", Width: UnitCostWidth},
		{Property: "TotalCost", Header: "Total Cost", Type: "alphanum", Width: TotalCellWidth},	
	]

	// SummarySortBy also used to sort Profiles
	var SummarySortBy = [
		{Property: "TotalCost", Type: -1},
		{Property: "UnitCost", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Description", Type: 1},
		{Property: "MaterialThickness", Type: 1},
		{Property: "MaterialQty", Type: 1},
	]

	var SummaryHardwareColumns = [
		{Property: "Name", Header: "Name", Width:"auto"},
		{Property: "Configuration", Header: "Configuration", Width:"20%"},
		// {Property: "Supplier", Header: "Supplier", Width:"auto"},
		{Property: "Reference", Header: "Reference", Width:"12%"},
		{Property: "Quantity", Header: "Quantity", Width: QuantityCellWidth},
		{Property: "UnitCost", Header: "Unit Cost", Width: UnitCostWidth},
		{Property: "TotalCost", Header: "Total Cost", Width: TotalCellWidth},
	]
	
	var SummaryHardwareSortBy = [
		{Property: "TotalCost", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Description", Type: 1},
		{Property: "Configuration", Type: 1},
		{Property: "UnitCost", Type: -1},
		{Property: "Quantity", Type: -1},
		{Property: "Length", Type: 1},
	]

	var SummaryLabourCostsColumns = [
		{Property: "Name", Header: "Name", Width:"auto"},
		{Property: "LabourCosts", Header: "Cost", Type: "currency", Width: TotalCellWidth},
	]

	var SummaryMachiningCostsColumns = [
		{Property: "Name", Header: "Name", Width:"auto"},
		{Property: "ProgramCost", Header: "Cost", Type: "currency", Width: TotalCellWidth},
	]


/*	================
	  Labels Page
	================ */

	var ShowPanelIDLabel = {Property: "PanelID", Show: true}

	var LabelData = [
		{Property: "Name", Prefix: "", Style:"font-weight: bold;"},
		{Property: "Material", Prefix: "", Style: ""},
		{Property: "PanelDimensions", Prefix: "", Style: ""},
		// {Property: "EdgingListString", Prefix: "", Style: ""},
		{Property: "LabelQuantity", Prefix: "", Style: ""},
		{Property: "PanelDimensions", Prefix: "", Style:"", Type: "Barcode"},
	]

	// Not applicable to nesting labels
	var SortByLabel = [
		{Property: "Thickness", Type: -1},
		{Property: "Material", Type: 1},
		{Property: "Length", Type: -1},
		{Property: "Width", Type: -1},
		{Property: "Name", Type: 1},
		{Property: "Quantity", Type: 1},
	]
	

/*	================ 
	 Print Settings
	================ */

	var PrintList = [
		{Page:"Home", Quantity: 1},
		// {Page:"Frames", Quantity: 1},
		{Page:"Frame Details", Quantity: 1},
		{Page:"Panels", Quantity: 1},
		// {Page:"Panel Details", Quantity: 1},
		// {Page:"Panel Detailed List", Quantity: 1},
		{Page:"Profiles", Quantity: 1},
		{Page:"Stocks", Quantity: 1},
		{Page:"Beam Saw", Quantity: 1},
		{Page:"Programs", Quantity: 1},
		// {Page:"Program Details", Quantity: 1},
		{Page:"Nested Panels", Quantity: 1},
		{Page:"Nesting", Quantity: 1},
		// {Page:"Nesting Details", Quantity: 1},
		{Page:"Tool List", Quantity: 1},
		{Page:"Hardware", Quantity: 1},
		{Page:"Summary", Quantity: 1},
	]

