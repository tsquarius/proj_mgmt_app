class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :author_id, null: false
      t.boolean :archived, null: false, default: false
      t.string :title, null: false
      t.string :color
      t.date :due_date
      t.text :description
      t.integer :board_column_id, null: false
      t.integer :order
      t.timestamps
    end

    add_index :cards, :author_id
    add_index :cards, :board_column_id
  end
end
