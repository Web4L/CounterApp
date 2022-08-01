import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import componentTreeImg from './images/component-tree.png';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
  }
  
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters })
  }

  handelReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      })
      this.setState({ counters });
  }

  render (){
    return (
      <div>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters handleReset={this.handelReset} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete} counters={this.state.counters}/>
          <img src={componentTreeImg} alt="component tree img" style={{maxWidth: "100%"}}/>
        </main>
      </div>
    );
  }
}
 
export default App;
