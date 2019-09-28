class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :collections, :author_id
  end
end
