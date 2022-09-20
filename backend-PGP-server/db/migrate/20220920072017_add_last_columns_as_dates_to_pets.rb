class AddLastColumnsAsDatesToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :last_fed, :datetime
    add_column :pets, :last_fought, :datetime
    add_column :pets, :last_slept, :datetime
    add_column :pets, :last_stretched, :datetime
    add_column :pets, :last_drank, :datetime
  end
end
