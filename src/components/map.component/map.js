import React from 'react';
import './map.css';

class MapGame extends React.Component {
  state = {
    arrayColumn: [],
    show: false,
    classElement: ''
  }

  componentWillMount() {
    let startSlice = 0,
        finishSlice = 3;
    for (let i = 0; i < 3; i++) {
        this.state.arrayColumn.push(this.props.points.slice(startSlice, finishSlice));
        startSlice = finishSlice;
        finishSlice += 3;
    }
  }

  viewFinalPoint = (e) => {
    this.setState({
      show: true,
      classElement: 'white'
    })
    setTimeout(() => {
      this.setState({
        show: false,
        classElement: ''
      })
    }, 2000);
    this.props.selectedPoint(Number(e.target.id));
  }

  render() {
    return (
      <div className='mapLab'>
        <div className={'mapNumber'}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>

        <div className={'flex col'}>
          <div className={'mapChar'}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
          </div>
          <table cellSpacing='10'>
            <tbody>
              {
                  this.state.arrayColumn.map((items, index)=>{
                    return (<tr key={index}>
                      {
                        items.map((item)=>{
                          return (
                            <td key={item.id} id={item.id}
                                value={item.id}
                                onClick={this.viewFinalPoint}
                                className={this.state.show && item.id === this.props.finalPointForComponent ? this.state.classElement : null}
                            >
                              { this.props.currentPointForComponent === item.id ? "⚑" : "" }

                              { this.state.show && item.id === this.props.finalPointForComponent ? "✔" : "" }

                            </td>
                          )
                        })
                      }
                      </tr>)
                  })
              }
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
export default MapGame;
