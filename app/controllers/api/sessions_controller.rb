class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_email(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      render :show
    else
      render json: {errors: 'Invalid Credentials'}, status: 422
    end
  end

  def destroy
    if logout!
      render json: {}
    else
      render json: {errors: 'No user to logout'}, status: 404
    end
  end

end
