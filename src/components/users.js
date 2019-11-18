import React from 'react';
import { getPosts, search } from '../action';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
       
        if(e.target.value === ''){
            this.props.getUsers();
        }
        this.setState({

            name : e.target.value
        })
       
    }
    search = (e) => {
        console.log(this.state.name);
        this.props.search(this.state.name);
    }
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (

            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>Users</h2>
                </div>
                <div className='row'>
                <input type="text"  name="name" value={this.state.name} onChange={e => this.handleChange(e)}></input>
                        <button onClick={this.search}>search</button>
                        
                </div>
                    <div className='col-md-6'>

                      
                       
                    </div>
                </div>
                <div className="row">
                    {this.props.items.length === 0? <div>
                        <h3>No Results Found</h3>
                    </div>:this.props.items.map((item, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card" >
                                <div className="card-header">
                                    <Link to={`/userdetail/${item.id}`}>{item.name}</Link>

                                </div>
                                <div className="card-body">
                                    <div>Name:<span>{item.username}</span></div>

                                    <div> Email:<span>{item.email}</span></div>
                                    <div>Website:<span>{item.website}</span></div>

                                </div>
                                <div className="card-footer">Footer</div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        );

    }

}
const mapStoreToProps = (store) => {
    return {
        a: store.rA.a,
        b: store.rB.b,
        items: store.rA.jsonPlaceholders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getPosts()),
        search: (name) => dispatch(search(name))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(User);
