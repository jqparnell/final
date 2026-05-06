// main.js
const wordList = [];
let wordCount = 0;
let aCount=bCount=cCount=dCount=eCount=fCount=gCount=hCount=iCount=jCount=kCount=lCount=mCount=nCount=oCount=pCount=qCount=rCount=sCount=tCount=uCount=vCount=wCount=xCount=yCount=zCount = 0;

function saveInput() {
    wordList.push(document.getElementById("enteredWord").value);
    wordCount++;
    updateLetterCount();
    console.log("Input saved to variable:", wordList[wordCount-1]);
    console.log("Word count:", wordCount);
    console.log("Word list:", wordList);
}
function updateLetterCount() {
    aPresentNum = wordList[wordCount-1].split('a').length - 1;
    aCount = aCount+aPresentNum;
    console.log("A's in word: ", aPresentNum);
    console.log("Total A's: ", aCount);
}
