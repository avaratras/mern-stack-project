import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Excercise = props => (
    <tr>
        <td>{props.excercise.username}</td>
        <td>{props.excercise.description}</td>
        <td>{props.excercise.duration}</td>
        <td>{props.excercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.excercise._id}>Edit</Link> | <a href="#" onClick={()=>{props.deleteExcercise(props.excercise._id)}}>Delete</a>
        </td>
    </tr>
)

export default class ExcerciseList extends Component {
    constructor(props){
        super(props);

        this.deleteExcercise = this.deleteExcercise.bind(this);
        this.state = {
            excercise: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/excercise')
        .then(res =>{
            this.setState({
                excercise: res.data
            })
        }).catch((err) =>{
            console.log(err);
        })
    }

    deleteExcercise(id){
        axios.delete('http://localhost:5000/excercise/delete/'+ id)
        .then(res => console.log(res.data));
        this.setState({
            excercise: this.state.excercise.filter(el => el._id !== id)
        })
    }

    excerciseList(){
        return this.state.excercise.map(currentexcercise =>{
            return <Excercise excercise={currentexcercise} deleteExcercise={this.deleteExcercise} key={currentexcercise._id}/>
        })
    }
    render(){
        return(
            <div>
                <h3>Logged Excercise</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.excerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}