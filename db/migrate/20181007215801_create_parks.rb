class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :description
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
