import {
    addNewMessage,

} from '../Redux/dialog-reducer'
import Dialogs from "./Dialogs";

import {connect} from 'react-redux'
import {withAuthCheck} from "../hoc/withAuthHok";
import {compose} from "redux";
import {getDialogPage, getInputValue} from "../Redux/ReduxSelectors/diologs-selector";

let mapStateToProps = (state) => {
    return {
        inputValue: getInputValue(state),
        dialogPage: getDialogPage(state),
    }
}

export default compose(
    withAuthCheck,
    connect(mapStateToProps, {addNewMessage}))(Dialogs)

