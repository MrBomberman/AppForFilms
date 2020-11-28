'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films have you already seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already seen?', '');
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const question = prompt('One of the last films you have seen?', ''),
            rating = prompt('How many stars you will give him?', '');
    
        if (question != null && rating != null && question != '' && rating != '' && question.length < 50 && rating.length < 50) {
            personalMovieDB.movies[question] = rating;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Oh, you have seen few films');
    } else if (10 <= personalMovieDB.count < 30) {
        console.log('Oh, you have seen not so many films');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a really great watcher of films');
    } else {
        console.log('Oh, It is a mistake');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        let qGernre = prompt(`Your favorite genre and its number ${i}`);
        personalMovieDB.genres[i-1] = qGernre;
    }
}
writeYourGenres();