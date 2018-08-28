ratings = {
  "Vancouver" => 10,
  "Richmond" => 8,
  "Burnaby" => 7
}

ratings.each_key do |name|
  puts name
end

ratings.each_value do |rating|
  puts rating
end