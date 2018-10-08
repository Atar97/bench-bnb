# == Schema Information
#
# Table name: parks
#
#  id          :bigint(8)        not null, primary key
#  description :string
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image       :string
#

class Park < ApplicationRecord
  validates :lat, :lng, presence: true
  validates :description, length: {maximum: 140}

  def self.in_bounds(bounds)
    Park.where("lat > ? AND lat < ?",
      bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f)
      .where("lng > ? AND lng < ?",
        bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f)
  end

end
