class Rectangle
  attr_reader :width, :height

  def initialize(height, width)
    @height, @width = height, width
  end

  def area
    height * width
  end

  def perimeter
    width * 2 + height * 2
  end

  def is_square?
    width == height
  end

end