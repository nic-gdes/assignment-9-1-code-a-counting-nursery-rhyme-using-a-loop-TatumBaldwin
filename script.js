
var verseOne = " green and speckled frogs sitting on a speckled log, eating the most delicious bugs, yum, yum. One jumped into the pool, where it was nice and cool"
let verseTwo = "Now there are just "
const verseThree = " speckled frogs, glub, glub, "
var alternateVerseTwo = "Now there's only "
let alternateVerseThree = " speckled frog, glub, glub, "
const lastVerse = " He jumped into the pool, where it was nice and cool, now there are no more speckled frogs"



// there are 5 frogs sitting on a log, eating bugs
 for (let i = 5; i > 1; i--) {


        // console log
        console.log(i + verseOne);

         // dom manipulation 5 speckled frogs
        var fiveFrogs = document.getElementById('five');
        console.log(five);
        fiveFrogs.textContent = (5 + verseOne);



// one hopped off and now there are 4
        if (i === 5) {

            // console log
            console.log(verseTwo + 4 + verseThree);

            // dom manipulation 4 speckled frogs
            var fourFrogs = document.getElementById('four');
            console.log(four);
            fourFrogs.textContent = (verseTwo + 4 + verseThree + 4 + verseOne);
        }

// one hopped off and now there are 3
        if (i === 4) {

            // console log
            console.log(verseTwo + 3 + verseThree);

            // dom manipulation 4 speckled frogs
            var threeFrogs = document.getElementById('three');
            console.log(three);
            threeFrogs.textContent = (verseTwo + 3 + verseThree + 3 + verseOne);
        }

// one hopped off and now there are 2
        if (i === 3) {

            // console log
            console.log(verseTwo + 2 + verseThree);

            // dom manipulation 4 speckled frogs
            var twoFrogs = document.getElementById('two');
            console.log(two);
            twoFrogs.textContent = (verseTwo + 2 + verseThree + 2 + verseOne);
        }

// one hopped off and now there is 1 that will jump off
        if (i === 2) {

            // console log
            console.log(alternateVerseTwo + 1 + alternateVerseThree + lastVerse);

            // dom manipulation 4 speckled frogs
            var oneFrogs = document.getElementById('one');
            console.log(one);
            oneFrogs.textContent = (alternateVerseTwo + 1 + alternateVerseThree + lastVerse);
        }

 }

// messing around with color change on click

const rhymeList = document.querySelectorAll(".items li");

for (rhyme of rhymeList) {
    rhyme.addEventListener("click", function() {
        this.style.color = "red";
    })
}
