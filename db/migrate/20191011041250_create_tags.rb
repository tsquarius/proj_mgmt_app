class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.string :color
      t.integer :card_id, null: false
      t.timestamps
    end

    add_index :tags, :card_id
  end
end
