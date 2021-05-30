# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create([{name: 'heather', email: 'osxgirl@mac.com' }])
user = User.create([{name: 'petal', email: 'heather@petalsnap.com' }])

videos = Video.create([{ name: 'Kriya 1', url: 'https://www.youtube.com/watch?v=QdzXTBHLVzM' }])
videos = Video.create([{ name: 'Kriya 2', url: 'https://www.youtube.com/watch?v=-KlnttF6jB8' }])
videos = Video.create([{ name: 'Kriya 3', url: 'https://www.youtube.com/watch?v=Wo4Kird8ryg' }])
videos = Video.create([{ name: 'Kriya 4', url: 'https://www.youtube.com/watch?v=u3QMlLg0wA8' }])

images = Image.create([{ name: 'Babaji', url: 'https://ibb.co/Q7BjDVc'}])
images = Image.create([{ name: 'Lahiri', url: 'https://ibb.co/Ph24h1q'}])
images = Image.create([{ name: 'Jesus', url: 'https://ibb.co/MZf5ZN8'}])
images = Image.create([{ name: 'Yukteswar', url: 'https://ibb.co/8gcf0Ty'}])
images = Image.create([{ name: 'Paramahansa', url: 'https://ibb.co/TbhcqXH'}])
               
comment = Comment.create([{ comment: 'जी शुक्रिया ❤️', image_id:1}])
comment = Comment.create([{ comment: 'thank you ❤️', image_id:2}])
comment = Comment.create([{ comment: 'gracias ❤️', image_id:3}])
comment = Comment.create([{ comment: 'danke ❤️', image_id:4}])
comment = Comment.create([{ comment: 'merci ❤️', image_id:5}])
