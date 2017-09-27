class MakeCompaniesEditable < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :editable, :boolean
  end
end
