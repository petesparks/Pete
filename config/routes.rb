Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'portfolio', to: 'pages#portfolio', as: :portfolio
  get 'contact', to: 'pages#contact', as: :contact
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
