import React from 'react';

class Images extends React.Component { 

    render() {
        return <img src={this.props.src} alt={this.props.alt} className="App-logo"/>
    }

}

export default Images;