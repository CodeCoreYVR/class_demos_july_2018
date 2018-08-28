paragraph = "Validation branding channels growth hacking bandwidth MVP. Lean startup stock creative first mover advantage twitter iPhone. Return on investment strategy stealth ramen mass market founders business plan long tail learning curve gen-z investor agile development rockstar incubator."

result = {}

paragraph.split(//).each do |char|
  if not result[char.downcase]
    result[char.downcase] = 1
  else
    result[char.downcase] += 1
  end
end

puts result