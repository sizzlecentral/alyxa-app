class AddArchivedToCompanies < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :archived, :boolean
  end
end
