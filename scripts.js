// Create a classmates object with
    // Name
    // Img (link to img)

// Test list of 60s Batman
const batman = [
    {
        name: 'Bruce Wayne',
        url: 'assets/batman.jpg'
    },
    {
        name: 'Alfred Pennyworth',
        url: 'assets/alfred.jpg'
    },
    {
        name: 'Dick Grayson',
        url: 'assets/robin.jpg'
    },
    {
        name: 'Selina Kyle',
        url: 'assets/catwoman.jpg'
    },
    {
        name: 'The Joker',
        url: 'assets/joker.jpg'
    },
    {
        name: 'Edward Nigma',
        url: 'assets/riddler.jpg'
    },
    {
        name: 'Oswald Chesterfield Cobblepot',
        url: 'assets/penguin.jpg'
    }
];

const randomArraryIndex = function(array) {
    // Takes an array and returns a number corresponding to random index in that array
    return Math.floor(Math.random() * array.length);
};

// Doc ready jQuery
$(function () {
    
    const showHeadshot = function(peopleArray, position){
        // takes 2 args, peopleArray - an array of object which contains an attribute named "url", and position - the position in the array
        // places the image on the DOM by appending it as an img to the object with the class 'headshot'

        let $image = $('<img>').attr('src', peopleArray[position].url).attr('alt', `This is an image of the current person who's name needs to be selected.`);
    
        $('.headshot').append($image);
    };

    const showName = function (peopleArray, position) {
        // takes 2 args, peopleArray - an array of object which contains an attribute named "name", and position - the position in the array
        // places the name on the DOM by appending it as an img to the object with the class 'name'

        let $name = $('<h2>').text(peopleArray[position].name);

        $('.name').append($name);
    };

    const indexToPass = randomArraryIndex(batman);

    showHeadshot(batman, indexToPass);
    showName(batman, indexToPass);


});

// Provide 3 wrong names
    // Create a list of all names (populated from the names in the classmates object)

// Stop classmates who have already been shown from showing again unless all have been shown

// Keep track of score
    // +1 for every correct answer
    // -1 for every wrong answer

// Limit play to 60 seconds
    // Show countdown? (number or bar)

// Display the image of the classmate

// Display all 4 names (1 correct and 3 wrong)