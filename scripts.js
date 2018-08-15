// Create a classmates object with
    // Name
    // Img (link to img)

// TEST LIST: 60s BATMAN
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


// Takes an array and returns a number corresponding to random index in that array
const randomArrayIndex = function(array) {
    return Math.floor(Math.random() * array.length);
};

// Ready, M.D.
$(function () {
    
    const selectedArray = batman;


    // Empty array of answer options which will be used to constuct buttons
        // Will be added to and called on by several functions
    let answerOptions = [];

    // takes 2 args, peopleArray - an array of object which contains an attribute named "url", and position - the position in the array
    // places the image on the DOM by appending it as an img to the object with the class 'headshot'
    const showHeadshot = function(peopleArray, position){

        // Sets variable $image to be the question image
        let $image = $('<img>').attr('src', peopleArray[position].url).attr('alt', `This is an image of the person who's name needs to be selected in one of the answer buttons.`);
        
        // Places the question image on the DOM under the element with the class "headshot"
        $('.headshot').append($image);
    };

    // takes 2 args, peopleArray - an array of object which contains an attribute named "name", and position - the position in the array
        // Gets the name from 'name' in the peopleArray
        // Adds name to an array of answer options
    const getName = function (peopleArray, position) {
        
        // CLs the name of the correct answer
        console.log(`Correct answer: ${peopleArray[position].name}`);
        
        // Adds the name of the correct answer to the answerOptions array
        answerOptions.push(peopleArray[position].name);
        console.log(`answerOptions Array: ${answerOptions}`);
    };

    // const indexToPass = randomArrayIndex(batman);
    const showPhotoAndName = function(peopleArray, position){
        showHeadshot(peopleArray, position);
        getName(peopleArray, position);
    };

    showPhotoAndName(batman, randomArrayIndex(batman));

    // Actions to perform on form submit
    $('form').on('submit', function(event){
        // prevent the default
        event.preventDefault();


        // Reset DOM for next face
        $('.headshot').empty();
        $('.name').empty(); // <-- will be getting rid of name after testing

        showPhotoAndName(batman, randomArrayIndex(batman));
       
        // Keep track of score
            // +1 for every correct answer
            // -1 for every wrong answer

    });
    // ^End of Form Submit Event Handler

});
// ^End of Ready, M.D.

// Provide 3 wrong names
    // Create a list of all names 
        // populated from the names in the classmates object AND already answered object
        // populating from both so that there are enough names 
        // check that the name is not the name of the person being used in the question

// Stop classmates who have already been shown from showing again unless all have been shown


// Limit play to 60 seconds
    // Show countdown? (number or bar?)

// Display the image of the person

// Display all 4 names (1 correct and 3 wrong)