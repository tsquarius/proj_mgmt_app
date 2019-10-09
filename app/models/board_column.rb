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
  has_many :cards, dependent: :destroy

  def ordered_cards
    self.cards.order(order: :asc).pluck(:id)
  end

  def self.find_next_order(id)
    columns = BoardColumn.where(board_id: id)
    if columns.empty?
      return 0
    else
      return columns.maximum(:order) + 1
    end
  end


end
