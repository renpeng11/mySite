import React from "react";
import { Table } from "antd";
import XLSX from 'xlsx/dist/xlsx.full.min';

import MyBlogLayout from "../../Layouts";

class FakeClassPage extends React.PureComponent {

  exportTable() {
    const workbook = XLSX.utils.book_new();
    const table = document.getElementById("xxxx");
    const worksheet = XLSX.utils.table_to_sheet(table);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet');
    XLSX.writeFile(workbook, 'xxxxx.xlsx')
  }

  cloums() {
    const cloums = [
      {
        title: "姓名",
        width: 200,
        children: [
          {
            title: "任鹏",
            width: 100,
            children: [
              {
                title: "rp",
                width: 50,
                dataIndex: "rp",
                key: "1",
              },
              {
                title: "xm",
                width: 50,
                dataIndex: "xm",
                key: "2",
              },
            ],
          },
          {
            title: "美珍",
            width: 100,
            children: [
              {
                title: "rxp",
                dataIndex: "rxp",
                width: 50,
                key: "3",
              },
              {
                title: "xxm",
                dataIndex: "xxm",
                width: 50,
                key: "4",
              },
            ],
          },
        ],
      },
    ];
    return cloums;
  }
  render() {
    return (
      <MyBlogLayout title="伪类&伪元素" >
        <button type="button" onClick={this.exportTable}>导出</button>
        <Table
          id="xxxx"
          columns={this.cloums()}
          dataSource={[]}
          bordered
        />
      </MyBlogLayout>
    )
  }
}
export default FakeClassPage;