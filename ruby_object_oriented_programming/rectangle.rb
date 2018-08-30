class Rectangle
  attr_accessor(:width, :height)

  def initialize(width = 0, height = 0)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end

  def is_square?
    @width == @height
  end
end