
var verseOne = " green and speckled frogs sitting on a speckled log, eating the most delicious bugs, yum, yum. One jumped into the pool, where it was nice and cool"
let verseTwo = "Now there are just "
const verseThree = " speckled frogs, glub, glub"
var alternateVerseTwo = "Now there's only "
let alternateVerseThree = " speckled frog, glub, glub"
const lastVerse = "He jumped into the pool, where it was nice and cool, now there are no more speckled frogs"

// there are 5 frogs sitting on a log, eating bugs
    for (let i = 5; i > 1; i--) {
        console.log(i + verseOne);

// one hopped off and now there are 4
        if (i === 5) {
            console.log(verseTwo + 4 + verseThree);
        }

// one hopped off and now there are 3
        if (i === 4) {
            console.log(verseTwo + 3 + verseThree);
        }

// one hopped off and now there are 2
        if (i === 3) {
            console.log(verseTwo + 2 + verseThree);
        }

// one hopped off and now there is 1
        if (i === 2) {
            console.log(alternateVerseTwo + 1 + alternateVerseThree);
        }

// one hopped off and now there is 0
    }
    console.log(lastVerse);

