
exports.seed = async function (knex) {
  await knex("howtos").insert(
    {
    title: "Test How-To",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget. Felis imperdiet proin fermentum leo vel orci porta. Dui nunc mattis enim ut. Massa tincidunt dui ut ornare lectus sit. Sed euismod nisi porta lorem mollis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed euismod nisi porta lorem mollis. Mollis nunc sed id semper risus in hendrerit. Mi quis hendrerit dolor magna eget est. Orci a scelerisque purus semper eget duis at tellus at. Pharetra magna ac placerat vestibulum.",
    userId: 1,
  });
  await knex("howtos").insert(
    {
    title: "Test How-To 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget. Felis imperdiet proin fermentum leo vel orci porta. Dui nunc mattis enim ut. Massa tincidunt dui ut ornare lectus sit. Sed euismod nisi porta lorem mollis.",
    userId: 1,
  })
  await knex("howtos").insert({
    title: "Test How-To 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget. Felis imperdiet proin fermentum leo vel orci porta. Dui nunc mattis enim ut. Massa tincidunt dui ut ornare lectus sit. Sed euismod nisi porta lorem mollis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed euismod nisi porta lorem mollis. Mollis nunc sed id semper risus in hendrerit.",
    userId: 1,
  });
};
