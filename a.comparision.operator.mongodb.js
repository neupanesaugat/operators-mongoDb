use("kec-crud");

//? comparison operator:
//? $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

//?*  $eq
//? find movie whose name is "Glee"
//? name === "Glee"
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, _id: 0, genres: 1 });

//? equivalent code
// db.movies.find({ name: "Glee" }, { name: 1 }); //? automatically {$eq} is added here(acts as shortcut for above code)

//* $gt (greater than)
//? find movies whose runtime is greater than 70

// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1 });

//* gte
//? find movies whose rating is greater than or equals to 9

// db.movies.find(
//   { "rating.average": { $gte: 9 } }, //? rating is object with key average which has actual rating
//   { name: 1, averageRating: "$rating.average" }
// );

//* $ne

//? movies without id 1

// db.movies.find({ id: { $ne: 1 } }, { name: 1, id: 1 });

//?alternatively

// db.movies.find({ id: { $not: { $eq: 1 } } }, { name: 1, id: 1 });
