// main.js
wordList = [];
var wordCount = 0;
var aCount=bCount=cCount=dCount=eCount=fCount=gCount=hCount=iCount=jCount=kCount=lCount=mCount=nCount=oCount=pCount=qCount=rCount=sCount=tCount=uCount=vCount=wCount=xCount=yCount=zCount = 0;

function saveInput() {
    wordList.push(document.getElementById("enteredWord").value);
    wordCount++;
    whichLettersArePresent();
    document.getElementById("enteredWord").value = ""; // clear the input
    console.log("Word count:", wordCount);

    if (wordCount == 10) {
        // Save all counts to localStorage before navigating
        const counts = {a:aCount,b:bCount,c:cCount,d:dCount,e:eCount,f:fCount,g:gCount,h:hCount,i:iCount,j:jCount,k:kCount,l:lCount,m:mCount,n:nCount,o:oCount,p:pCount,q:qCount,r:rCount,s:sCount,t:tCount,u:uCount,v:vCount,w:wCount,x:xCount,y:yCount,z:zCount};
        localStorage.setItem('letterCounts', JSON.stringify(counts));
        window.location.href = "results.html";
    }
}

function whichLettersArePresent() {
    const word = wordList[wordCount-1];
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    // instead of 26 separate variables, just loop!
    for (const letter of letters) {
        const count = word.split(letter).length - 1;
        if (letter === 'a') aCount += count;
        else if (letter === 'b') bCount += count;
        else if (letter === 'c') cCount += count;
        else if (letter === 'd') dCount += count;
        else if (letter === 'e') eCount += count;
        else if (letter === 'f') fCount += count;
        else if (letter === 'g') gCount += count;
        else if (letter === 'h') hCount += count;
        else if (letter === 'i') iCount += count;
        else if (letter === 'j') jCount += count;
        else if (letter === 'k') kCount += count;
        else if (letter === 'l') lCount += count;
        else if (letter === 'm') mCount += count;
        else if (letter === 'n') nCount += count;
        else if (letter === 'o') oCount += count;
        else if (letter === 'p') pCount += count;
        else if (letter === 'q') qCount += count;
        else if (letter === 'r') rCount += count;
        else if (letter === 's') sCount += count;
        else if (letter === 't') tCount += count;
        else if (letter === 'u') uCount += count;
        else if (letter === 'v') vCount += count; // THIS WAS MISSING
        else if (letter === 'w') wCount += count;
        else if (letter === 'x') xCount += count;
        else if (letter === 'y') yCount += count;
        else if (letter === 'z') zCount += count;
    }
}

function findTotals() {
    // Load counts from localStorage (this is what survives page navigation)
    const saved = localStorage.getItem('letterCounts');
    if (!saved) {
        console.log("No data found!");
        return;
    }
    const counts = JSON.parse(saved);
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const letterAmounts = letters.split('').map(l => counts[l]);

    const max = Math.max(...letterAmounts);
    const min = Math.min(...letterAmounts);

    // Simpler way to find the letter: just use the index directly!
    const mostUsedLetter = letters[letterAmounts.indexOf(max)];
    const leastUsedLetter = letters[letterAmounts.indexOf(min)];

    // .innerText not .value — spans don't have .value!
    document.getElementById("mostUsedLetter").innerText = mostUsedLetter;
    document.getElementById("leastUsedLetter").innerText = leastUsedLetter;

    console.log("Most used:", mostUsedLetter);
    console.log("Least used:", leastUsedLetter);
}