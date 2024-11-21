import { Component } from 'react'

class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {count: 0}
    }

    increment = () => {
        this.setState({ count: this.state.count + 1})
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1})
        }
    }

    render(){
        return (
            <div className='content'>
                <ul>
                <h2>{this.state.count}</h2>

                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
                </ul>
            </div>
        )
    }
}

export default Contador