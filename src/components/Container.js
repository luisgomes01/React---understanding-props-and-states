import React from 'react'
import Time from './Time'
import Partida from './Partida'
import './Container.css'

export default class Container extends React.Component {
    render(){
        return(
            <div className='container'>
                <Time time='Vasco' status='Casa' />
                <Partida />
                <Time time='Flamengo' status='Visitante' />

            </div>
        );
    }
}