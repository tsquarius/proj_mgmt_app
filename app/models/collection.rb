# == Schema Information
#
# Table name: collections
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
  include Authorship

  validates :author_id, :title, presence: true
  has_many :boards, dependent: :destroy

  def include_all_childs
    collection = self.boards.includes(:board_columns)
    boards = {}
    board_columns = {}

    collection.each do |board|
      boards[board.id] = board
      board.board_columns.each do |bc|
        board_columns[bc.id] = bc
      end
    end

    return {boards: boards, board_columns: board_columns}
  end

end
