function setValue(){


    if(true){

        var x=10;
        const y=14;
        let z=12;

    }

    console.log(x)   // ✅ 1 - function scoped
    // console.log(y)   // ❌ ReferenceError - block scoped
    // console.log(z)   // ❌ ReferenceError - block scoped
}


console.log(varHoisted); // ✅ undefined (hoisted)
var varHoisted = "I am var";

// console.log(letHoisted); // ❌ ReferenceError
// let letHoisted = "I am let";

// console.log(constHoisted); // ❌ ReferenceError
// const constHoisted = "I am const";
setValue();