
var text = "mohamad nour zarei";
var abbreviation = "";
var word = "";
text = text.split(" ");

for(var i = 0;i < text.length; i++){
    word = text[i];
    word = word.split("");
    abbreviation += word[0];
}



console.log(abbreviation);