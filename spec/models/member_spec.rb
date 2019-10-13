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

require 'rails_helper'

RSpec.describe Member, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
