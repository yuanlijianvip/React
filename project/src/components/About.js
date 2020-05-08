import React, { Component } from 'react';

class About extends Component {
    render() {
        console.log(this.props)
        let {search} = this.props.location
        console.log(search)
        //?id=8&channel=999
        let params = new URLSearchParams(search);
        console.log('id:',params.get('id'));
        console.log('channel:',params.get('channel'))
        return (
            <div>
                关于我们
            </div>
        );
    }
}

export default About;