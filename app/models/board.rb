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
  has_many :comments, through: :cards

  def ordered_columns
    self.board_columns.order(order: :asc).pluck(:id)
  end

  def self.find_next_order(id)
    boards = Board.where(collection_id: id)
    if boards.empty?
      return 0
    else
      return boards.maximum(:order) + 1
    end
  end

end
