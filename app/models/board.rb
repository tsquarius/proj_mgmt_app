# == Schema Information
#
# Table name: boards
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  title         :string           not null
#  collection_id :integer          not null
#  order         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Board < ApplicationRecord
  include Authorship

  validates :author_id, :title, :collection_id, :order, presence: true
  belongs_to :collection
  has_many :board_columns, dependent: :destroy
  has_many :cards, through: :board_columns

end
