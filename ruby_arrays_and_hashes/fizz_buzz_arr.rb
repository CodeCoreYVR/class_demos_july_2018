# Exercise: Fizz Buzz (with Array)

result = []

for num in 1..100
  str = ""
  str << "FIZZ" if num % 3 == 0
  str << "BUZZ" if num % 5 == 0
  str << num.to_s if str.length <= 0

  result << str
end

p result