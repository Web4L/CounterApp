import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component { 
    render() { 
        const { handleReset, counters, handleDelete, handleIncrement, handleDecrement } = this.props;
        
        return (
        <div>
            <button onClick={handleReset} style={{color: '#fff'}} className="btn bg-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter key={counter.id} handleDelete={handleDelete} handleIncrement={handleIncrement} handleDecrement={handleDecrement} counter={counter} />
            )}
        </div>
        );
    }
}
 
export default Counters;