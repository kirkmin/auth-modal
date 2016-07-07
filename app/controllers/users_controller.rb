class UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		respond_to do |format|
			if @user.save
				sign_in!(@user)
				format.js
			else
				flash.now[:errors] = @user.errors.full_messages
				format.js
			end
		end

		# if @user.save
		# 	sign_in!(@user)
		# 	redirect_to :root, :layout => false
		# else
		# 	# flash.now[:errors] = @user.errors.full_messages
		# 	redirect_to :root, flash: {errors: @user.errors.full_messages}
		# end
	end

	private
	def user_params
		params.require(:user).permit(:username, :password)
	end
end
