var users = [
    {"id": 1, "username": "akhil", "email": "akhil@gmail.com", "password": "Password@123","following":[2,3]},
    {"id": 2, "username": "nikil", "email": "nikil@gmail.com", "password": "Password@123","following":[1,3,4,6]},
    {"id": 3, "username": "anu", "email": "akhil@gmail.com", "password": "Password@123","following":[2,1,4]},
    {"id": 4, "username": "vinu", "email": "vinu@gmail.com", "password": "Password@123","following":[2,3,6]},
    {"id": 5, "username": "jhon", "email": "dfg@gmail.com", "password": "Password@123","following":[2,3,1,6]},
    {"id": 6, "username": "richard", "email": "ghj@gmail.com", "password": "Password@123","following":[2,3,5]}
]

console.log(users.map(user=>user['following']))