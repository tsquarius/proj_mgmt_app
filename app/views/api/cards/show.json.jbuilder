json.card do
  json.extract! @card, :id, :title, :order, :archived, :color, :due_date, :description
end

json.boardColumn do
  json.set! @card.board_column.id do
    json.partial! 'api/board_columns/board_column', board_column: @card.board_column
  end
end