class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.integer :member_id, null: false
      t.integer :collection_id, null: false
      t.timestamps
    end

    add_index :members, [:member_id, :collection_id], unique: true
    
  end
end
