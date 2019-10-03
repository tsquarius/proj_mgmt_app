# == Schema Information
#
# Table name: board_columns
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  title      :string           not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardColumn < ApplicationRecord

  validates :title, :order, :board_id, null: false
  belongs_to :board
  has_many :cards

end
