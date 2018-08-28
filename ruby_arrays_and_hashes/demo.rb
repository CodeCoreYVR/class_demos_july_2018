# Ruby Arrays

arr = [1, "Hi", 2, "Hello", 3]

# To read a value at an index in an array, use the
# bracket notation like in JavaScript

arr[0] # 1
arr[3] # "Hello"

# To replace a value at an index use the brack notation
# with an equal (i.e. []=)

arr[1] = "Hola"
arr[3] = "Konnichiwa"

# To add a new element to an array, use .push or << (shovel
# operator)

arr << "Hello"
arr.push(4)

# << and push return the mutated array making them chainable

arr << "Yo" << 5

# Use .include?() to test if a value is in array. In Ruby,
# the name of methods that return a boolean are post-fixed
# with a "?" by convention.

arr.include?(1) # true
arr.include?(10) # false
arr.include?("Hello") # true

# Doc Hunt #1

arr.count # 8
arr.length # 8
arr.size # 8

# Doc Hunt #2

[[1, 2], [4, 5]].flatten # [1, 2, 4, 5]

# Doc Hunt #3

arr_b = []

arr_b.unshift(5).unshift(10).unshift(15) # [ 15, 10, 5 ]
arr_b.shift  # 5 (removes 5 from arr_b)

# Doc Hunt #4

["a", "b", "c"].join(" ") # "a b c"

# Iterating through Arrays

# Using for

for value in [5, 4, 3, 2, 1]
  puts value
end

# Using the each method with a callback block
# Recommended!!!

[5, 4, 3, 2, 1].each do |value|
  puts value
end

# Using Map

[5, 4, 3, 2, 1].map { |value| value ** 2} # [ 25, 16, 9, 4, 1 ]

[5, 4, 3, 2, 1].map do |value|
  value ** 2
end # [ 25, 16, 9, 4, 1 ]

# To map or use each with an index, chain the method
# .with_index

[ 25, 16, 9, 4, 1 ].map.with_index do |value, index|
  "V: #{value} I: #{index}"
end
# ["V: 25 I: 0",
#  "V: 16 I: 1",
#  "V: 9 I: 2",
#  "V: 4 I: 3",
#  "V: 1 I: 4"]

# Hashes

# Creating One

# Ruby can use any type as a key (e.g. string, integer, float, array, etc)
movie_with_director = {
  "Forrest Gump" => "Robert Zemeckis",
  "The Matrix" => "The Watchowskis",
  "Pulp Fiction" => "Quentin Tarantino"
}

# Use bracket notation to create new key-value pairs
movie_with_director["The Wizard of Oz"] = "King Vidor, Victor Fleming"

# Read key-value pairs with bracket notation as well
# Unlike JavaScript objects, you can't use dot notation
# to access key-value pairs.

movie_with_director["The Matrix"] # "The Watchowskis"

# Get all keys

movie_with_director.keys
# ["Forrest Gump", "The Matrix", "Pulp Fiction"]

# Get all values

movie_with_director.values
# ["Robert Zemeckis", "The Watchowskis", "Quentin Tarantino"]

# Iterating over hashes

movie_with_director.each do |key, value|
  puts "#{key}'s director is #{value}"
end

# Hash with Symbol Keys

me = {
  :name => "Jon Snow",
  :home => "Winterfell",
  :hair_color => "Black"
}

# There's shorcut syntax for writing keys as symbols
her = {
  name: "Daenerys",
  home: "Dragonstone",
  hair_color: "Platinum Blond"
}