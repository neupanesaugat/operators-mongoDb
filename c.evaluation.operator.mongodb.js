use("kec-crud");

//? evaluation operator
//? $regex, $expr

//* $regex

//? incase we only know some portions of the data
// db.movies.find(
//   { name: { $regex: "top model", $options: "i" } }, //? i for case insensitive
//   { name: 1, _id: 0 }
// );

// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });
