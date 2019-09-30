class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :author_id, null: false
      t.string  :title, null: false
      t.integer :collection_id, null: false
      t.integer :order, null: false
      t.timestamps
    end

    add_index :boards, :author_id
    add_index :boards, :collection_id

  end
end
