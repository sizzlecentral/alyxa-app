class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
  end

  def create
    @company = Company.new(params[:company])

    respond_to do |format|
      if @company
        format.html { redirect_to @company, notice: 'User was successfully created.' }
      else
        format.html { render action: "new" }
      end

    end

  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
