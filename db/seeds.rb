# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

truck_list = HTTParty.get('https://data.sfgov.org/resource/6a9r-agq8.json')

def create_truck(truck_data)
  t = Truck.new
  t.address = truck_data['address']
  t.name = truck_data['applicant']
  t.status = truck_data['status']
  t.days_hours = truck_data['dayshours']
  t.food_items = truck_data['fooditems']
  t.latitude = truck_data['latitude']
  t.longitude = truck_data['longitude']

  if (t.latitude && t.longitude)
    t.save!
  end
end

truck_list.each do |truck|
  create_truck(truck)
end