'use strict';
const numberOfFilms = +prompt('How many films have you already seen?', '');


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



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



if (personalMovieDB.count < 10) {
    console.log('Oh, you have seen few films');
} else if (10 <= personalMovieDB.count < 30) {
    console.log('Oh, you have seen not so many films');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a really great watcher of films');
} else {
    console.log('Oh, It is a mistake');
}

console.log(personalMovieDB);