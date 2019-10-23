exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "MCMoon",
          name: "Calvin",
          email: "koreanman@gmail.com",
          address: "1234 Friend St."
        },
        {
          username: "Fook",
          name: "Kevin",
          email: "chineseman@gmail.com",
          address: "2222 Taxi Blvd."
        },
        {
          username: "Baddy",
          name: "Brad",
          email: "male@mail.com",
          address: "99 Bad Ave."
        }
      ]);
    });
};
