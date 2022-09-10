import React from 'react';
import './index.css';


class Cat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render (){
    return <div className = "cat">
      <img class="cat-pic" src="cat.jpg"></img>
    </div>
  }
}

export default Cat;
