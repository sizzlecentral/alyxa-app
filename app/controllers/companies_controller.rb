class CompaniesController < ApplicationController

  def index
    @companies = Company.all
    render component: 'Companies', props: { companies: @companies }
  end

end
