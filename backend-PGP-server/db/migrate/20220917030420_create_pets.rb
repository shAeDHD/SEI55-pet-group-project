class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :type
      t.boolean :accessories
      t.integer :level
      t.integer :experience
      t.integer :last_fed
      t.integer :last_fought
      t.integer :last_slept
      t.integer :last_stretched
      t.integer :last_drank

      t.timestamps
    end
  end
end
