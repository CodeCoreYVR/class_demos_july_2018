class Car
  def self.max_speed
    200
  end

  # Exercise: Accessing Attributes
  attr_accessor :model, :type, :capacity

  # Exercise: Attributes
  def initialize(model, type, capacity)
    @model = model
    @type = type
    @capacity = capacity
  end

  # Exercise: Car Does Things
  def drive
    # Exercise: Internal Methods
    ignite_engine
    # `self` is a keyword much like `this` that returns
    # the current object.
    # In an instance methods, that means the current instance
    puts "#{self.class.to_s} is driving about..."
    # You can access a class method inside of instance
    # by getting class itself through self with `self.class`
    puts "with max speed of #{self.class.max_speed}"
  end

  def stop
    puts "Scrreeeech!"
  end

  def park
    puts "I'm parked!"
  end

  # Exercise: Car Does Private Things
  private
  def pump_gas
    puts "Pumping gas... ⛽️"
  end

  def ignite_engine
    puts "Igniting engine... 🔥🔥🔥"
  end
end

volvo = Car.new("Volvo S60", "Sedan", 5)
volvo.drive
volvo.stop
volvo.park