class CookieBag
  attr_reader :capacity

  def initialize(capacity = 10)
    @capacity = capacity
    @cookies = []
  end

  def add(cookie)
    raise "Must be a cookie" unless cookie.is_a? Cookie

    if @cookies.length >= @capacity
      raise "No Room Left"
    else
      @cookies << cookie
    end
    self
  end

  def take
    @cookies.pop
  end

  def details
    puts "This bas has #{@cookies.length} cookie(s)."
    puts "Here they are:"

    puts @cookies.map{ |cookie| cookie.details }.join("\n")
  end
end