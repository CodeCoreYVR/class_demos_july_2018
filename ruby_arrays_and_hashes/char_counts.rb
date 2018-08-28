words = ["Hello", "konnichiwa", "Yo", "Hi", "Konnichiwa"]

char_counts = {}

words.each do |word|
  char_counts[word.downcase.to_sym] = word.length
end

p char_counts