console.log("werkt");


//opdr. 1a
const jsonData = `
{
    "firstname": "Judeska",
  "email": "judeska@example.com"
} ` ;

const objData = JSON.parse(jsonData);
console.log("voornaam: ", objData.firstname);
console.log("Email: ", objData.email);

//opdr. 1b
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
console.log("content: ", );

