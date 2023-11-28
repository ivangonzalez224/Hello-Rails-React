# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Message.create(greet: 'Happy coding, fellow developer!')
Message.create(greet: 'Welcome to the full stack app!')
Message.create(greet: 'Hello coders!')
Message.create(greet: 'Good day and keep up the great work, developers!')
Message.create(greet: 'Have a wonderful day!')