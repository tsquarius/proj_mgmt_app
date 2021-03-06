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
  has_many :board_columns, through: :boards
  has_many :cards, through: :board_columns
  has_many :memberships, 
    foreign_key: :collection_id, 
    class_name: :Member
  has_many :team_members, through: :memberships

  def ordered_boards
    self.boards.order(order: :asc).pluck(:id)
  end

  def team_names
    (self.team_members + [self.author]).pluck(:username) 
  end


end
