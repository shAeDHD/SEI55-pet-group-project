User.destroy_all

u1 = User.create!(
    name: 'Shae',
    email: 'shae@gmail.com',
    password: 'chicken',
    premium: false, 
    display_name: 'Shae'
)
u2 = User.create!(
    name: 'Wen',
    email: 'wen@gmail.com',
    password: 'chicken',
    premium: false, 
    display_name: 'Wen'
)
u3 = User.create!(
    name: 'Craig',
    email: 'craig@gmail.com',
    password: 'chicken',
    premium: false, 
    display_name: 'Craig'
)
u4 = User.create!(
    name: 'Mohamad',
    email: 'mo@gmail.com',
    password: 'chicken',
    premium: false, 
    display_name: 'Mo'
)


puts "Done! Created #{ User.count } User:"
puts User.pluck( :name).join( ', ' )


################################################

# Set species to have three different types including owlet, dude and pink

# Pet.destroy_all

p1 = Pet.create!(
    name: "Mo",
    age: 89,
    species: "owlet",
    accessories: true,
    level: 1,
    experience: 5
      
)

p2 = Pet.create!(
    name: "Shae",
    age: 5,
    species: "pink",
    accessories: false,
    level: 2,
    experience: 50
 
)

p3 = Pet.create!(
    name: "Craig",
    age: 205,
    species: "dude",
    accessories: true,
    level: 20,
    experience: 80

)

p4 = Pet.create!(
    name: "Wen",
    age: 20,
    species: "dude",
    accessories: true,
    level: 8,
    experience: 10

)


puts "create #{ Pet.count } pets."

#############################

puts "Creating Moves"
# Move.destroy_all 

m1 = Move.create!(

    name:       'jump',
    offensive:  true,
    attack:     16,
    ability:    nil

)

m2 = Move.create!(

    name:       'punch-walk',
    offensive:  true,
    attack:     40,
    ability:    nil

)

m3 = Move.create!(

    name:       'run-hug',
    offensive:  true,
    attack:     50,
    ability:    nil

)

m4 = Move.create!(

    name:       'one-two',
    offensive:  true,
    attack:     40,
    ability:    nil
)
m5 = Move.create!(

    name:       'throw-stone',
    offensive:  true,
    attack:     40,
    ability:   nil
)
m6 = Move.create!(

    name:       'punch',
    offensive:  true,
    attack:     25,
    ability:    "The opponent's next attack only deals half damage."
)
m7 = Move.create!(

    name:       'climb',
    offensive:  true,
    attack:     20,
    ability:   nil
)
m8 = Move.create!(

    name:       'climb',
    offensive:  true,
    attack:     20,
    ability:   nil
)
m9 = Move.create!(

    name:       'KO',
    offensive:  false,
    attack:     nil,
    ability:   nil
)
m10 = Move.create!(

    name:       'walk',
    offensive:  false,
    attack:     nil,
    ability:   nil
)
m11 = Move.create!(

    name:       'sprint',
    offensive:  false,
    attack:     nil,
    ability:   nil
)
m12 = Move.create!(

    name:       'hurt',
    offensive:  false,
    attack:     nil,
    ability:   nil
)
m13 = Move.create!(
    name:       'drink',
    offensive: false,
    attack: nil,
    ability: nil
)
m14 = Move.create!(
    name:       'food',
    offensive: false,
    attack: nil,
    ability: nil
)
m15 = Move.create!(
    name:       'sweets',
    offensive: false,
    attack: nil,
    ability: nil
    
)

puts "Done! Created #{ Move.count } Move:"
puts Move.pluck( :name).join( ', ' )

# u1.pet << p1
# u2.pet << p2
# u3.pet << p3
# u4.pet << p4

# p1.move << m1 << m2 << m3 << m4 << m5 << m5 << m6 << m7 << m8 << m9 << m10 << m11 << m12 << m13 << m14 << m15
# p2.move << m1 << m2 << m3 << m4 << m5 << m5 << m6 << m7 << m8 << m9 << m10 << m11 << m12 << m13 << m14 << m15
# p3.move << m1 << m2 << m3 << m4 << m5 << m5 << m6 << m7 << m8 << m9 << m10 << m11 << m12 << m13 << m14 << m15
# p4.move << m1 << m2 << m3 << m4 << m5 << m5 << m6 << m7 << m8 << m9 << m10 << m11 << m12 << m13 << m14 << m15



puts "Pet #{p1.name} has moves #{p1.m1.pluck(:name).join(',')}"
puts "NTF '#{w1.name} belongs to #{u1.name}"