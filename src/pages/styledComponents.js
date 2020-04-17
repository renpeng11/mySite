import React from "react";
import MyBlogLayout from "../Layouts";

class MessageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
      status: false,
      start: false,
    }
  }
  handleClick() {
    clearInterval(interval)
    this.setState({
      start: !this.state.start,
      status: true
    })
    let interval = setInterval(() => {
      if (this.state.time > 0 && this.state.start) {
        console.log("开始了吗")
        this.setState({
          time: this.state.time - 1
        })
      } else {
        this.setState({
          time: 10,
          status: false,
        })
        clearInterval(interval)
        console.log("清除了")
      }
    }, 1000)
  }
  handleClose() {
    this.setState({
      start: false
    })
  }
  render() {
    const { autoHidden = true } = this.props;
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点击</button>
        {(!autoHidden || this.state.status) &&
          (
            < div > 任鹏{this.state.time}</div>
          )
        }
        <button onClick={this.handleClose.bind(this)}>关闭</button>
      </div >
    )
  }
}

const styledComponentsPage = () => {
  return (
    <MyBlogLayout title="styled-components">
      <MessageCard />
      <MessageCard autoHidden={false} />
    </MyBlogLayout>
  )
}
export default styledComponentsPage;