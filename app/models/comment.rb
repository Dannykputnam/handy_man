class Comment < ApplicationRecord
  belongs_to :service
  validates :by, :title, presence: true
end
