console.log("werkt");


//opdr. 1a
console.log("opdr 1a----------");

const jsonData = `
{
    "firstname": "Judeska",
  "email": "judeska@example.com"
} ` ;

const objData = JSON.parse(jsonData);
console.log("voornaam: ", objData.firstname);
console.log("Email: ", objData.email);

//opdr. 1b
console.log("opdr 1b----------");

const jsonData2 = `{
    "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "birthDate": "1973-01-22",
  "phone": "(555) 555-1234",
  "website": "www.johndoe.com"
}`;

const objData2 = JSON.parse(jsonData2);
console.log("id: ", objData2.id);
console.log("voornaam: ", objData2.firstname);
console.log("achternaam: ", objData2.lastname);

//opdr. 2
console.log("opdr 2----------");

const jsonData3 =`{
    "id": 1,
  "slug": "lorem-ipsum",
  "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
  "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "status": "published",
  "category": "lorem",
  "publishedAt": "04/02/2023 13:25:21",
  "updatedAt": "14/03/2023 17:22:20",
  "userId": 1
}`;

const objData3 = JSON.parse(jsonData3);
console.log("title: ", objData3.title);
console.log("content: ", objData3.content);
console.log("published at: ",objData3.publishedAt);

//opdr. 3
console.log("opdr 3----------");

const jsonData4 = `{
  "id": 4,
  "firstname": "Emily",
  "lastname": "Davis",
  "email": "emilydavis@example.com",
  "birthDate": "1974-11-30",
  "login": {
    "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
    "username": "emilydavis",
    "password": "jsonplaceholder.org",
    "md5": "c1328472c5794a25723600f71c1b4586",
    "sha1": "35544a31cc19bd6520af116554873167117f4d94",
    "registered": "2022-07-10T11:21:20.033Z"
  },
  "address": {
    "street": "321 Maple Street",
    "suite": "Apt. 50",
    "city": "Anytown",
    "zipcode": "12345-6789",
    "geo": {
      "lat": "42.9012",
      "lng": "-71.5678"
    }
  },
  "phone": "(555) 555-3456",
  "website": "www.emilydavis.com",
  "company": {
    "name": "GHI Corporation",
    "catchPhrase": "Your success is our priority",
    "bs": "Consulting"
  }
}`;
  
const objData4 = JSON.parse(jsonData4);
console.log("email: ", objData4.email);
console.log("gebruikersnaam: ", objData4.login.username);
console.log("stad: ",objData4.address.city);
console.log("bedrifsnaam: ",objData4.company.name);

//opdr. 4
console.log("opdr 4----------");

const jsonData5 = `{
  "id": 11,
  "postId": 3,
  "userId": 2,
  "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
}`;

const objData5 = JSON.parse(jsonData5);
console.log("gebruiker: ", objData5);

//opdr. 5
console.log("opdr 5---------");

const objData6 = `{
  [
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]
}`;

