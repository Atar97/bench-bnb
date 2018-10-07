class Api::ParksController < ApplicationController
  def index
    @parks = Park.all
  end

  def create
    @park = Park.new(park_params)
    if @park.save
      render :show
    else
      render json: @park.errors.full_messages, status: 406
    end
  end

  private

  def park_params
    params.require(:park).permit(:lat, :lng, :title)
  end



end
