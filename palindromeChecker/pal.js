function checkPalindrome(){
    let pal = "";
    const word = "anna";
    for (let i = word.length -1; i >= 0; i-- ){
        pal +=word[i];
    }
    if (word === pal){
        return console.log("palindrome");
    }
    return console.log("!palindrome");
}

checkPalindrome();