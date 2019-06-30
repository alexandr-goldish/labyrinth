import React from 'react'
import './App.css';
import MapGame from './components/map.component/map';
import Arrow from './components/arrow.component/arrow';

class App extends React.Component {
  state = {
    points: [
      {
        id: 0,
        err: ['t', 'l']
      }, {
        id: 1,
        err: ['t']
      }, {
        id: 2,
        err: ['t', 'r']
      }, {
        id: 3,
        err: ['l']
      }, {
        id: 4,
        err: ['']
      }, {
        id: 5,
        err: ['r']
      }, {
        id: 6,
        err: ['b', 'l']
      }, {
        id: 7,
        err: ['b']
      }, {
        id: 8,
        err: ['b', 'r']
      }
    ],
    currentPoint: undefined,
    finalPoint: undefined,
    arrayArrows: undefined,
    directionArrows: ['t', 'r', 'b', 'l'],
    countWin: 0,
    countLose: 0
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    let arrayArrowsTemporary = [],
        randomPoint = Math.floor(0 + Math.random() * (9 - 0)),
        position = randomPoint;
    for (let i = 0; i < 10; i++) {
      do {
        arrayArrowsTemporary[i] = this.state.directionArrows[Math.floor(0 + Math.random() * (4 - 0))];
      } while (this.state.points[position].err.includes(arrayArrowsTemporary[i]));

      switch (arrayArrowsTemporary[i]) {
        case 't':
          position -= 3
          break;

        case 'b':
          position += 3
          break;

        case 'r':
          position += 1
          break;

        default:
          position -= 1
      }
    };

    this.setState({
      arrayArrows: arrayArrowsTemporary,
      finalPoint: position,
      currentPoint: randomPoint
    });
  }
  getPoint = (value) => {
    if(value === this.state.finalPoint) {
      let rang = this.state.countWin+1
      this.setState({
        countWin: rang
      })
    }
    else {
      let rang = this.state.countLose+1
      this.setState({
        countLose: rang
      })
    }
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  render() {
    return (<div className='App'>
      <h1>Лабиринт</h1>
      <div className="coin">
        <div>Win: {this.state.countWin}</div>
        <div>Lose: {this.state.countLose}</div>
      </div>
      <MapGame points={this.state.points} currentPointForComponent={this.state.currentPoint} finalPointForComponent={this.state.finalPoint} selectedPoint={this.getPoint}/>
      <Arrow arrayArrowForComponent={this.state.arrayArrows}/>
    </div>)
  }
}

export default App;
