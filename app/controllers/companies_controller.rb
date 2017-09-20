class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
  end

  def create
    @company = Company.new(params[:company])

    if @company.save

    else

    end

  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
