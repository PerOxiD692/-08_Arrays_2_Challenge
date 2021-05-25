
/*** Mini-Challenge  */
// Satzbau + Punktuation
// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"

function getSentence (arr, satzzeichen){

    let gap = " ";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + gap;
        }
        else{
            if (satzzeichen === "S") {
                str += arr[i] + "."
            }
            else if (satzzeichen === "Q") {
                str += arr[i] + "?"
            }
            else if (satzzeichen === "E") {
                str += arr[i] + "!"
            }
            else{
                str = "Bitte gültiges Satzzeichen eingeben";  
            }

        return str; 	
        }
    }
}

function ausgabe(str) {
    console.log(str);
}

/*** Funktion mit Array als Parameter */
// mögliche Tests:
ausgabe(getSentence(["Ich","bin","Peters"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"#"));
