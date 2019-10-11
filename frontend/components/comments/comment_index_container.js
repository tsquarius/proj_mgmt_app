import { postComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mapStateToProps = ({entities}, {cardId}) => ({
  commentsArr: entities.cards[cardId].comments
});

const mapDispatchToProps = dispatch => ({
  postComment: (cardId, comment) => dispatch(postComment(cardId, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);