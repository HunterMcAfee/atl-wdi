import React, { Component } from 'react';
import pizzaoven from '../images/pizzaoven.jpg'

class Navbar extends Component {
    render () {
        return (
            <div id="description" className="description">
                <img src={pizzaoven} alt="" />
                <p>Deep v jean shorts tumeric lo-fi. Pabst salvia hammock, neutra before they sold out fingerstache paleo viral flannel mlkshk kombucha echo park crucifix gochujang unicorn. Swag chia umami chillwave scenester. Scenester pop-up you probably haven't heard of them master cleanse. Poutine next level yr trust fund, meditation cloud bread flexitarian narwhal knausgaard schlitz four dollar toast offal put a bird on it lo-fi fanny pack. Literally skateboard migas mumblecore, celiac waistcoat health goth. Humblebrag cred neutra portland chillwave master cleanse keffiyeh copper mug enamel pin hexagon offal. Vape pop-up paleo cliche street art. Next level heirloom gluten-free viral cred. Crucifix ramps edison bulb,</p>
            </div>
        )
    }
}

export default Navbar;