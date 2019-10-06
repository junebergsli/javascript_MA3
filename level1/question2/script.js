//Console.log out elements in JSON file
//Copied the content out of the JSON file:

var data = {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
}

//A for loop function to console log each element. (Wanted to keep the code short, but show the whole json)

for (var i = 0; i < data.video.length; i++) {
    console.log(data.video[i]);
    console.log(data.video[i].author.data[i])}; 
  

