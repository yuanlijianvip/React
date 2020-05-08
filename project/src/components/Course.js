import React, { Component } from 'react';
import {Link} from 'react-router-dom'
 
class Course extends Component {
    constructor(params) {
        super(params)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
      fetch('data/courseList.json')
        .then(respones => {
          return respones.json()
        })
        .then(res => {
          if (res.errno*1 === 0) {
            this.setState({
              list: res.data
            })
          } else {
            alert('请稍后重试')
          }
          console.log(res)
        }).catch(err => {
          console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h1>课程列表</h1>
                <ul>
                  {
                    this.state.list.map(item => (
                      <li key={item.id}>
                        <Link to={`/course/${item.id}`}>{item.title}</Link>
                      </li>
                    ))
                  }
                </ul>
            </div>
        );
    }
}

export default Course;