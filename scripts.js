// Create a classmates object with
    // Name
    // Img (link to img)

// Test list of 60s Batman
const batman = [
    {
        name: 'Bruce Wayne',
        url: 'assets/batman-sqr.jpg'
    },
    {
        name: 'Alfred Pennyworth',
        url: 'assets/alfred-sqr.jpg'
    },
    {
        name: 'Dick Grayson',
        url: 'assets/robin-sqr.jpg'
    },
    {
        name: 'Selina Kyle',
        url: 'assets/catwoman-sqr.jpg'
    },
    {
        name: 'The Joker',
        url: 'assets/joker-sqr.jpg'
    },
    {
        name: 'Edward Nigma',
        url: 'assets/riddler-sqr.jpg'
    },
    {
        name: 'Oswald Chesterfield Cobblepot',
        url: 'assets/penguin-sqr.jpg'
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

        // Test adding the name to a button
        $('#name-1').text(peopleArray[position].name);


    };

    const indexToPass = randomArraryIndex(batman);

    const showPhotoAndName = function(peopleArray, position){
        showHeadshot(peopleArray, position);
        showName(peopleArray, position);
    };

    showPhotoAndName(batman, indexToPass);


});

// Provide 3 wrong names
    // Create a list of all names 
        // populated from the names in the classmates object AND already answered object
        // populating from both so that there are enough names 
        // check that the name is not the name of the person being used in the question

// Stop classmates who have already been shown from showing again unless all have been shown

// Keep track of score
    // +1 for every correct answer
    // -1 for every wrong answer

// Limit play to 60 seconds
    // Show countdown? (number or bar?)

// Display the image of the person

// Display all 4 names (1 correct and 3 wrong)