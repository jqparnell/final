// main.js
const wordList = [];
let wordCount = 0;
let aCount=bCount=cCount=dCount=eCount=fCount=gCount=hCount=iCount=jCount=kCount=lCount=mCount=nCount=oCount=pCount=qCount=rCount=sCount=tCount=uCount=vCount=wCount=xCount=yCount=zCount = 0;

function saveInput() {
    wordList.push(document.getElementById("enteredWord").value);
    wordCount++;
    whichLettersArePresent();
    console.log("Input saved to variable:", wordList[wordCount-1]);
    console.log("Word count:", wordCount);
    console.log("Word list:", wordList);
    console.log("A count: ", aCount);
    if (wordCount == 100) {
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