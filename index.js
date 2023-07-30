$(async function(){
    // Fetch csv file
    let gsheet_response = await fetch("https://docs.google.com/spreadsheets/d/1VVD8_KhWia3Zhcc6BHggQnn8gObYGCGG1gwuOk42pE4/export?format=csv");
    
    if(gsheet_response.ok) {
        // Parse csv
        let quote_csv = $.csv.toArrays(await gsheet_response.text());
        
        // Find number of weeks since start and take that mod the number of
        // facts, and add one to account for the first line.
        let line = (dayjs().diff("2023-07-30","week") % (quote_csv.length-1)) + 1;
        
        // Set fact
        $("#fact").text(quote_csv[line][1]);
    }
});
