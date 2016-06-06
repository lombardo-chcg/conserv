Rails.application.routes.draw do
  get '/' => 'pages#index'
  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  get '/users/show' => 'users#show'

  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  # resources :users
  get '/graphs/line' => 'graphs#line'
  get '/graphs/bar' => 'graphs#bar'
  get '/graphs/pie' => 'graphs#pie'

  get '/events' => 'events#index'
  post '/events/claim' => 'events#claim'

  get '/houses' => 'houses#index'
  get '/houses/new' => 'houses#new'
  post '/houses' => 'houses#create'
  post '/houses/add' => 'houses#add_member'

  get '/events/generate' =>'events#generate_events'

end
