json.comment do
  json.partial! 'api/comments/comment', comment: @comment
end

json.card do
  json.partial! 'api/cards/card', card: @comment.card
end