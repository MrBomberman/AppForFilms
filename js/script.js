'use strict';




const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you already seen?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already seen?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Oh, you have seen few films');
        } else if (10 <= personalMovieDB.count < 30) {
            console.log('Oh, you have seen not so many films');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a really great watcher of films');
        } else {
            console.log('Oh, It is a mistake');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let qGenre = prompt(`Your favorite genre and its number ${i}`).toLowerCase();
            if (qGenre == '' || qGenre == null) {
                console.log('You need to write your genre');
                i--;
            } else {
                personalMovieDB.genres[i-1] = qGenre;
                // personalMovieDB.genres = qGenre.split(', ');
                // personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i} - is ${item}`);
        });
    },
    // forEach: function () {
    //     for (let i = 1; i < 4; i ++){
    //         console.log(`Your favorite genre ${i} - is ${personalMovieDB.genres[i]}`);
    //     }
    // }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
// personalMovieDB.forEach();

