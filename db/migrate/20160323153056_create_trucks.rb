class CreateTrucks < ActiveRecord::Migration
  def change
    create_table :trucks do |t|
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.string :name, null: false
      t.string :status
      t.string :address
      t.string :days_hours
      t.string :food_items

      t.timestamps null: false
    end
  end
end
