class Api::ParksController < ApplicationController
  def index
    p params
    @parks = Park.in_bounds(params[:bounds])
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
    params.require(:park).permit(:lat, :lng, :description)
  end



end
