# == Schema Information
#
# Table name: members
#
#  id            :bigint           not null, primary key
#  member_id     :integer          not null
#  collection_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Member < ApplicationRecord

  validates :member_id, uniqueness: {scope: :collection_id}

  belongs_to :team_collection,
    class_name: :Collection,
    foreign_key: :collection_id,
    primary_key: :id
  
  belongs_to :member,
    class_name: :User,
    foreign_key: :member_id,
    primary_key: :id

end
