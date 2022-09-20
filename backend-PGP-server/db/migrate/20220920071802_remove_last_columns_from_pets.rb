class RemoveLastColumnsFromPets < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :last_fed
    remove_column :pets, :last_fought
    remove_column :pets, :last_slept
    remove_column :pets, :last_stretched
    remove_column :pets, :last_drank

  end
end
