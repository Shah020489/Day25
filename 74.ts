function swappingVariablesValue(){
    let a=10;
    let b=20;
    console.log("Before swapping value of a is "+a+" and value of b is "+b);
    let temp=0;
    temp=a;
    a=b;
    b=temp;
    console.log("After swapping value of a is "+a+" and value of b is "+b);
}

swappingVariablesValue();