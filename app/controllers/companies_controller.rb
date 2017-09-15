class CompaniesController < ApplicationController

  def index
    @companies = Company.all.to_json
  end

  def create
    @company = Company.new(company_params)

    if @company.save
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end

  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
