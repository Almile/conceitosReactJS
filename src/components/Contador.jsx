import { Component } from 'react'
// Implementa um contador simples com botões para incrementar e decrementar o valor.
class Contador extends Component {
 // Construtor - inicializa o componente com o valor do contador como 0.
    constructor(props){
        super(props)
        this.state = {count: 0}
    }
// Função para incrementar (somando + 1)
    increment = () => {
        this.setState({ count: this.state.count + 1})
    }
// Função para decrementar (subtraindo 1 até chegar a zero)
    decrement = () => {
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1})
        }
    }
 // define como o componente será exibido para o usuário.
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
// Exporta o componente para que possa ser utilizado em outros arquivos
export default Contador