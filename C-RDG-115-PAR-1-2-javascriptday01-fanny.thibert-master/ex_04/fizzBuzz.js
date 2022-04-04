function fizzBuzz(){
    
    let str1 = '';
    
    
    for (let i=1; i<=20; i++){
        
            if(i % 3 === 0 && i % 5 != 0)
            {
                str1 = str1 + 'Fizz';
            }
            else if(i % 3 != 0 && i % 5 === 0)
            {
                str1 = str1 + 'Buzz';
            }
            else if(i % 3 === 0 && i % 5 === 0)
            {
                str1 = str1 + 'FizzBuzz';
            }
            else if(i % 3 != 0 && i % 5 != 0)
            {
                str1 = str1 +  i;
            }
            if(i<20){
            str1 = str1 + ', ';
            }
        
    }
    console.log(str1);
    
}
//fizzBuzz();


/*function fizzBuzz(){
    
    for (let i=1; i<=20; i++){
        if(i % 3 == 0 && i % 5 != 0)
        {
            console.log('Fizz, ');
        }
        else if(i % 3 != 0 && i % 5 == 0)
        {
            console.log('Buzz, ');
        }
        else if(i % 3 == 0 && i % 5 == 0)
        {
            console.log('FizzBuzz, ');
        }
        else if(i % 3 != 0 && i % 5 != 0)
        {
            console.log(i + ', ');
        }
    }
    console.log('Buzz$');
}
fizzBuzz();*/