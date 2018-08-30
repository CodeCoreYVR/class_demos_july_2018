require "./cookie.rb"

class Oreo < Cookie
  attr_accessor :filling_type

  @@color = "black"

  # `initialize` is already defined in the superclass
  # Cookie. Writing another of the same named in a child
  # class overwrites the superclass' version of the method.
  def initialize(sugar, flour, filling_type = "Pure White Sugar")
    super(sugar, flour)
    @filling_type = filling_type
  end

  def eat
    puts "Split into two parts and lick center"
    super
  end
end