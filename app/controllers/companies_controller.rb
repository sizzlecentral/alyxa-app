class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
  end

  def create
    @company = Company.new(company_params)

    if request.xhr?
      respond_to do |format|

        format.html do
          if @company.save
            redirect_to companies_path
          else

          end
        end

        format.json do
          if @company.save
            render json: @company
          else

          end
        end

      end
    end

  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image)
  end

end
