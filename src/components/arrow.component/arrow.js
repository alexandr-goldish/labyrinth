import React from 'react';
import "./arrow.css";

class Arrow extends React.Component {
  render() {
    return (
      <div className='arrow'>

      {
        this.props.arrayArrowForComponent.map((item, index) => {
            return (<div className={item} key={index}>➤</div>)
        })
      }

      </div>
    );
  }
}
export default Arrow;
