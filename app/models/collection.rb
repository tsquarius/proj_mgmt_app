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

  validates :author_id, :title, presence: true
  
  belongs_to :author, foreign_key: :author_id, class_name: 'User'

end
