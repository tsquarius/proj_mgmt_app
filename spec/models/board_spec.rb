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

require 'rails_helper'

RSpec.describe Board, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
