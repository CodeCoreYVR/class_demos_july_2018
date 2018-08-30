require "pry"

# Ruby: Object Oriented Programming

# Creating a Class

# Class names in Ruby must be written as Capitalized CamelCase
# Names that are capitalized are considered constants. If you
# try to re-assign to a constant, Ruby will complain (give a warning).
# You should never re-assign a constant.
class Cookie
  # Class variables can read and written by every
  # instance of the class and the class itself (class methods)
  @@color = "brown"

  # The method below is a class method. It must be
  # used on the class itself and not instances of that
  # class.
  # Example:
  # `Cookie.info`

  # `self` when used within a class method will refer to
  # the class instance instead of any of its instance.
  def self.info
    "I'm the #{self.to_s} class and I create #{@@color} cookies"
  end

  # One of the most common uses for class methods is
  # providing alternative to construct instances of
  # the class

  # Initialize Methods

  # Use the `initialize` to provide intial setup
  # when building an instance of class like
  # JavaScript's constructors
  def initialize(sugar, flour, color = "brown")
    # puts "I'm called when .new is used"

    # Variables prefixed with a @ are called instance
    # variables meaning that they exist within the
    # instance of the object. They're shared by all methods
    # of that object
    @sugar = sugar
    @flour = flour
    # Use them like you would use properties of `this`
    # in JavaScript
    @@color = color
  end

  ## Attributes
  # attr_reader :sugar
  def sugar
    @sugar
  end 

  # attr_writer :sugar
  def sugar=(value)
    @sugar = value
  end

  attr_accessor :flour

  def details
    "#{self.class.to_s} Flour: #{@flour} / Sugar: #{@sugar} / Color: #{@@color}"
  end

  # Methods defined inside class are called
  # "instance methods"

  # They can only be used with the dot notation
  # on instances created from this Cookie class

  # Methods that don't have a `private` or `protected`
  # keyword are considered `public`.
  def eat
    "Nom. Nom. Nom!"
  end

  def bake_and_eat
    puts bake # Private methods can be called
    # from within the scope of the class
    puts eat
  end

  # The `private` keyword will make methods below
  # itself private. This means that these are all callabled
  # within the body of the class. They can't be called
  # with the dot notation on instances of the class

  # Make methods private when you want hide code from
  # the users of the class. It represents internal
  # implementation details that may change.
  private
  def bake
    "Baking the cookie"
  end

  # protected

end

# To construct an instance of a Cookie class,
# use the .new method on the Cookie class object

# Methods that are used directly on the class object
# are called "class methods"
choco_chip = Cookie.new(10, 20)
# choco_chip.bake
# Now that bake is private, the above raises error
choco_chip.eat

# binding.pry