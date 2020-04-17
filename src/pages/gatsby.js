import React from "react";
import ReactDOM from 'react-dom';
import { Table, Icon, Divider } from "antd";
import XLSX from 'xlsx'
import MyBlogLayout from "../Layouts";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const { Column, ColumnGroup } = Table;

class gatsbyPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "任鹏",
          dataIndex: "rp",
          key: "1",
        },
        {
          title: "小美",
          dataIndex: "xm",
          key: "2",
        },
      ],
      ref: this.props.attr, // 从父组件获取参数判断该table是否需要导出
    }
  }

  column() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      filters: [{
        text: 'Joe',
        value: 'Joe',
      }, {
        text: 'John',
        value: 'John',
      }],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    }, {
      title: 'Other',
      children: [{
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200,
        sorter: (a, b) => a.age - b.age,
      }, {
        title: 'Address',
        children: [{
          title: 'Street',
          dataIndex: 'street',
          key: 'street',
          width: 200,
        }, {
          title: 'Block',
          children: [{
            title: 'Building',
            dataIndex: 'building',
            key: 'building',
            width: 100,
          }, {
            title: 'Door No.',
            dataIndex: 'number',
            key: 'number',
            width: 100,
          }],
        }],
      }],
    }, {
      title: 'Company',
      children: [{
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
      }, {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      }],
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 60,
      fixed: 'right',
    }];
    return columns;
  }

  data() {
    const data = [{
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return data;
  }

  exportTable() {
    const workbook = XLSX.utils.book_new();
    const table = document.getElementById("table-to-xls");
    console.log(table);
    const worksheet = XLSX.utils.table_to_sheet(table);
    console.log(worksheet, "xxx");
    XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet名称1');
    XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet名称2');
    XLSX.writeFile(workbook, '表格名称.xlsx')
    console.log("导出");
  }

  componentDidMount() {
    const tableCon = ReactDOM.findDOMNode(this.refs['table']); // 通过ref属性找到该table
    console.log(tableCon, "rrr");
    const table = tableCon.querySelector('table');  //获取table
    console.log(table, "renpeng");
    table.setAttribute('id', 'table-to-xls')     //给该table设置属性
  }

  render() {
    return (
      <MyBlogLayout title="gatsby" >
        <button onClick={this.exportTable}>导出导出</button>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="excel"
          sheet="工作表名称"
          buttonText="导出按钮名称"
        />
        <Table
          ref={"table"}
          rowKey={record => record.key}
          dataSource={this.data()}
          bordered
        >
          <ColumnGroup title="Name">
            <Column
              title="First Name"
              dataIndex="firstName"
              key="firstName"
            />
            <Column
              title="Last Name"
              dataIndex="lastName"
              key="lastName"
            />
          </ColumnGroup>
          <Column
            title="Age"
            dataIndex="age"
            key="age"
          />
          <Column
            title="Address"
            dataIndex="address"
            key="address"
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="javascript:;">Action 一 {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
                <Divider type="vertical" />
                <a href="javascript:;" className="ant-dropdown-link">
                  More actions <Icon type="down" />
                </a>
              </span>
            )}
          />
        </Table>
      </MyBlogLayout >
    )
  }
}
export default gatsbyPage;