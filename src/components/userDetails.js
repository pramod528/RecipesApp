import React, { Component } from 'react';
import { getDetailPost } from '../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class UserDetail extends Component {
    componentDidMount() {
        console.log("userdetail is calling", this.props);
        this.props.getUserDetail(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className='col-md-6'>
                        <div className="card" >
                            <div className="card-header">
                                {this.props.item.name}
                            </div>
                            <div className="card-body">
                                {this.props.item.username}
                            </div>
                            <div className="card-footer">Footer</div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div>
                    <Link to='/'>Back</Link>
                </div>
            </div>

        )
    }
}
const mapStoreToProps = (store) => {
    return {
        item: store.rA.userDetail
    }
}

const mapDispatchToStore = (dispatch) => {
    return {
        getUserDetail: (id) => dispatch(getDetailPost(id))
    }

}
export default connect(mapStoreToProps, mapDispatchToStore)(UserDetail);