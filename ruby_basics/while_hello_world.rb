print "Give me a number.\n> "
num = gets.chomp.to_i

count = 0
# while count < num
#   puts "Hello, World!"
#   count += 1
# end

# while true # Infinite loop
#   # You can use break to exit a loop
#   # at any moment
#   break if count >= num

#   puts "Hello, World!"
#   count += 1
# end

# When using loop, you must open its
# code block with `do`. `do` is optional
# for `for`, `while`, etc.
loop do # Infinite loop
  # You can use break to exit a loop
  # at any moment
  break if count >= num

  puts "Hello, World!"
  count += 1
end