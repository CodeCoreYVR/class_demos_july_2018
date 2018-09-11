class Cookie
  SUGAR_CALORIES = 4
  BUTTER_CALORIES = 9

  def initialize(sugar_amount, butter_amount)
    @sugar_amount, @butter_amount = sugar_amount, butter_amount
  end

  def calorie_count
    @sugar_amount * SUGAR_CALORIES + @butter_amount * BUTTER_CALORIES
  end

end