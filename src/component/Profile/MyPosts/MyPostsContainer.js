
import { addNewPost} from '../../Redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getMapedPosts, getMyPostInputValue} from "../../Redux/ReduxSelectors/profile-selector";




let mapStateToProps = (state) => {
    return {
        posts: getMapedPosts(state),
        inputValue: getMyPostInputValue(state)
    }
}


const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)

export default MyPostsContainer
