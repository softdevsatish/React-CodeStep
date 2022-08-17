
import React, { Component } from 'react'

export class PureCompo extends Component {

    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            </div >
        )
    }
}

export default PureCompo