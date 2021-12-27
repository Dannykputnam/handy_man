class Worker < ApplicationRecord
  validates :name, :title, presence: true
  has_many :services, dependent: :destroy
end