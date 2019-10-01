Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :collections, only: [:show, :create, :destroy, :update, :index] do
      resources :boards, only: [:index, :create]
    end
    resources :boards, only: [:show, :destroy, :update]
    resources :users, only: [:show, :create, :index]
    resources :board_columns, only: [:index, :show, :destroy, :update, :create]
  end
end
