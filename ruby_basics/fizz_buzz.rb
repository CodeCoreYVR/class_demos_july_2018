print "What's the first divisor?\n> "
div_a = gets.chomp.to_i
print "What's the second divisor?\n> "
div_b = gets.chomp.to_i

for n in 1..100
  str = ""

  str += "FIZZ" if n % div_a == 0
  str += "BUZZ" if n % div_b == 0

  if str.empty?
    puts n
  else
    puts str
  end
end