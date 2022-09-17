
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

User.destroy_all

User.create!(
    name: "Luke",
    email: "luke@ga.com",
    display_name: "luke-dizzle",
    premium: true,
    password_digest: "chicken"
)

User.create!(
    name: "Kris",
    email: "kris@ga.com",
    display_name: "k-fizzle",
    premium: true,
    password_digest: "chicken"
)

User.create!(
    name: "Shay",
    email: "shay@ga.com",
    display_name: "shay-wizzle",
    premium: false,
    password_digest: "chicken"
)

puts "create #{ User.count } users."

