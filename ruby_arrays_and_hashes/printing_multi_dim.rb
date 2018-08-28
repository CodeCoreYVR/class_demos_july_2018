# Exercise: Printing Multidimensional Arrays

arr = [[1,2,3], [4,5,6], [7,8,9]]

for sub_arr in arr
  for value in sub_arr
    puts value ** 2
  end
end

arr.each do |sub_arr|
  sub_arr.each do |value|
    puts value ** 2
  end
end

arr.flatten.each do |value|
  puts value ** 2
end