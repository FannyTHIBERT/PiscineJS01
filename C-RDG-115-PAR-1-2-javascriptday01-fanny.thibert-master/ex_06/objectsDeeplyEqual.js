function objectsDeeplyEqual(cmp1, cmp2){
    const cmp1JSON = JSON.stringify(cmp1);
    const cmp2JSON = JSON.stringify(cmp2);
    if(cmp1JSON===cmp2JSON)
    {
        return true;
    }
   
    else
    {
        return false
    }
}

/*var obj = {here: {is: "an"}, object: 2};

console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));*/