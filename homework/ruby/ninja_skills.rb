
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

# CHALLENGE SIX
myFirstArray = []
myFirstArray = ["this", "is", "an", "array", "son", 1, 2, 3, 4]
puts myFirstArray.last
puts myFirstArray.first
myFirstArray[1] = "Joe"
myFirstArray[2] = 3
myFirstArray.push(true)
puts myFirstArray[3].class

# CHALLENGE SEVEN
myFavoriteAnimals = {
    "Edgar" => "Donkey",
    "Chester" => "Cheetah",
    "Bruce" => "Shark",
    "Burns" => "Beaver",
    "Oscar" => "Penguin"
}

myFavoriteAnimals["Edgar"] = "Bear"
favoriteMovie = {}
favoriteMovie = {"movie" => "The Dark Knight"}

# CHALLENGE EIGHT
firstRange = (1..10).to_a
secondRange = (1...1000).to_a
for value in firstRange
    p value.to_s
end

x = 0
while x < 50
    p secondRange[x]
    x +=1
end

new_array = []
firstRange.each do |number|
    if number.odd?
        new_array.push(number * 2)
        next
    else 
        next
    end
end
puts new_array

changedRange = firstRange.map do |number|
    if number.even?
        number.to_s
    else next
    end
end

# CHALLENGE NINE
start_array = (1...1000).to_a
new_array = []
start_array.map do |number|
    if number % 3 == 0 || number % 5 == 0
        new_array.push(number)
    else next
    end
end
puts new_array.sum

# FINAL CHALLENGE
require 'prime'
def check_prime?(number)
    return Prime.prime?(number)
end

def get_primes(number)
    new_array = (1..number).to_a
    new_array.map do |num|
        if Prime.prime?(num)
            p num
        else next
        end
    end
end

