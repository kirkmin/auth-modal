class SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(params[:user])

		respond_to do |format|
			if @user
				sign_in!(@user)
				format.js
			else
				if User.find_by_username(params[:user][:username])
					flash.now[:errors] = ['Invalid password']					
				else
					flash.now[:errors] = ['Username does not exist']
				end
				format.js
			end
		end
	end

	def destroy
		sign_out!
		redirect_to :root
	end
end
