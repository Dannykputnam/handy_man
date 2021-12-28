Rails.application.routes.draw do
  # no root route just in the namespace and resources
  # api routes, leads us to the controller
  namespace :api do
    resources :workers do
      resources :services
    end

    resources :services do
      resources :comments
    end
  end

end 



# , except: [:index, :show, :create, :update, :destroy] 