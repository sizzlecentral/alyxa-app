class CompaniesController < ApplicationController

  def index
    @companies = Company.all.as_json
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
          if @company.update(company_params)
            render json: @company
          end
        end

      end
    end
  end

  private

  def company_params
    params.require(:company).permit(:name, :url, :image, :editable)
  end

end
