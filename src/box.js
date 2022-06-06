import React from 'react';
import './index.css';

class SomeName extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            color: this.colorchange()
        }
        this.changeColor = this.changeColor.bind(this)
      }

    render (){
      return <div style = {{backgroundColor: this.state.color }} onMouseOver = {this.changeColor} className = "box"></div>
    }

    changeColor() {
      this.setState({color: this.colorchange()})
    }

colorchange()
        {
            // var colors = ["red","green","blue"];
            // var randomcolor= colors[Math.floor(Math.random()*colors.length)];
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return ["rgb(",r,",",g,",",b,")"].join("");
        }
}

  export default SomeName;