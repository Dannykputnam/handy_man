class Service < ApplicationRecord
  belongs_to :worker
  validates :name, :description, :mins, presence: true
  validates :mins, numericality: { only_integer: true }
end
