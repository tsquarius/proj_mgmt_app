json.boardColumn do
  json.extract! @board_column, :id, :title, :order
  json.cards @board_column.ordered_cards
end

json.board do
  json.set! @board_column.board.id do
    json.partial! 'api/boards/board', board: @board_column.board
  end
end