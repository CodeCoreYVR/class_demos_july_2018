print "What year was your car made?\n> "
year = gets.chomp.to_i

if year < 1999
  puts "It's very old"
elsif year < 2015
  puts "It's old"
elsif year < 2018
  puts "It's new"
else
  puts "It's from the future"
end