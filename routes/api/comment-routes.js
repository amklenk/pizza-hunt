const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/#ofpizzaId
router.route('/:pizzaId').post(addComment);

// /api/comments/#ofpizzaId/#ofcommentId
router.route('/:pizzaId/:commentId').delete(removeComment);

// /api/comments/#ofpizzaId/#ofcommentId
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

// /api/comments/#ofpizzaId/#ofcommentId/#ofreplyId
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;