import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div className="location">
                <p>{this.props.contact.name}</p>
                <strong>Address:</strong>
                <p>{this.props.contact.address}</p>
                <strong>Phone:</strong>
                <p>{this.props.contact.phone}</p>
            </div>
        )
    }
}

export default Location;