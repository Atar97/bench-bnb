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
#

class Park < ApplicationRecord
  validates :lat, :lng, presence: true
  validates :description, length: {maximum: 140}

end
