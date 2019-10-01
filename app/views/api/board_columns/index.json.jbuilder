@board_columns.each do |board_column|
  json.set! board_column.id do
    json.extract! board_column, :id, :title, :order
  end
end