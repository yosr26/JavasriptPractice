function getUserById(users,id){
    i=0;
      while (users[i].id !=id){
        i=i+1;
    }
    console.log(users[i]);
}
const T = [
    {
    id : 1,
    first:'ahmed',
    last:'ben ali',
    age : 23,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 2,
    first:'aziz',
    last:'ameri',
    age : 44,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    {
    id : 3,
    first:'khalil',
    last: 'ben lamine',
    age : 18,
    email : 'ahmed.benali@gmail.com',
    address :'Tunis'
    },
    ]
    getUserById(T,1);
   

   