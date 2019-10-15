# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  
  has_many :collections, foreign_key: :author_id
  has_many :comments, foreign_key: :author_id

  has_many :memberships, 
    foreign_key: :member_id,
    class_name: :Member
  
  has_many :team_collections, through: :memberships

  def subscribed_collections
    (self.collections + self.team_collections)
  end

  def due_cards
    cards = []
    user_collections = self.collections.includes(:cards) + self.team_collections.includes(:cards)
    user_collections.each do |col|
      cards += col.cards
    end

    return cards.select {|card| card.due_date != nil}
  end


  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
    
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(user_params)
    user = User.find_by(username: user_params[:username])
    return nil unless user
    
    user.is_password?(user_params[:password]) ? user : nil
        
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16) 
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save

    self.session_token
  end
  

end
