// main.js
wordList = [];
var wordCount = 0;
var aCount=bCount=cCount=dCount=eCount=fCount=gCount=hCount=iCount=jCount=kCount=lCount=mCount=nCount=oCount=pCount=qCount=rCount=sCount=tCount=uCount=vCount=wCount=xCount=yCount=zCount = 0;
var mostUsedLetter = '';
var leastUsedLetter = '';
function findTotals() {
    letterAmounts = [aTotal(), bTotal(), cTotal(), dTotal(), eTotal(), fTotal(), gTotal(), hTotal(), iTotal(), jTotal(), kTotal(), lTotal(), mTotal(), nTotal(), oTotal(), pTotal(), qTotal(), rTotal(), sTotal(), tTotal(), uTotal(), vTotal(), wTotal(), xTotal(), yTotal(), zTotal()];
    var max = Math.max(...letterAmounts);
    var min = Math.min(...letterAmounts);
    console.log("ok we findin the totals");
    if (letterAmounts.indexOf(max) === 0) {
        mostUsedLetter = 'a';
        console.log("hi i made it to a");
    }
    if (letterAmounts.indexOf(max) === 1) {
        mostUsedLetter = 'b';
        console.log("hi i made it to b");
    }
    if (letterAmounts.indexOf(max) === 2) {
        mostUsedLetter = 'c';
    }
    if (letterAmounts.indexOf(max) === 3) {
        mostUsedLetter = 'd';
        console.log("hi i made it to d");
    }
    if (letterAmounts.indexOf(max) === 4) {
        mostUsedLetter = 'e';
    }
    if (letterAmounts.indexOf(max) === 5) {
        mostUsedLetter = 'f';
    }
    if (letterAmounts.indexOf(max) === 6) {
        mostUsedLetter = 'g';
    }
    if (letterAmounts.indexOf(max) === 7) {
        mostUsedLetter = 'h';
    }
    if (letterAmounts.indexOf(max) === 8) {
        mostUsedLetter = 'i';
    }
    if (letterAmounts.indexOf(max) === 9) {
        mostUsedLetter = 'j';
    }
    if (letterAmounts.indexOf(max) === 10) {
        mostUsedLetter = 'k';
    }
    if (letterAmounts.indexOf(max) === 11) {
        mostUsedLetter = 'l';
    }
    if (letterAmounts.indexOf(max) === 12) {
        mostUsedLetter = 'm';
    }
    if (letterAmounts.indexOf(max) === 13) {
        mostUsedLetter = 'n';
    }
    if (letterAmounts.indexOf(max) === 14) {
        mostUsedLetter = 'o';
    }
    if (letterAmounts.indexOf(max) === 15) {
        mostUsedLetter = 'p';
    }
    if (letterAmounts.indexOf(max) === 16) {
        mostUsedLetter = 'q';
    }
    if (letterAmounts.indexOf(max) === 17) {
        mostUsedLetter = 'r';
    }
    if (letterAmounts.indexOf(max) === 18) {
        mostUsedLetter = 's';
    }
    if (letterAmounts.indexOf(max) === 19) {
        mostUsedLetter = 't';
    }
    if (letterAmounts.indexOf(max) === 20) {
        mostUsedLetter = 'u';
    }
    if (letterAmounts.indexOf(max) === 21) {
        mostUsedLetter = 'v';
    }
    if (letterAmounts.indexOf(max) === 22) {
        mostUsedLetter = 'w';
    }
    if (letterAmounts.indexOf(max) === 23) {
        mostUsedLetter = 'x';
    }
    if (letterAmounts.indexOf(max) === 24) {
        mostUsedLetter = 'y';
    }
    if (letterAmounts.indexOf(max) === 25) {
        mostUsedLetter = 'z';
    }
    if (letterAmounts.indexOf(min) === 0) {
        leastUsedLetter = 'a';
    }
    if (letterAmounts.indexOf(min) === 1) {
        leastUsedLetter = 'b';
    }
    if (letterAmounts.indexOf(min) === 2) {
        leastUsedLetter = 'c';
    }
    if (letterAmounts.indexOf(min) === 3) {
        leastUsedLetter = 'd';
    }
    if (letterAmounts.indexOf(min) === 4) {
        leastUsedLetter = 'e';
    }
    if (letterAmounts.indexOf(min) === 5) {
        leastUsedLetter = 'f';
    }
    if (letterAmounts.indexOf(min) === 6) {
        leastUsedLetter = 'g';
    }
    if (letterAmounts.indexOf(min) === 7) {
        leastUsedLetter = 'h';
    }
    if (letterAmounts.indexOf(min) === 8) {
        leastUsedLetter = 'i';
    }
    if (letterAmounts.indexOf(min) === 9) {
        leastUsedLetter = 'j';
    }
    if (letterAmounts.indexOf(min) === 10) {
        leastUsedLetter = 'k';
    }
    if (letterAmounts.indexOf(min) === 11) {
        leastUsedLetter = 'l';
    }
    if (letterAmounts.indexOf(min) === 12) {
        leastUsedLetter = 'm';
    }
    if (letterAmounts.indexOf(min) === 13) {
        leastUsedLetter = 'n';
    }
    if (letterAmounts.indexOf(min) === 14) {
        leastUsedLetter = 'o';
    }
    if (letterAmounts.indexOf(min) === 15) {
        leastUsedLetter = 'p';
    }
    if (letterAmounts.indexOf(min) === 16) {
        leastUsedLetter = 'q';
    }
    if (letterAmounts.indexOf(min) === 17) {
        leastUsedLetter = 'r';
    }
    if (letterAmounts.indexOf(min) === 18) {
        leastUsedLetter = 's';
    }
    if (letterAmounts.indexOf(min) === 19) {
        leastUsedLetter = 't';
    }
    if (letterAmounts.indexOf(min) === 20) {
        leastUsedLetter = 'u';
    }
    if (letterAmounts.indexOf(min) === 21) {
        leastUsedLetter = 'v';
    }
    if (letterAmounts.indexOf(min) === 22) {
        leastUsedLetter = 'w';
    }
    if (letterAmounts.indexOf(min) === 23) {
        leastUsedLetter = 'x';
    }
    if (letterAmounts.indexOf(min) === 24) {
        leastUsedLetter = 'y';
    }
    if (letterAmounts.indexOf(min) === 25) {
        leastUsedLetter = 'z';
    }
    document.getElementById("mostUsedLetter").value = mostUsedLetter;
    document.getElementById("leastUsedLetter").value = leastUsedLetter;
    console.log("Most used letter: ", mostUsedLetter);
    console.log("Least used letter: ", leastUsedLetter);
}

function saveInput() {
    wordList.push(document.getElementById("enteredWord").value);
    wordCount++;
    whichLettersArePresent();
    console.log("Input saved to variable:", wordList[wordCount-1]);
    console.log("Word count:", wordCount);
    console.log("Word list:", wordList);
    console.log("A count: ", aCount);
    console.log("B count: ", bCount);
    if (wordCount == 10) {
        window.location.href = "results.html";
    }
}
function whichLettersArePresent() {
    // const lettersPresent = [];
    aPresentNum = wordList[wordCount-1].split('a').length - 1; bPresentNum = wordList[wordCount-1].split('b').length - 1;  cPresentNum = wordList[wordCount-1].split('c').length - 1; dPresentNum = wordList[wordCount-1].split('d').length - 1; ePresentNum = wordList[wordCount-1].split('e').length - 1;
        fPresentNum = wordList[wordCount-1].split('f').length - 1; gPresentNum = wordList[wordCount-1].split('g').length - 1; hPresentNum = wordList[wordCount-1].split('h').length - 1; iPresentNum = wordList[wordCount-1].split('i').length - 1; jPresentNum = wordList[wordCount-1].split('j').length - 1; 
        kPresentNum = wordList[wordCount-1].split('k').length - 1; lPresentNum = wordList[wordCount-1].split('l').length - 1; mPresentNum = wordList[wordCount-1].split('m').length - 1; nPresentNum = wordList[wordCount-1].split('n').length - 1; oPresentNum = wordList[wordCount-1].split('o').length - 1; 
        pPresentNum = wordList[wordCount-1].split('p').length - 1; qPresentNum = wordList[wordCount-1].split('q').length - 1; rPresentNum = wordList[wordCount-1].split('r').length - 1; sPresentNum = wordList[wordCount-1].split('s').length - 1; tPresentNum = wordList[wordCount-1].split('t').length - 1; 
        uPresentNum = wordList[wordCount-1].split('u').length - 1; vPresentNum = wordList[wordCount-1].split('v').length - 1; wPresentNum = wordList[wordCount-1].split('w').length - 1; xPresentNum = wordList[wordCount-1].split('x').length - 1;
        yPresentNum = wordList[wordCount-1].split('y').length - 1; zPresentNum = wordList[wordCount-1].split('z').length - 1;
    if (aPresentNum > 0) {
        aCount = aCount+aPresentNum;
    }
    if (bPresentNum > 0) {
        bCount = bCount+bPresentNum;
    }
    if (cPresentNum > 0) {
        cCount = cCount+cPresentNum;
    }
    if (dPresentNum > 0) {
        dCount = dCount+dPresentNum;
    }
    if (ePresentNum > 0) {
        eCount = eCount+ePresentNum;
    }
    if (fPresentNum > 0) {
        fCount = fCount+fPresentNum;
    }
    if (gPresentNum > 0) {
        gCount = gCount+gPresentNum;
    }
    if (hPresentNum > 0) {
        hCount = hCount+hPresentNum;
    }
    if (iPresentNum > 0) {
        iCount = iCount+iPresentNum;
    }
    if (jPresentNum > 0) {
        jCount = jCount+jPresentNum;
    }
    if (kPresentNum > 0) {
        kCount = kCount+kPresentNum;
    }
    if (lPresentNum > 0) {
        lCount = lCount+lPresentNum;
    }
    if (mPresentNum > 0) {
        mCount = mCount+mPresentNum;
    }
    if (nPresentNum > 0) {
        nCount = nCount+nPresentNum;
    }
    if (oPresentNum > 0) {
        oCount = oCount+oPresentNum;
    }
    if (pPresentNum > 0) {
        pCount = pCount+pPresentNum;
    }
    if (qPresentNum > 0) {
        qCount = qCount+qPresentNum;
    }
    if (rPresentNum > 0) {
        rCount = rCount+rPresentNum;
    }
    if (sPresentNum > 0) {
        sCount = sCount+sPresentNum;
    }
    if (tPresentNum > 0) {
        tCount = tCount+tPresentNum;
    }
    if (uPresentNum > 0) {
        uCount = uCount+uPresentNum;
    }
    if (wPresentNum > 0) {
        wCount = wCount+wPresentNum;
    }
    if (xPresentNum > 0) {
        xCount = xCount+xPresentNum;
    }
    if (yPresentNum > 0) {
        yCount = yCount+yPresentNum;
    }
    if (zPresentNum > 0) {
        zCount = zCount+zPresentNum;
    }
    // console.log("Letters present: ", lettersPresent);
    // return lettersPresent;
}
function aTotal() {
    console.log("a count: ", aCount);
    return aCount;
}
function bTotal() {
    return bCount;
}
function cTotal() {
    return cCount;
}
function dTotal() {
    return dCount;
}
function eTotal() {
    return eCount;
}
function fTotal() {
    return fCount;
}
function gTotal() {
    return gCount;
}
function hTotal() {
    return hCount;
}
function iTotal() {
    return iCount;
}
function jTotal() {
    return jCount;
}
function kTotal() {
    return kCount;
}
function lTotal() {
    return lCount;
}
function mTotal() {
    return mCount;
}
function nTotal() {
    return nCount;
}
function oTotal() {
    return oCount;
}
function pTotal() {
    return pCount;
}
function qTotal() {
    return qCount;
}
function rTotal() {
    return rCount;
}
function sTotal() {
    return sCount;
}
function tTotal() {
    return tCount;
}
function uTotal() {
    return uCount;
}
function vTotal() {
    return vCount;
}
function wTotal() {
    return wCount;
}
function xTotal() {
    return xCount;
}
function yTotal() {
    return yCount;
}
function zTotal() {
    return zCount;
}