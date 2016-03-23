class OriginsController < ApplicationController

  def create
    @origin = Origin.new(whitelisted_params)
    @origin.latitude = 37.7936
    @origin.longitude = 122.3958

    respond_to do |format| 
      if @origin.save
        format.js {}
      else
        format.js {}
      end
    end
  end

  private

  def whitelisted_params
    params.require(:origin).permit(:radius)
  end
end
