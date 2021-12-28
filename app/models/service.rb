class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy
  validates :name, :description, :mins, presence: true
  validates :mins, numericality: { only_integer: true }
end
