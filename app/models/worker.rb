class Worker < ApplicationRecord
  namespace :api do
    resources :workers do
  end
end
