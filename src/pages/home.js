import React, { useEffect } from "react";
import MyBlogLayout from "../Layouts";
import SEO from "../components/seo";
// import WithLanguage from "../hoc/hoc"
// import { observable, action } from "mobx";
import { observer } from "mobx-react";


// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
require("echarts-liquidfill")
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// class Style {
//   @observable name = "任鹏"
//   @action changeName() {
//     this.name += "任鹏"
//   }
// }
// const s = new Style();
// @observer
// class MyDiv extends React.Component {
//   changeName() {
//     s.changeName();
//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.changeName.bind(this)}>点击</button>
//         <div>{s.name}</div>
//       </>
//     )
//   }
// }

const MyDiv = () => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById("myChart"));
    const option = {
      series: [{
        type: 'liquidFill',
        data: ["0.6", 0.55, 0.4, 0.25],
        outline: {
          show: false
        },
        backgroundStyle: {
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0)',
          shadowBlur: 20
        },
        shape: `path://M268.51,443.25c0-49.67,0-99.34,0-149.01c0-11.07,7.58-18.62,18.71-18.63c60.79-0.01,121.58-0.01,182.36,0
	c10.42,0,18.3,7.93,18.3,18.37c0,99.58-0.04,199.16,0.06,298.74c0.01,9.75-8.2,18.85-18.78,18.81
	c-60.71-0.19-121.42-0.09-182.12-0.09c-10.49,0-18.53-8-18.54-18.46C268.5,543.07,268.51,493.16,268.51,443.25z M423.44,387.42
	c0-1.25,0-2.19,0-3.12c0-19.68,0.01-39.36,0-59.04c0-10.38-6.21-16.61-16.54-16.62c-19.12-0.01-38.24-0.01-57.36,0
	c-10.36,0-16.53,6.2-16.54,16.6c-0.01,19.68,0,39.36,0,59.04c0,0.94,0,1.88,0,2.92c-0.91,0-1.54,0.07-2.15-0.01
	c-11.82-1.47-23.64-2.92-35.45-4.47c-3.66-0.48-5.8,0.63-7.04,4.14c-1.15,3.24-2.28,6.48-3.37,9.74c-1.44,4.31,0.29,7.31,4.83,7.96
	c9.81,1.41,19.64,2.73,29.47,3.98c4.5,0.58,9.03,0.93,13.72,1.4c0,1.24,0,2.27,0,3.3c0,49.52-0.01,99.03,0.01,148.55
	c0,9.97,6.24,16.21,16.15,16.21c19.36,0.01,38.72,0.01,58.08-0.01c1.35,0,2.74-0.02,4.06-0.28c7.37-1.47,12.14-7.61,12.15-15.65
	c0.01-49.68,0.01-99.35,0.01-149.03c0-1,0-2.01,0-3.12c3.27-0.31,6.22-0.52,9.15-0.89c11.42-1.46,22.84-2.91,34.24-4.51
	c4.37-0.61,6.04-3.66,4.62-7.88c-1.14-3.41-2.29-6.82-3.53-10.2c-1.09-2.98-3.29-4.23-6.39-3.79c-6.96,1-13.91,2.1-20.89,2.99
	C435.03,386.35,429.39,386.81,423.44,387.42z M360.85,413.96c-0.01,49.09-0.01,98.19,0,147.28c0,3.8,1.24,5.03,5.02,5.04
	c8.08,0.02,16.15,0.01,24.23,0c4.42,0,5.51-1.1,5.51-5.52c0-48.85,0-97.71,0-146.56c0-0.85,0-1.71,0-2.69c-11.68,0-23.07,0-34.62,0
	C360.93,412.41,360.85,413.19,360.85,413.96z M395.59,387.33c0.01-20.87,0.02-41.74-0.01-62.6c0-2.96-1.39-4.22-4.56-4.23
	c-8.4-0.03-16.79-0.02-25.19-0.01c-3.88,0.01-4.99,1.12-4.99,5.01c-0.01,20.31-0.01,40.62,0,60.92c0,0.76,0.09,1.53,0.15,2.5
  c11.59,0,22.91,0,34.44,0C395.52,388.11,395.59,387.72,395.59,387.33z`,
        label: {
          position: ['38%', '40%'],
          formatter: function () {
            return '';
          },
          fontSize: 40,
          color: '#D94854'
        }
      }]
    };
    myChart.setOption(option);
  })
  return (
    <>
      <div id="myChart" style={{ width: 500, height: 500 }}></div>
    </>
  )
}

const MYDiv = observer(MyDiv)

// const BlogContent = (props) => {
//   const { content, color } = props;
//   // const color = "red";
//   return (
//     <div style={{ background: color }}>
//       {content.name}
//     </div>
//   )
// }


// const NewContent = WithLanguage("content")(BlogContent)



const HomePage = () => {
  return (
    <MyBlogLayout>
      <SEO title="Home" />
      {/* <NewContent color="red" /> */}
      <MYDiv />
    </MyBlogLayout >
  )
}
export default HomePage;