print "Give me a number below 100.\n> "
number = gets.chomp.to_i

# `number..100` is a range. Think of range
# as an array where its values have not been
# created yet. They're created on demand.
# For a range of 0..10 used in a loop,
# the loop will go over values from 0 to 10
# a need to use basis.
for n in number..100
  puts n
end

# To iterate in reverse, use the method "downto"
# on a number

# This loop will begin at 100 and iterate to
# number in reverse.
for n in (100).downto(number)
  puts n
end