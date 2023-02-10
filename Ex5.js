function softUsers(users){
    let i = users.length - 1;
    while(i>0){
        if (users[i].age < users[i-1].age){
            let m = users[i];
            users[i] = users[i-1];
            users[i-1]= m;
        }
        i=i-1;
    }
    const F=[];
    for (let i=0; i<users.length; i++){
      F.push(users[i].first);   
    }
    console.log(F);
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
    softUsers(T);