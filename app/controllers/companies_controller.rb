class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
  end

  def create
    @company = Company.new(company_params)

    if @company.save

      render json function here
      @company.as_json
    else

    end

  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
