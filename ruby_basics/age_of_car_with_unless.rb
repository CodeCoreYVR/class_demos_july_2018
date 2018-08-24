print "What year was your car made?\n> "
year = gets.chomp.to_i

puts "It's very old" unless year > 1999
puts "It's old" unless year > 2015 || year < 1999
puts "It's new" unless year > 2018 || year < 2015
puts "It's from the future" unless year < 2018