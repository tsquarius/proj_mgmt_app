import {connect} from 'react-redux';
import CommentShow from './comment_show';

const mapStateToProps = ({entities}, {commentId}) => ({
  comment: entities.comments[commentId]
});

export default connect(mapStateToProps)(CommentShow);