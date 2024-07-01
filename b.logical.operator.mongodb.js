use("kec-crud");

//? logical operator:
//? $and, $or, $not, $nor

//* $and
//? find movies whose genre is action and rating is greater than 7

//?syntax1:

// db.movies.find(
//   { $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }] },
//   { name: 1, averageRating: "$rating.average", genres: 1, _id: 0 }
// );

//?syntax2:

// db.movies.find(
//   { genres: "Action", "rating.average": { $gt: 7 } }, //? , => AND
//   { name: 1, averageRating: "$rating.average", genres: 1, _id: 0 }
// );

//* $or
//? find movies whose genres is Horror or network country is Japan

// db.movies.find(
//   { $or: [{ genres: "Horror" }, { "network.country.name": "Japan" }] },
//   { name: 1, genres: 1, networkCountry: "$network.country.name", _id: 0 }
// );

//* $nor
//? find movies whose rating is neither greater than 7 nor genre is"Drama"

// db.movies.find(
//   { $nor: [{ genres: "Drama" }, { "rating.average": { $gt: 7 } }] },
//   { name: 1, genres: 1, averageRating: "$rating.average", _id: 0 }
// );
