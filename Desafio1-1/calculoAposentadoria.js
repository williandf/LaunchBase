const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;

if ((gender == 'F' && (age + contribution) >= 85) || 
    (gender == 'M' && (age + contribution) >= 95)){
    console.log(`${name} você pode se aposentar!`)
} else {
    console.log(`${name} você ainda não pode se aposentar!`)
};