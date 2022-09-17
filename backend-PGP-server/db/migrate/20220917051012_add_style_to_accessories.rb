class AddStyleToAccessories < ActiveRecord::Migration[5.2]
  def change
    add_column :accessories, :style, :string
  end
end
