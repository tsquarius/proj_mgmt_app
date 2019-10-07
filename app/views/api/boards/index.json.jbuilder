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
        json.extract! bc, :id, :title, :board_id, :order, :ordered_cards
      end
    end
  end
end

json.cards do
  @boards.each do |board|
    board.cards.each do |card|
      json.set! card.id do
        json.extract! card, :id, :title, :board_column_id, :order
      end
    end
  end
end