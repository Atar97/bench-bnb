class AddUniqueIndexForPoints < ActiveRecord::Migration[5.2]
  def change
    add_index :parks, [:lat, :lng], unique: true
  end
end
