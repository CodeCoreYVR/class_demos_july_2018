parts = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

sentence = ""

parts.each do |parts|
  sentence << " " << parts[rand(3)]
end

# puts sentence

# Mapping Sentences

puts parts.map{ |part| part.sample }.join(" ")