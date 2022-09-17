
User.destroy_all

u1 = User.create!(
    name: 'Shae',
    email: 'Shae@gmail.com',
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
