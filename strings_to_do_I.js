// Remove Blanks!

// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
    let newStr = ''

    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newStr += str[i]
        }
}
return newStr
}

function removeBlanks(str) {
    let newStr = ''

    for(let char in str) {
        if(str[char] != ' '){
            newStr += str[char]
        }
    }
    return newStr
}


// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

// ------------------------------------------------------------------------>
// Get Digits!

// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
    let newNumStr = ' '

    for(let char in str) {
        if(!isNaN(str[char])) {
            newNumStr += str[char]
        }
    }
    return Number(newNumStr)
}

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// ------------------------------------------------------------------------->
// Acronyms!

// Examples:
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    let wordsArr = str.split(' ') 
    let acronymStr = ''
    
    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "))

// ------------------------------------------------------------------------->
// Count Non-Spaces!

// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    let counter = 0

    for(let char in str) {
        if(str[char] != ' ') {
            counter++
        }
    }
    return counter
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))

// ------------------------------------------------------------------------->
// Remove Shorter Strings!

// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, len) {
    let newStrings = []
    let nextIndex = 0

    for(let value in arr) {
        if(arr[value].length >= len) {
            newStrings[nextIndex++] = arr[value]
        }
    }
    return newStrings
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))