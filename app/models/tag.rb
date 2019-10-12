# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  color      :string
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  validates :name, :card_id, presence: true
  belongs_to :card


end
