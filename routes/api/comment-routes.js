const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/#ofpizzaId
router.route('/:pizzaId').post(addComment);

// /api/comments/#ofpizzaId/#ofcommentId
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;