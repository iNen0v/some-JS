// const a = 'a'
// console.log(a >= 'a' && a<= 'z');



// function checkPasswordStrength(password) {

//     let lengthCriteria = password.length >= 8;
//     let uppercaseCriteria = /[A-Z]/.test(password);
//     let lowercaseCriteria = /[a-z]/.test(password);
//     let digitCriteria = /[0-9]/.test(password);
//     let specialCharCriteria = /[!@#$%^&*()]/.test(password);


//     let criteriaMet = [lengthCriteria, uppercaseCriteria, lowercaseCriteria, digitCriteria, specialCharCriteria].filter(Boolean).length;


//     let strength;
//     if (criteriaMet <= 1) {
//         strength = "Weak";
//     } else if (criteriaMet <= 3) {
//         strength = "Moderate";
//     } else {
//         strength = "Strong";
//     }

//     return strength;
// }


// let password = "p0wer@d124!LLLoOO!";
// let strength = checkPasswordStrength(password);
// console.log(`Password Strength: ${strength}`);


// function calculateARI(text) {

//     let characters = 0;
//     let words = 0;
//     let sentences = 0;

//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char.match(/[a-zA-Z0-9]/)) {
//             characters++;
//         }
//     }

//     words = text.split(/\s+/).filter(word => word.length > 0).length;
//     sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;

 
//     let ARI = 4.71 * (characters / words) + 0.5 * (words / sentences) - 21.43;

//     let gradeLevel;
//     if (ARI < 1) {
//         gradeLevel = "Kindergarten";
//     } else if (ARI >= 1 && ARI <= 3) {
//         gradeLevel = "Elementary School";
//     } else if (ARI >= 4 && ARI <= 7) {
//         gradeLevel = "Middle School";
//     } else if (ARI >= 8 && ARI <= 10) {
//         gradeLevel = "High School";
//     } else if (ARI >= 11 && ARI <= 12) {
//         gradeLevel = "College";
//     } else {
//         gradeLevel = "Professor";
//     }


//     return `ARI Score: ${ARI.toFixed(2)}, Grade Level: ${gradeLevel}`;
// }

// let text = "Your text passage goes here. Replace this with actual text.";
// let result = calculateARI(text);
// console.log(result);
