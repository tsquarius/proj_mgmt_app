json.cards do
  @cards.each do |card|
    json.set! card.id do
      json.partial! 'api/cards/card', card: card
    end
  end
end

json.comments do
  @cards.each do |card|
    card.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end

json.tags do
  @cards.each do |card|
    card.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end
end