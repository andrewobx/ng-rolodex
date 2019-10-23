exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Andrew",
          address: "234 Kauai St.",
          mobile: "242-136-2413",
          work: "111-111-1111",
          home: "222-222-2222",
          email: "whale@what.com",
          twitter: "@obianoandrew",
          instagram: "@andrewobiano",
          github: "AndrewObiano",
          created_by: 1
        },
        {
          name: "Daniel",
          address: "929 Japan Rd.",
          mobile: "333-245-9883",
          work: "444-333-7777",
          home: "000-448-6666",
          email: "yoyoyo@japanese.edu",
          twitter: "@IchiyamaTweet",
          instagram: "@ichiyamadanny",
          github: "danielichi",
          created_by: 2
        },
        {
          name: "Lewis",
          address: "1934 Kakaako Cir.",
          mobile: "999-923-2432",
          work: "234-234-2342",
          home: "111-111-1111",
          email: "lewis@yahoo.com",
          twitter: "@nozakiman",
          instagram: "@nozakiman",
          github: "lewisNozaki",
          created_by: 3
        }
      ]);
    });
};
