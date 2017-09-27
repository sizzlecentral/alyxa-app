class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
  end

  def show
    @company = Company.find(params[:id])
  end

  def create
    @company = Company.new(company_params)

    if request.xhr?
      respond_to do |format|

        format.json do
          if @company.save
            render json: @company
          else

          end
        end

      end
    end

  end

  def edit
    @company = Company.find(params[:id])
  end

  def update
    @company = Company.find(params[:id])

    if request.xhr?
      respond_to do |format|

        format.json do
          if @company.update
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
