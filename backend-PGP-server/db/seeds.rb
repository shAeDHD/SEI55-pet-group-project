
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

Pet.destroy_all

Pet.create!(
    name: "Mo",
    age: 89,
    species: "owlet",
    accessories: true,
    level: 1,
    experience: 5
    
    
)

Pet.create!(
    name: "Shae",
    age: 5,
    species: "pink",
    accessories: false,
    level: 2,
    experience: 50
    
    
)

Pet.create!(
    name: "Craig",
    age: 205,
    species: "dude",
    accessories: true,
    level: 20,
    experience: 80
   
    
)

Pet.create!(
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

Move.create!(

    name:       'slap',
    offensive:  true,
    attack:     16,
    ability:    nil

)

Move.create!(

    name:       'water gun',
    offensive:  true,
    attack:     40,
    ability:    nil

)

Move.create!(

    name:       'boulder smash',
    offensive:  true,
    attack:     50,
    ability:    nil

)

Move.create!(

    name:       'harden',
    offensive:  false,
    attack:     nil,
    ability:    "The opponent's next attack only deals half damage."
)

puts "Done! Created #{ Move.count } Move:"
puts Move.pluck( :name).join( ', ' )