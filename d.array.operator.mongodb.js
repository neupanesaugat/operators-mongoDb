use("kec-crud");

//* array operators
//? $all
//? $elemMatch
//? $size

//? find movies whose genre includes both "Drama" and "Comedy"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

//* $all
//? if same field has "$and" and if that field is array then we can use $all

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });

//* $size
//! cannot provide range to size (eg: 4 to 8)
//? must provide concrete value
//? find movies whose genre size is 3

db.movies.find({ genres: { $size: 3 } }, { name: 1, _id: 0, genres: 1 });
