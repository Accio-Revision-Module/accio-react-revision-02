import { Component } from "react";

export default class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState({
      count: this.count + 1,
    });
  }

  componentDidMount() {
    console.log("Only once");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("not visible anymore");
  }

  render() {
    return <div>ClassCom</div>;
  }
}
