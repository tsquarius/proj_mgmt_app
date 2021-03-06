json.boards do
  @boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board', board: board
    end
  end
end

json.boardColumns do
  @boards.each do |board|
    board.board_columns.each do |bc|
      json.set! bc.id do
        json.partial! 'api/board_columns/board_column', board_column: bc
      end
    end
  end
end

json.cards do
  @boards.each do |board|
    board.cards.each do |card|
      json.set! card.id do
        json.partial! 'api/cards/card', card: card
      end
    end
  end
end

json.comments do
  @boards.each do |board|
    board.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end

json.tags do
  @boards.each do |board|
    board.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end
end