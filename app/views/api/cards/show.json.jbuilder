json.card do
  json.partial! 'api/cards/card', card: @card
end

json.boardColumn do
  json.set! @card.board_column.id do
    json.partial! 'api/board_columns/board_column', board_column: @card.board_column
  end
end