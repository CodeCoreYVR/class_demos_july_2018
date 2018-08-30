require "pry"
require "./cookie_bag.rb"
require "./cookie.rb"
require "./oreo.rb"

c1 = Cookie.new(8, 19)
c2 = Cookie.new(8, 20)
c3 = Cookie.new(8, 31)
o1 = Oreo.new(8, 31)
o2 = Oreo.new(8, 11, "Rainbow")

cb = CookieBag.new(4)

binding.pry