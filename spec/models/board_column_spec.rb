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

require 'rails_helper'

RSpec.describe BoardColumn, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
