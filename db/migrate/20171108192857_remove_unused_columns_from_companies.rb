class RemoveUnusedColumnsFromCompanies < ActiveRecord::Migration[5.1]
  def change
    remove_column :companies, :show, :boolean
    remove_column :companies, :editable, :boolean
  end
end
