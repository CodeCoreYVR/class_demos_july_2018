require 'minitest/autorun'
require './rectangle.rb'

class RectangleTest < MiniTest::Test 

  def test_area
    r = Rectangle.new 4, 5
    result = r.area
    assert_equal 20, result
  end

  def test_perimeter
    r = Rectangle.new 5, 5
    result = r.perimeter
    assert_equal 20, result
  end

  def test_is_square?
    s = Rectangle.new 5, 5
    result = s.is_square?
    assert_equal true, result
  end


end