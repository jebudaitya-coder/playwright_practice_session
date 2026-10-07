// const ExcelJs = require('exceljs');
// const workBook = new ExcelJs.Workbook();
// workBook.xlsx.readFile('../excel-test-scenarios/testData/testFile.xlsx').then(function () {
//     const workBookSheet = workBook.getWorksheet('Sheet1');
//     workBookSheet.eachRow((row, rowNumber) => {
//         row.eachCell((cell, columnNumber) => {
//             console.log(cell.value);
//         })
//     })
// });

// //practical and suggested approach
// async function readExcel() {
//     const ExcelJs = require('exceljs');
//     const workBook = new ExcelJs.Workbook();
//     await workBook.xlsx.readFile('../excel-test-scenarios/testData/testFile.xlsx').then(function () {
//         const workBookSheet = workBook.getWorksheet('Sheet1');
//         workBookSheet.eachRow((row, rowNumber) => {
//             row.eachCell((cell, colNumber) => {
//                 console.log(cell.value);
//             })
//         })
//     });
// }

// readExcel();

// //get row and col details
// async function getRowCol() {
//     const ExcelJs = require('exceljs');
//     const workBook = new ExcelJs.Workbook();
//     await workBook.xlsx.readFile('../excel-test-scenarios/testData/testFile.xlsx').then(function () {
//         const workBookSheet = workBook.getWorksheet('Sheet1');
//         workBookSheet.eachRow((row, rowNumber) => {
//             row.eachCell((cell, colNumber) => {
//                 if(cell.value==="Kivi")
//                 console.log("[RowNum, ColNum] is " + "[" + rowNumber + ", " + colNumber + "]");
//             })
//         })
//     });
// }

// getRowCol();

//Update the record
async function updateRecord() {
    let output = {row:-1,col:-1};
    const ExcelJs = require('exceljs');
    const workBook = new ExcelJs.Workbook();
    await workBook.xlsx.readFile('../excel-test-scenarios/testData/testFile.xlsx').then(function () {
        const workBookSheet = workBook.getWorksheet('Sheet1');
        workBookSheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {
                if(cell.value==="Mango")
                output.row = rowNumber;
                output.col = colNumber;
            })
        })
        const cell = workBookSheet.getCell(output.row,output.col);
        cell.value = "Indian Mango";
        workBook.xlsx.writeFile('../excel-test-scenarios/testData/testFile.xlsx');
    });
    
}

updateRecord();