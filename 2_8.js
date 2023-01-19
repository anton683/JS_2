let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
];

console.log(users.findIndex(({role}) => role.includes(' ')));
