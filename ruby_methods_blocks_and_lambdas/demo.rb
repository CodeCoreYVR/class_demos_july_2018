require "pry"

# Methods

# To create method, use the `def` keyword.
def five
  return 5
end

# Methods that take arguments will raise an error if
# they're without their arguments.

# You can provide default arguments to get around that.
# If default arguments, those with defaults can be skipped
# when the method is called.

# To give a default argument, use an `=` to "assign"
# in argument definitions of a method as shown below.
def add(a = 0, b = 0)
  # In Ruby, we only use the `return` when we want to
  # exit early from a method.

  # return a + b
  a + b
  # In Ruby, methods always return the last expression
  # implicitly.
end

# Exercise: Greeter

def greet(name = "beautiful")
  "Hello, #{name}!"
end

# Exercise: What is it?
def what_is_it(thing)

  # `case` expression allows to do a series comparisons
  # based on the `===` operator named "case subsumption"
  # operator

  # Examples:
  # Integer === 1 # true
  # String === 1 # false
  # (1..5) === 7 # false
  # (1..5) === 2 # true
  # (1..5) === 4 # true

  case thing.class
  when "" # thing.class === ""
    "String"
  when [] # thing.class === []
    "Array"
  when 1 # thing.class === 1
    "Integer"
  else
    "Something Else"
  end
end

# Variadic Methods

# Variadic methods are methods that can take any number of
# arguments

# To take in any number of arguments, use the "*"
# in front of an argument's name in their definition.

# All arguments not assigned will put into array named
# after that argument.
def sum(*ns)
  ns.reduce(0) { |a, b| a + b }
end

# Exercise: Maximum Number
def max(*ns)
  ns.reduce do |curr_max, n|
    # The first argument to the reduce callback
    # is named the "accumulator"
    if curr_max < n
      n
    else
      curr_max
    end
  end
end

# Defining Methods with Blocks

def my_method
  puts "Before Block"
  # `yield` is a Ruby keyword that is used to call
  # block that is passed to the method

  # It can be given arguments and it will return whatever
  # the block returns.
  yield if block_given?
  # To make a block optional, we can check that a method
  # was a block with the keyword `block_given?`. It
  # will return `true` if the method received a block
  # otherwise `false`.

  puts "After Block"
end

# Demo: Implement Each

def each(arr)
  for value in arr
    yield(value)
  end
end

# def each(arr, block)
#   for value in arr
#     block(value)
#   end
# end

# Exercise: Map

def map(arr)
  new_arr = []
  for value in arr
    new_arr << yield(value)
  end
  new_arr
end

# Map implemented in Javascript for comparison:
# const map = (arr, fn) => {
#   const newArr = [];
#   for let val of arr {
#     newArr.push(fn(val));
#   }
#   return newArr;
# }

# Example usage:

# map [1,2,3,4,5] do |val|
#   val ** 3
# end
# [1, 8, 27, 64, 125]

# map([1,2,3,4,5]) { |v| v.to_s * v }
# ["1", "22", "333", "4444", "55555"]

# Example usage:
# each([1,2,3,4]) do |value|
#   puts value
# end
# 1
# 2
# 3
# 4

# Exercise: Implement Filter

def filter(arr)
  new_arr = []
  for val in arr
    new_arr << val if yield(val)
  end
  new_arr
end

# Example usage:
# filter([1,2,3,4,5]) { |v| v > 2 } # => [3, 4, 5]

# filter [1,2,3,4,5] do |v|
#   v.even?
# end # => [2, 4]

# filter [1,2,3,4,5] do |v|
#   v.odd?
# end # => [1, 3, 5]

# You can get a return value from `yield`

def times_10
  block_value = yield
  block_value * 10
end

# Procs & Lambdas

# These are Ruby's way of creating anonymous functions
# They are blocks that exist on their as instance of
# the Proc class. "Proc" is an abbreviation of the
# word "procedure".

mult = ->(a, b) { a * b }
div = lambda { |a, b| a * b }
sub = proc { |a, b| a - b }

# Using the `&` operator we can pass lambdas and procs
# as blocks (i.e. callbacks) to methods

square = ->(v) { v ** 2 }
larger_than_3 = proc { |v| v > 3 }

def smaller_than_3(v)
  v < 3
end

# Here the `square` lambda is passed argument and it
# is prefixed with `&`. This converts lambda into a
# block and will allow to be called with `yield`
map([1,2,3,4,5], &square) # [1, 4, 9, 16, 25]
filter([1,2,3,4,5], &larger_than_3) # [4, 5]

# Doesn't work with methods!! This raises an error
# filter([1,2,3,4,5], &smaller_than_3) # [4, 5]

# Lamdas and Proc treat the `return` keyword differently

early_lambda = ->() { puts "From lambda"; return }
early_proc = proc { puts "From Proc"; return }

# def whats_the_diff
#   puts "Before block"
#   yield
#   puts "After block"
# end

def whats_the_diff(fn)
  puts "--- Whats the diff ---"
  puts "Before block"
  fn.call
  puts "After block"
end

# Lamda's return behaves like regular function.
whats_the_diff(early_lambda)
# However, a procs return attempts to return from the
# parent calling method instead which often causes
# error.
# whats_the_diff(early_proc)

# Logs below:
# --- Whats the diff ---
# Before block
# From Proc

# Last `puts` in `whats_the_diff` is never executed
# because return in the `early_proc` actually returns
# from `whats_the_diff` where it is called.
# This doesn't work well in `pry`

# Named Arguments

def named_add(first: 0, second: 0)
  first + second
end

# When using a method with named arguments,
# the order which they're used doesn't matter
named_add(first: 10, second: 20)
named_add(second: 20)
named_add(second: 20, first: 5)

# Use `binding.pry` anywhere in a Ruby script to interrupt
# the program and a open pry console with all the current
# variables in scope.
binding.pry