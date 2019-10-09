json.board do
  json.extract! @board, :id, :title, :order
  json.columns @board.ordered_columns
end

json.collection do
  json.set! @board.collection.id do
    json.partial! 'api/collections/collection', col: @board.collection
  end
end