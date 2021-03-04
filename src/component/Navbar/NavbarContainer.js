
import {connect} from 'react-redux'
import {compose} from "redux";
import Navbar from "./Navbar";
import {getNavData} from "../Redux/ReduxSelectors/navbar-selector";


let mapStateToProps = (state) => ({
    navigation: getNavData(state)
})

export default compose(
    connect(mapStateToProps, null))(Navbar)

