//1. Create an array called bands with 3 objects in it. Each of them describes a music band.
//Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.
var bands = [{
name: "Nirvana",
genre: "Rock",
numberOfPerformers: [3,4],
numberOfGroupies: 5700000
}, {
name: "Local H",
genre: "Rock",
numberOfPerformers: 2,
numberOfGroupies: 10
},
{
name: "Weather Report",
genre: "Jazz",
numberOfPerformers: 5,
numberOfGroupies: 1500
}
];
//Now create a constructor function called Band. Have it take in a name, genre,
//numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.
var Band = function (name, genre, numberOfPerformers, numberOfGroupies) {
   this.name=name;
   this.genre=genre;
   this.numberOfPerformers=numberOfPerformers;
   this.numberOfGroupies=numberOfGroupies;

}
//Now create those same bands you made before using the constructor
// function Band using the new keyword. Plug in the values for each of the object keys as argumeters.
var band0 = new Band("Nirvana", "Rock", [3,4], 5700000);
var band1=new Band("Local H", "Rock" ,2,10);
var band2=new Band("Weather Report", "Jazz"  ,5,1500);
//Now create a new array called newBands and push each of the objects that you made into that array.

 var newBands = [band0, band1, band2];
//Alright, you have created new objects using a constructor
//function. Let's say we want to add a new key to the constructor function.
//To do so, go ahead and create a method called bandInfo using the prototype method for
//the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.
Band.prototype.intro = function ( ) {


  alert ( "Hi! The band's name is " + this.name + ". They are generally associated with " + this.genre + " of music." );

}
