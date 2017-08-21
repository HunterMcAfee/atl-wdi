
# CHALLENGE ONE
a = true
b = false
puts a.equal?(b)
puts b.equal?(!a)

# CHALLENGE TWO
example = nil
p example
puts "#{example} nil was here"
print example
puts example.class

# CHALLENGE THREE
d = 10
puts d
e = 25.0
puts e
d = e
puts d

# CHALLENGE FOUR
christine = "Hi, I'm Christine"
likesTo = "long walks on the beach"
tims = christine
puts "#{tims} and I like #{likesTo}"
g = "2"
gToNumber = 2
puts g.to_i + gToNumber

# CHALLENGE FIVE
puts "Put in an integer"
    number = gets.chomp.to_i
    puts number * 2

puts "What is your name?"
    name = gets.chomp
puts "What do you like to do?"
    likes_to_do = gets.chomp
print "#{name} likes to #{likes_to_do}."

