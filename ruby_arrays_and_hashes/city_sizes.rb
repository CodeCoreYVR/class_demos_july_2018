bc_cities_population = {
  vancouver: 2135201,
  victoria: 316327,
  abbotsford: 149855,
  kelowna: 141767,
  nanaimo: 88799,
  white_rock: 82368,
  kamloops: 73472,
  chilliwack: 66382
}

bc_cities_population.each do |city, population|
  if population > 100_000
    puts "#{city.capitalize} is large"
  end
end