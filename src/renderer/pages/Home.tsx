import * as React from "react"

export default class Home extends React.Component {
  public render() {
    return (
      <div>
        <p onClick={this.click}>HOME1234567!!!!!</p>
      </div>
    )
  }

  private click() {
    console.log("test")
  }
}
