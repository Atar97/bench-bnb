# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Park.destroy_all

  User.create!([
    {username: 'atar97', email:'austin', password: 'password'},
    {username: 'theLastSultan', email: 'blake', password: 'password'}
    ])

  Park.create!([
    {description: 'Glen Canyon Park', lat: 37.742253, lng: -122.445157},
    {description: 'Mt. Davidson', lat: 37.739733, lng: -122.454807},
    {description: 'Golden Gate Park', lat: 37.768699, lng: -122.476996}
    ])
end
