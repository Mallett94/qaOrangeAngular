var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cinemadb');
var Schema = mongoose.Schema;

var filmsAllSchema = new Schema({
    id: Number,
    film_name: String,
    release_date: String,
    age_rating: String,
    img: String,
    quote: String,
    film_description: String,
    trailer: String,
    comments:[String],
});

var locationsSchema = new Schema({
    id: Number,
    location: String,
    lat: Number,
    lng: Number
});

var priceSchema = new Schema({
    price_category: String,
    price: Number,
});

const prices = [
    {"price_category":"Adult", "price":"8.99"},
    {"price_category":"Senior", "price":"7.99"},
    {"price_category":"Kids", "price":"6.99"}
]

const locations = [
    {"id":"0", "location":"Manchester", "lat":"53.475617", "lng":"-2.243872"},
    {"id":"1", "location":"Scarborough", "lat":"54.287233", "lng":"-0.387611"},
    {"id":"2", "location":"London", "lat":"51.507351", "lng":"-0.127758"},
    {"id":"3", "location":"Edinburgh", "lat":"55.953252", "lng":"-3.188267"}
]

const films = [
		{"id":"1", "film_name":"Goodfellas", "release_date":"2016", "age_rating":"/img/ratings/BBFC_18_(2002).svg",
			"img":"/img/goodFellas.jpg", "quote":"Do I amuse you?",
			"film_description":"Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?",
			"trailer":"https://www.youtube.com/embed/qWhS8Pjf-9c",
			"comments":[
								"comment 1.1",
								"comment 1.2",
								"comment 1.3"]},

		{"id":"2", "film_name":"War for the Planet of the Apes", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"img/apesposter.jpg", "quote":"Get your stinking paws off me, you damn dirty ape!",
			"film_description":"Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
			"trailer":"https://www.youtube.com/embed/qxjPjPzQ1iU",
			"comments":[
								"comment 2.1",
								"comment 2.2"]},

		{"id":"3", "film_name":"Spider-man: Homecoming", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"img/spiderman.jpg", "quote":"I'm your friendly neighbourhood spider-man!",
			"film_description":"Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.",
			"trailer":"https://www.youtube.com/embed/U0D3AOldjMU",
			"comments":[
								"comment 3.1",
								"comment 3.2"]},

		{"id":"4", "film_name":"Baby Driver", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"/img/babydriver.jpg", "quote":"All you need is one killer track.",
			"film_description":"Baby is a young and partially hearing impaired getaway driver who can make any wild move while in motion with the right track playing. It's a critical talent he needs to survive his indentured servitude to the crime boss, Doc, who values his role in his planned robberies. However, just when Baby thinks he is finally free and clear to have his own life with his new girl friend, Doc coerces him back for another job. Now saddled with a crew of thugs too violently unstable to keep to Doc's plans, Baby finds himself in terrible danger.",
			"trailer":"https://www.youtube.com/embed/z2z857RSfhk",
			"comments":[
								"comment 4.1",
								"comment 4.2"]},

		{"id":"5", "film_name":"Fargo", "release_date":"1996","age_rating":"/img/ratings/BBFC_18_(2002).svg",
			"img":"img/fargo.jpg", "quote":"Yah, you betcha.",
			"film_description":"The all new \"true crime\" case of Fargo's new chapter travels back to 1979 in Sioux Falls, South Dakota where a young State Police Officer Lou Solverson, investigates a case involving a local crime gang and a major Mob syndicate. The investigation will lead them to a colorful cast of characters that includes Karl Weathers, the town lawyer of Luverne, Minnesota. The new face of corporate crime, Joe's bringing a Walmart mentality to small town America.",
			"trailer":"https://www.youtube.com/embed/h2tY82z3xXU",
			"comments":[
								"comment 5.1",
								"comment 5.2"]},

		{"id":"6", "film_name":"Lego Batman Movie", "release_date":"2017","age_rating":"/img/ratings/BBFC_U_(2002).svg",
			"img":"img/LegoBatman.jpg", "quote":"He's taking them under his wing... of awesomeness!",
			"film_description":"There are big changes brewing in Gotham City, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up. He's taking them under his wing... of awesomeness!",
			"trailer":"https://www.youtube.com/embed/rGQUKzSDhrg",
			"comments":[
								"comment 6.1",
								"comment 6.2"]},
		{"id":"7", "film_name":"Dunkirk", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"img/dunkirk.jpg", "quote":"When 400,000 men couldn't get home, home came for them.",
			"film_description":"Evacuation of Allied soldiers from Belgium, the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II..  When 400,000 men couldn't get home, home came for them.",
			"trailer":"https://www.youtube.com/embed/F-eMt3SrfFU",
			"comments":[
								"comment 7.1",
								"comment 7.2"]},

		{"id":"8", "film_name":"Transformers: The Last Knight", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"img/Transformers.jpg", "quote":"They have been here forever.",
			"film_description":"Optimus Prime finds his dead home planet, Cybertron, in which he comes to find he was responsible for its destruction. He finds a way to bring Cybertron back to life, but in order to do so, Optimus needs to find an artifact that is on Earth. They have been here forever.",
			"trailer":"https://www.youtube.com/embed/6Vtf0MszgP8",
			"comments":[
								"comment 8.1",
								"comment 8.2"]},

		{"id":"9", "film_name":"Wonder Woman", "release_date":"2017","age_rating":"/img/ratings/BBFC_12A_(2002).svg",
			"img":"img/Wonder-Woman.jpg", "quote":" Power. Grace. Wisdom. Wonder.",
			"film_description":"Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers and her true destiny.",
			"trailer":"https://www.youtube.com/embed/VSB4wGIdDwo",
			"comments":[
								"comment 9.1",
								"comment 9.2"]},

		{"id":"10", "film_name":"Deadpool", "release_date":"2016","age_rating":"/img/ratings/BBFC_15_(2002).svg",
			"img":"img/Deadpool.jpg", "quote":"With great power comes great irresponsibility.",
			"film_description":"This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
			"trailer":"https://www.youtube.com/embed/FyKWUTwSYAs",
			"comments":[
								"comment 10.1",
								"comment 10.2"]},

		{"id":"11", "film_name":"Casablanca", "release_date":"1942","age_rating":"/img/ratings/BBFC_U_(2002).svg",
			"img":"img/Casablanca.jpg", "quote":"They had a date with fate in Casablanca! ",
			"film_description":"The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII. Despite the pressure he constantly receives from the local authorities, Rick's cafe has become a kind of haven for refugees seeking to obtain illicit letters that will help them escape to America. But when Ilsa, a former lover of Rick's, and her husband, show up to his cafe one day, Rick faces a tough challenge which will bring up unforeseen complications, heartbreak and ultimately an excruciating decision to make.",
			"trailer":"https://www.youtube.com/embed/BkL9l7qovsE",
			"comments":[
								"comment 11.1",
								"comment 11.2"]},

		{"id":"12", "film_name":"Star Wars: Episode I - The Phantom Menace", "release_date":"1999","age_rating":"/img/ratings/BBFC_U_(2002).svg",
			"img":"img/StarWars.jpg", "quote":"One truth, one hate.",
			"film_description":"The evil Trade Federation, led by Nute Gunray is planning to take over the peaceful world of Naboo. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to confront the leaders. But not everything goes to plan. The two Jedi escape, and along with their new Gungan friend, Jar Jar Binks head to Naboo to warn Queen Amidala, but droids have already started to capture Naboo and the Queen is not safe there. Eventually, they land on Tatooine, where they become friends with a young boy known as Anakin Skywalker. Qui-Gon is curious about the boy, and sees a bright future for him. The group must now find a way of getting to Coruscant and to finally solve this trade dispute, but there is someone else hiding in the shadows. Are the Sith really extinct? Is the Queen really who she says she is? And what's so special about this young boy?",
			"trailer":"https://www.youtube.com/embed/bD7bpG-zDJQ",
			"comments":[
								"comment 12.1",
								"comment 12.2"]}
	
]

var film = mongoose.model('film', filmsAllSchema);
var location = mongoose.model('location', locationsSchema);
var price = mongoose.model('price', priceSchema);

prices.map(data => {
    const completePricesList = new price(data);
    completePricesList.save();
});

films.map(data => {
    const completeFilmsList = new film(data);
    completeFilmsList.save();
});

locations.map(data => {
    const completeLocationsList = new location(data);
    completeLocationsList.save();
});