@board_columns.each do |board_column|
  json.set! board_column.id do
    json.partial! 'api/board_columns/board_column', board_column: board_column
  end
end