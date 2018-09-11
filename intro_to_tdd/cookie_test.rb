require 'minitest/autorun'
require './cookie.rb'

class CookieTest < MiniTest::Test

  # we start our method names with `test_` in order for 
  # autorun to execute the tests automatically.
  def test_calorie_count
    # GIVEN: A cookie object with 10g of sugar and 5g of butter
    c = Cookie.new 10, 5  

    # WHEN: we call the `calorie_count` method on the object
    result = c.calorie_count

    # THEN: It should return 85
    assert_equal 85, result
  end

end