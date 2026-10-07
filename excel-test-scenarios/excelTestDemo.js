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
    const ExcelJs = require('exceljs');
    const workBook = new ExcelJs.Workbook();
    await workBook.xlsx.readFile('../excel-test-scenarios/testData/testFile.xlsx').then(function () {
        const workBookSheet = workBook.getWorksheet('Sheet1');
        workBookSheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {
                if(cell.value==="Kivi")
                console.log("[RowNum, ColNum] is " + "[" + rowNumber + ", " + colNumber + "]");
            })
        })
        const cell = workBookSheet.getCell(6,2);
        cell.value = "Mango";
        workBook.xlsx.writeFile('../excel-test-scenarios/testData/testFile.xlsx');
    });
    
}

updateRecord();