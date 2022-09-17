class ApplicationController < ActionController::Base  
    
    skip_before_action :verify_authenticity_token

    include Knock::Authenticable
    
    before_action :fetch_user
    def fetch_user
         #check if the user is logged in
        if session[:user_id].present?
            @current_user = User.find_by id:session[:user_id]
        end

        
        unless @current_user.present?
            session[:user_id] = nil #force logout of invalid ID
        end
    end
     # session[:user_id] = nil unless @current_user.present?

    def check_if_logged_in
        #If the current request (which could be any action of any controller)
        #is coming from a user who is not logged in, redirect them to the login page
        unless @current_user.present?
            flash[:error] = 'You must be logged in to perform that action'
            redirect_to login_path
        end
    end
    

end
