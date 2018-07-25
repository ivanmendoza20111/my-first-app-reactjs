import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(){
        super();
        this.state={
            title:'',
            responsable:'',
            description:'',
            priority:'low'
        }

        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInput(e){
        //e.target.value valor del input
        //e.target.name nombre del input en que estoy escribiendo 

        //Para modificar datos del state, traigo el nombre y el value y se lo asigno al state
        const {value,name}=e.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);

    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Save" />
                </form>
            </div>
        );
    }
}

export default TodoForm;