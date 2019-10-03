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

require 'rails_helper'

RSpec.describe Card, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
