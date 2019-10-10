# == Schema Information
#
# Table name: cards
#
#  id              :bigint           not null, primary key
#  author_id       :integer          not null
#  archived        :boolean          default(FALSE), not null
#  title           :string           not null
#  color           :string
#  due_date        :date
#  description     :text
#  board_column_id :integer          not null
#  order           :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Card < ApplicationRecord
  
  validates :author_id, :title, :board_column_id, presence: true
  # validates :order, uniqueness: {scope: :board_column_id}
  belongs_to :board_column
  has_many :comments

  def self.find_next_order(id)
    cards = Card.where(board_column_id: id)
    if cards.empty?
      return 0
    else
      return cards.maximum(:order) + 1
    end
  end

  def comments_array
    self.comments.pluck(:id)
  end


end
