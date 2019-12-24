class SessionsController < ApplicationController
    
    def new
       user = User.find_by(email: params[:email])

       if user && user.authenticate(params[:password])
        login!
        render json: {
            logged_in: true,
            user: user
        }
       else 
            render json: {
                status: 401,
                logged_in: false,
                errors: ['unable to login']
            }
        end
    end

end