function doGet(request) {
  const ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14nGp1ZEPuAYLRw9CMIckxsw_-_76RSNYBG5JdWJTTAA/edit");
  const sheet = ss.getSheets()[0];
  const headers = ["timestamp", "jobTitle", "companyName", "url"];

  const nextRow = sheet.getLastRow(); 
  const cell = sheet.getRange('a1');
  let col = 0;
  for (i in headers){
    if (headers[i] == "timestamp"){
      val = new Date();
    } else {
      val = request.parameter[headers[i]]; 
    }
    cell.offset(nextRow, col).setValue(val);
    col++;
  }

  return ContentService.createTextOutput(request.parameter.url)
  .setMimeType(ContentService.MimeType.TEXT);
}
