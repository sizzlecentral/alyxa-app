class AddShowToCompanies < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :show, :boolean
  end
end
