Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :collections, only: [:show, :create, :destroy, :update, :index] do
      resources :boards, only: [:index, :create]
      member do
        delete 'remove_member'
        post 'add_member'
      end
    end
    
    resources :boards, only: [:show, :destroy, :update] do
      resources :board_columns, only: [:create, :index]
    end

    resources :users, only: [:show, :create, :index]
    resources :board_columns, only: [:show, :destroy, :update] do
      resources :cards, only: [:create]
    end
    resources :cards, only: [:index, :show, :destroy, :update] do
      resources :comments, only: [:create, :index]
      resources :tags, only: [:create]
    end
    resources :tags, only: [:show, :destroy]
    resources :comments, only: [:show, :update, :destroy]
  end
end
