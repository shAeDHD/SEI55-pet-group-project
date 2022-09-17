
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
    display_name: 'Wen'
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
Pet.destroy_all

Pet.create!(
    name: "Mo",
    age: 89,
    species: "blob",
    accessories: true,
    level: 1,
    experience: 5
    
    
)

Pet.create!(
    name: "Shae",
    age: 5,
    species: "ghost",
    accessories: false,
    level: 2,
    experience: 50
    
    
)

Pet.create!(
    name: "Craig",
    age: 205,
    species: "creature-3",
    accessories: true,
    level: 20,
    experience: 80
   
    
)

Pet.create!(
    name: "Wen",
    age: 20,
    species: "creature-4",
    accessories: true,
    level: 8,
    experience: 10
    
    
)

puts "create #{ Pet.count } pets."

#############################



