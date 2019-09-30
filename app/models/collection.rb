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
  has_many :boards

  # def self.index(userId)
  #   collections = Collection.where(author_id: userId).joins(:boards)
    
  #   allBoards = []
  #   collections.each do |collection|
  #   end

  # end

end
