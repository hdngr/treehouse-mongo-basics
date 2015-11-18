// this is the same as running `use mongoBasics` from the
// shell
var db = db.getSiblingDB('mongoBasics');

// delete any data that was there already
db.dropDatabase();

// create fake names for our users
var firstNames = ['Sam', 'Bill', 'Roger', 'Sara', 'Natasha', 'Nivine'];
var lastNames = ['Lund', 'Noor', 'Riola', 'Henderson', 'Frank'];
var usersRaw = [];

// Give all users a first name, and a signup date
// give 5 out of 6 users a last name
for (var i = 0; i < firstNames.length; i++) {
    var user = {
        name: {
            first: firstNames[i],
            last: lastNames[i]
        },
        signupDate: new Date()
    };
    usersRaw.push(user);
}

// insert the users into the database
// in the `users` collection
db.users.insert(usersRaw);

// find all users and assign them to the variable 'authors'
var authors = db.users.find().toArray();

var titles = ['My Awesome Recipe!', 'I love the holidays', 'How to workout', 'Parenting 101'];
var description = "Pinterest asymmetrical raw denim, neutra sriracha lumbersexual tousled. Heirloom chia banjo brunch deep v echo park. Humblebrag tousled semiotics, tattooed hella pickled biodiesel fanny pack kickstarter tacos crucifix brooklyn. Cold-pressed drinking vinegar chillwave mlkshk. Cardigan you probably haven't heard of them mlkshk, small batch four dollar toast yuccie stumptown actually wolf literally fingerstache celiac pork belly retro. Vinyl street art fashion axe, retro lumbersexual cardigan ramps austin pug single-origin coffee. Cardigan humblebrag four loko, blog put a bird on it messenger bag disrupt kogi irony."
var body = "Knausgaard photo booth paleo, tacos vice flexitarian bespoke celiac blue bottle williamsburg tofu four dollar toast. Pug actually cred, iPhone sustainable pitchfork DIY salvia distillery asymmetrical gentrify humblebrag. Mlkshk drinking vinegar meh selvage. Street art marfa before they sold out, flannel bicycle rights crucifix photo booth intelligentsia iPhone mustache. Semiotics thundercats health goth 8-bit, mlkshk ethical banh mi. Taxidermy pop-up dreamcatcher portland, narwhal tote bag helvetica. Four dollar toast shoreditch chillwave, craft beer tilde street art food truck yr cardigan polaroid.\
\
DIY flexitarian craft beer, everyday carry pug artisan food truck before they sold out polaroid heirloom butcher. Blue bottle taxidermy photo booth, small batch street art pop-up irony YOLO actually. Chartreuse PBR&B fixie, sriracha church-key master cleanse dreamcatcher pork belly williamsburg selvage raw denim bespoke heirloom four dollar toast. Heirloom etsy health goth humblebrag chambray, church-key cray four dollar toast lumbersexual freegan taxidermy fixie thundercats. Gluten-free brunch shabby chic, heirloom listicle kale chips church-key skateboard banjo lumbersexual occupy vegan mlkshk narwhal biodiesel. Drinking vinegar narwhal food truck chambray pork belly tousled. Mlkshk beard tote bag try-hard neutra wolf.\
\
Blog poutine authentic chillwave, chicharrones scenester art party pickled ennui celiac retro squid. Readymade beard gluten-free meditation thundercats echo park. Letterpress try-hard pork belly, ethical iPhone 90's post-ironic fingerstache. Mixtape intelligentsia austin disrupt aesthetic. Meggings polaroid swag pickled photo booth, flexitarian migas. Irony tilde celiac lumbersexual messenger bag. Helvetica keytar banjo truffaut, bushwick 3 wolf moon 8-bit pour-over meggings pork belly brunch +1 health goth.\
\
Blog ethical normcore roof party. Typewriter chambray post-ironic fashion axe try-hard everyday carry. Post-ironic shabby chic pork belly narwhal jean shorts hella. Vice ramps put a bird on it neutra try-hard ennui. Godard kitsch kale chips williamsburg, synth franzen raw denim bitters ugh. Williamsburg pickled art party knausgaard pabst, kale chips 8-bit brunch cliche. XOXO craft beer locavore, messenger bag blog crucifix next level mustache VHS selfies schlitz poutine gluten-free pickled PBR&B."

var postsRaw = [];

// Create posts from our fake titles
// give each post an author which is the `_id` of
// a random user from the authors array

for(var i = 0; i < titles.length; i++) {
    var post = {
        title: titles[i],
        description: description,
        body: body,
        author: authors[Math.floor(Math.random() * authors.length)]._id
    }
    postsRaw.push(post);
}

// insert posts into posts collection
db.posts.insert(postsRaw);
