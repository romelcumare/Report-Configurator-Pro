// Client Name: Solid Solutions

var ReportData = {
    ReportVersion: "«ReportVersion»",
    ProjectName: "«ProjectName»",
    AssemblyName: "«AssemblyName»",
    Revision: "«Revision»",
    ProjectPath: "«Path»",
    <!--BLOC CONDITION=NOT(((Comments)CONTAINS"`"))-->ProjectComments: `«Comments»`,<!--/BLOC--><!--BLOC CONDITION=((Comments)CONTAINS"`")-->ProjectComments: `"Comment contains invalid character"`,<!--/BLOC-->
    Customer: "«Customer»",
    OrderNumber: "«OrderNumber»",
    CreatedBy: "«CreatedBy»",
    Date: "«Date»",
    ProjectQuantity: «ProjectQuantity»,
    ProjectWeight: "«ProjectWeight»",
    Image: "«IMGREPORT.DOC_REPORTRELATIVEURI»",
    Currency: "«REPORTCURRENCYSYMBOL»",
    Job: "«Job»",
    Room: "«Room»",
    CustomerName: "«CustomerName»",
    SwoodNesting: <!--BLOC CONDITION=REPORT_ISNESTINGPROJECT--> true,<!--/BLOC--><!--BLOC CONDITION=NOT(REPORT_ISNESTINGPROJECT)--> false,<!--/BLOC-->
    // Paragon Properties
    COMPANY: "«COMPANY»",
    JOB_NUMBER: "«JOB_NUMBER»",
    J_NUMBER: "«J_NUMBER»",
    FLOOR: "«FLOOR»",
    DRAWN_BY: "«DRAWN_BY»",
    REVISION: "«REVISION»",
    //Project Placeholders
    Project_STR_1: "«Project_STR_1»",
    Project_STR_2: "«Project_STR_2»",
    Project_STR_3: "«Project_STR_3»",
    Project_STR_4: "«Project_STR_4»",
    Project_STR_5: "«Project_STR_5»",
    Project_STR_6: "«Project_STR_6»",
    Project_STR_7: "«Project_STR_7»",
    Project_STR_8: "«Project_STR_8»",
    Project_STR_9: "«Project_STR_9»",
    Project_STR_10: "«Project_STR_10»",
}