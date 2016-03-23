class CreateOrigins < ActiveRecord::Migration
  def change
    create_table :origins do |t|
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.integer :radius, null: false

      t.timestamps null: false
    end
  end
end
