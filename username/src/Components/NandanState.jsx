import React from "react";


export default class NandanState extends React.Component {

    constructor(props) {
  
      super(props);
  
       this.state = {
  
        make: "Yamaha",
  
        model: "R15",
  
        color: "blue"
  
      };
  
    }
  
    changeBikeColor = () => {
  
      this.setState({color: "black"});
      let a=1
      console.log(a);
      a=a+1;

  
    }
  
    render() {
  
      return (
  
        <div>
  
          <h2>My {this.state.make}</h2>
  
          <p>
  
            It is a {this.state.color}
  
            {this.state.model}.
  
          </p>
  
          <button
  
            type="button"
  
            onClick={this.changeBikeColor}
  
          >Change color</button>
  
        </div>
  
      );
  
    }
  
  }