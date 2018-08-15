const zzz = {};

// Create a classmates object with
// Name
// Img (link to img)

// TEST LIST: 60s BATMAN
zzz.batman60s = [
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

// test array with 9 numbers
zzz.array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// test array with 6 objects
zzz.array1withObjects = [
    {
        fruit: 'apple',
        stock: 32
    },
    {
        fruit: 'banana',
        stock: 7
    },
    {
        fruit: 'pear',
        stock: 10
    },
    {
        fruit: 'grape',
        stock: 200
    },
    {
        fruit: 'watermelon',
        stock: 6
    },
    {
        fruit: 'honeydew',
        stock: 14
    }
]

// test empty array
zzz.array2 = []

// Takes an array and returns a number corresponding to random index in that array
zzz.randomArrayIndex = function(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    console.log(`randomArrayIndex index: ${randIndex}`);
    return randIndex;
};

// Removes a number of items from a target array
    // Takes args: 
    // removeFromArray, the array from which items are removed
    // addToArray, the array to which items are added
    // numberToRemove, the number of items to remove from the target array
zzz.arrayToArray = function (removeFromArray, addToArray, numberToRemove) {
    
    // run numberToRemove times
    for (i = 0; i < numberToRemove; i++) {
        
        // holds an array with length of 1
            // .splice returns spliced elements as an array
        const removedValue = removeFromArray.splice(zzz.randomArrayIndex(removeFromArray), 1)
        
        // takes the first (only) item in the array removedValue and adds it to the array in arg addToArray
        addToArray.push(removedValue[0]);
    };
};

// Select array from list of array option
    // Currently just assigning the array, but will later let users pick from a list of topics
    // Variable for the main array is called batman because batman.
    // Will need to convert to function to add to namespace
const batman = zzz.batman60s;

// Empty array of answer options which will be used to constuct buttons
    // Will be added to and called on by several functions
const answerOptions = [];

// Empty array which will contain img and name of the subject
const correctAnswer = [];

// Ready, M.D.
$(function () {
    
    // Removes 1 item from batman and adds it to the correctAnswer array
    zzz.arrayToArray(batman, correctAnswer, 1);

    // Array containing the question/answer object
    console.log(correctAnswer);

    // places the image on the DOM by appending it as an img to the object with the class 'headshot'
    // takes arg(s):
    // correctAnswer - an array of object which contains an attribute named "url"
    const showHeadshot = function(correctAnswer) {

        // Sets variable $image to be the question image
        let $image = $('<img>').attr('src', correctAnswer[0].url).attr('alt', `This is an image of the person who's name needs to be selected in one of the answer buttons.`);
        
        // Places the question image on the DOM under the element with the class "headshot"
        $('.headshot').append($image);
    };

    // takes 2 args, peopleArray - an array of object which contains an attribute named "name", and position - the position in the array
        // Gets the name from 'name' in the peopleArray   
    const getName = function (peopleArray, position) {
        // CLs the name of the correct answer
        console.log(`Correct answer: ${peopleArray[position].name}`);
    };

    // const indexToPass = randomArrayIndex(batman);
    const showPhotoAndName = function(peopleArray, position){
        showHeadshot(peopleArray, position);
        getName(peopleArray, position);
    };

    showPhotoAndName(batman, zzz.randomArrayIndex(batman));

    // Actions to perform on form submit
    $('form').on('submit', function(event){
        // prevent the default
        event.preventDefault();

        // Reset DOM for next face
        $('.headshot').empty();
        $('.name').empty(); // <-- will be getting rid of name after testing

        showPhotoAndName(batman, zzz.randomArrayIndex(batman));
       
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