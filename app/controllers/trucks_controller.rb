class TrucksController < ApplicationController

  def index
    @trucks = Truck.all
    @origin = Origin.new
    respond_to do |format|
      format.html {}
      format.json { render json: @trucks }
    end
  end

  def create
    respond_to do |format|
      format.js {}
    end
  end

  private

end
