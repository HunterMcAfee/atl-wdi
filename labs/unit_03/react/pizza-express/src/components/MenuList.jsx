import React, { Component } from 'react';
import MenuItem from './MenuItem'
import pizzaData from '../pizzaData'

class MenuList extends Component {
    render () {
        return (
            <div id="menu" className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                {pizzaData.map((pizza, i) => {
                     return <MenuItem key={i} pizza={pizza} />
                 })}
                 </div>
            </div>
        )
    }
}

export default MenuList;