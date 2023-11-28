class Api::GreetingsController < ApplicationController
  def pick
    if Message.any?
      random_greet = Message.order('RANDOM()').first
      render json: { message: random_greet.greet }
    else
      render json: { message: 'No greeting found' }, status: :not_found
    end
  end
end
