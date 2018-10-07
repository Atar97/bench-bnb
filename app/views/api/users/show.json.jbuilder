json.users do
  json.set! user.id do
    json.extract! user, :id, :username, :email
  end
end

json.sessions do
  json.extract! @user, :id
end
