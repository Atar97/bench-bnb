json.parks do
  json.set! @park.id do
    json.extract! @park, :id, :lat, :lng, :description
  end
end
