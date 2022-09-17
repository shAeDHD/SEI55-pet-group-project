class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table :moves do |t|
      t.string :name
      t.boolean :offensive
      t.integer :attack
      t.string :ability

      t.timestamps
    end
  end
end
