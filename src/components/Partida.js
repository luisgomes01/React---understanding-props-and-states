import React from 'react'
import './Partida.css'

export default class Partida extends React.Component {
    render(){
        return(
            <div className='partida'>
                <h5>Maracanã/RJ</h5>
                <p className='data'>01/06/2021 - 19:00h</p>
            </div>
        );
    }
}