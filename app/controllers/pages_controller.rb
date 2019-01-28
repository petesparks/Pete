class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :portfolio, :contact]

  def home
  end

  def portfolio
  end
end
