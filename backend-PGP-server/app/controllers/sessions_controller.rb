class SessionsController < ApplicationController
  # React frontend, so we wont have this token
  # skip_before_action :verify_authenticity_token, raise:false

  def new
  end

  def create
    # 1. Check that the email address entered is actually in the DB
    user = User.find_by email: params[:email]

    # 2. correct password for this email address?
    if user.present? && user.authenticate(params[:password] )

      session[:user_id] = user.id   

      redirect_to root_path  # back to /

    else

      # Either user was nil (no account with that email address), or the password given did not, when encrypted, match error message

      flash[:error] = 'Invalid email address or password'

      redirect_to login_path   
    end 

  end  

  def destroy
    session[:user_id] = nil    
    redirect_to login_path    
  end
end
