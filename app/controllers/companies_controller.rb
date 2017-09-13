class CompaniesController < ApplicationController

  def index
    @companies = Company.all
  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
