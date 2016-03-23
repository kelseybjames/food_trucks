Rails.application.routes.draw do
  resources :trucks
  resources :origins

  root to: 'trucks#index'
end
