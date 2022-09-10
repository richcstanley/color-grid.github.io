import React from 'react';
import './index.css';
import cat from './cat.jpg';


class Cat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render (){
    return <div className = "cat">
      <img class="cat-pic" src={cat}></img>
    </div>
  }
}

export default Cat;
