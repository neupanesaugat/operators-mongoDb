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

//* $expr
//? if there is no value to compare and you have to compare between two fields

//? find employees whose expense is greater than their income
// db.employee.find({ $expr: { $gt: ["$expense", "$income"] } }); //? $expense and $income define it's field

//? find employee whose income is less than 850
// db.employee.find({ income: { $lt: 850 } });

//?alternative: (income<850)

// db.employee.find({ $expr: { $gt: ["$income", 850] } });
