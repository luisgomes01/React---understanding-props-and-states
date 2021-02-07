import React from 'react'
import './Time.css'

export default class Time extends React.Component {
    constructor(){
        super();
        this.state = {
            contador: 0,
        }        
    }

    adicionar = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    render(){
        return(
            <div className='father'>
                <label><p>{this.props.status}</p></label>
                <div className='time-container'>
                    <p className='margin-top'>{this.props.time}</p>
                    <p className='contador'>{this.state.contador}</p>
                    <button onClick={this.adicionar}>GOL!</button>
                </div>
            </div>
        );
    }
}