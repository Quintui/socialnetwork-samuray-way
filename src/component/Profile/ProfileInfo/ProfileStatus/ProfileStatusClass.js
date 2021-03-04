import React, {Component} from 'react';
import {ProfileStatusInput, ProfileStatusText, ProfileStatusWrap} from "./ProfileStatusComponent";

class ProfileStatusClass extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    ActivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    DeactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    OnChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState,) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }


    render() {
        return (
            <>
                <ProfileStatusWrap>
                    {
                        this.state.editMode
                            ?
                            <ProfileStatusInput onChange={this.OnChangeStatus}
                                                autoFocus={true}
                                                onBlur={this.DeactivateEditMode}
                                                value={!this.state.status ? '' : this.state.status}/>
                            :
                            <ProfileStatusText onDoubleClick={this.ActivateEditMode}>
                                {!this.props.status
                                    ? 'Add Status'
                                    : this.props.status}
                            </ProfileStatusText>
                    }
                </ProfileStatusWrap>
            </>
        );
    }
}


export default ProfileStatusClass;
