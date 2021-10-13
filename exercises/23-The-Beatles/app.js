function sing(){
return `${letItBe(4)}, whisper words of wisdom, ${letItBe(5)}, there will be an answer, ${letItBe(1)}`;

}

function letItBe(letra){
    let lyrics=[];
for (let i=0; i<letra; i++){
    lyrics.push('let it be');
    
}
return lyrics.join(', ');
}
//Your code above ^^^

console.log(sing());