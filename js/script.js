const numberOfFilms = +prompt('How many films have you already seen?', '');


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const question1 = prompt('One of the last films you have seen?', '');
const star1 = prompt('How many stars you will give him?', '');
const question2 = prompt('One of the last films you have seen?', '');
const star2 = prompt('How many stars you will give him?', '');

personalMovieDB.movies[question1] = star1;
personalMovieDB.movies[question2] = star2;


console.log(personalMovieDB);