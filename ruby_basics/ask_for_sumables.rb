total = 0
loop do
  print "Give me a number.\n> "
  answer = gets.chomp
  break if answer == "exit"

  total += answer.to_f
end

puts "Your total is #{total}"