class TrucksController < ApplicationController

  def index
    @trucks = Truck.all
    respond_to do |format|
      format.html {}
      format.json { render json: @trucks }
      format.js {}
    end
  end

  private

end
