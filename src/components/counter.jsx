import React, { Component } from 'react';

class Counter extends Component {
  // this is the local state
  // state = {
  //   value: this.props.counter.value
  // };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = ()=> {
  //   this.setState({value: this.state.value +1});
  // }
  componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // if(prevProps.counter.value !== this.props.counter.value){
    //   // Ajax call and give new data from the server
    // }
  }

  componentWillUnmount(){
    console.log("Counter - Unmounted");
  }
  render() {
    console.log('Counter - Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          style={{ marginLeft: '.5rem' }}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ marginLeft: '.5rem' }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
      </div> 

    );
  }
  getBadgeClasses() {
    let classes = "badge text-bg-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
 
export default Counter;
