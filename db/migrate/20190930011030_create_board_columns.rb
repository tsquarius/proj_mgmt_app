class CreateBoardColumns < ActiveRecord::Migration[5.2]
  def change
    create_table :board_columns do |t|
      t.integer :board_id, null: false
      t.string :title, null: false
      t.integer :order, null: false
      t.timestamps
    end

    add_index :board_columns, :board_id
  end
end
