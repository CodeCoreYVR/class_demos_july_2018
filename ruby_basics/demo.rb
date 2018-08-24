# REPL

# In Ruby, we use the `irb` command to write
# interactive code like `node`.

# At CodeCore, we prefer to use `pry` which is
# lovely and powerful replacement for `irb`.

# Install with the command: `gem install pry`

# LOGGING TO THE CONSOLE

# In Ruby, use the following to log to the console:

print "Hello, World!\n👋" # Logs without creating a new line
puts "Hello, World!\n👋" # Logs with a new line
p "Hello, World!\n👋" # Displays value as is double quotes and all

# EXECUTING A RUBY FILE

# To execute a ruby file, use the `ruby` command followed
# by the file path:
# ruby demo.rb

# VARIABLES

# Creating and assigning to a variable does not
# require any special keyword like `let`, `const`, etc.

a = 10
b = 5
c = a * b
puts c

# GET USER INPUT

print "What's up?\n> "
answer = gets
puts answer

# When using `gets` the newline character from pressing
# "Enter" is saved, to remove it simply call the method
# `.chomp` after `gets`, like so: `gets.chomp`

# S T R I N G

# INTERPOLATION

greeting = "Hi"
person = "Jane"

"#{greeting}, #{person}!"

# MUTABLE STRINGS

# Unlike JavaScript strings, strings in Ruby can be
# changed in place.

str = "Bob"
str_a = str

str[0] = "J"

puts str # Logs "Job"
puts str_a # Logs "Job"

# METHODS WITH ! AT THE END

# Ruby methods that end with "!" mutate the object
# they're called on while the alternate version
# of the method without a "!" return a new version of the object
# without modifying the original.

# CONTROL FLOW

# INLINE CONDITIONAL

puts "Hello!" if true
# 👆 shortcut for 👇
# if true
#   puts "Hello!"
# end


puts "Bye!" if false

# `unless` can be used instead if where
# it's boolean is inverted (e.g. true becomes false)

puts "Bye!" unless false # logs "Bye!"


## LOOPS

count = 1
while count <= 100
  puts count
  count += 1
end 