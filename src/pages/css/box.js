import React from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import XLSX from 'xlsx'
import MyBlogLayout from "../../Layouts";

const boxPage = () => {
  function exportTable() {
    const workbook = XLSX.utils.book_new();
    const table = document.getElementById("table");
    // const tables = document.querySelectorAll("table");
    const worksheet = XLSX.utils.table_to_sheet(table);
    console.log(worksheet, "xxx");
    XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet名称');
    XLSX.writeFile(workbook, '表格名称.xlsx')
    console.log("导出");
  }

  return (
    <MyBlogLayout title="盒模型">
      <button onClick={exportTable}>导出</button>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS" />
      <div id="table">
        <table id="table-to-xls">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
        <table id="table-to-xls">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MyBlogLayout>
  )
}
export default boxPage;