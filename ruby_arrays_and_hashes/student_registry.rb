student_registry = []

loop do
  puts "Enter student data (\"exit\" to leave)"
  print "Name: "
  name = gets.chomp
  break if name == "exit"
  
  print "Phone Number: "
  phone_number = gets.chomp
  break if phone_number == "exit"
  
  student_registry << {
    name: name,
    phone_number: phone_number
  }
end

p student_registry