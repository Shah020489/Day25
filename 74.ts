function swappingVariablesValue(){
    let a:number=10;
    let b:number=20;
    console.log("Before swapping value of a is "+a+" and value of b is "+b);
    let temp=0;
    temp=a;
    a=b;
    b=temp;
    console.log("After swapping value of a is "+a+" and value of b is "+b);
}

swappingVariablesValue();