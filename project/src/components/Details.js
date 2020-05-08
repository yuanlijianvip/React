import React, { Component } from 'react';

class Details extends Component {
    constructor(params) {
        super(params)

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log(res)
                if (res.errno*1 === 0) {
                    this.setState({
                        data: res.data
                    })
                } else {
                    alert('error')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    shouldComponentUpdate(nextprops, nextstate) {
        return nextprops.match.params.id !== this.props.match.params.id || nextstate.data.id !== this.state.data.id
    }

    componentDidUpdate() {
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log(res)
                if (res.errno*1 === 0) {
                    this.setState({
                        data: res.data
                    })
                } else {
                    alert('error')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        // console.log(this.props.match)

        let {params} = this.props.match
        return (
            <div>
                <h1>课程详情</h1>
                <p>课程ID: {this.state.data.id}</p>
                <p>课程名称: {this.state.data.title}</p>
                <p>老师: {this.state.data.teacher}</p>
                <p>课程介绍: {this.state.data.intro}</p>
            </div>
        );
    }
}

export default Details;