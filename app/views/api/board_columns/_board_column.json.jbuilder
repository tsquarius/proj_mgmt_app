json.extract! board_column, :id, :title, :order
json.board_columns do 
    json.set! board.board_columns.id do
      board.board_columns.each do |bc|
        json.extract! bc, :id, :title
      end
    end
end