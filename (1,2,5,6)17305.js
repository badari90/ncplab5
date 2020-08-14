var i=prompt("enter the score\n");
var j;
assignGrade(i)
text_to_array()
reverse_sort()


function assignGrade(y){
   if(y<60){
   	alert("your grade is F");
   }
   else if(y>60 && y<70){
    alert("your grade is D");
   }
   else if(y>70 && y<80){
    alert("your grade is C");
   }
   else if(y>80 && y<90){
    alert("your grade is B");
   }
   else if(y>90 && y<100){
    alert("your grade is A");
   }

}

for(j=1;j<=100;j++){
 
   if(j%3==0){
   	console.log("Fizz");
   }
   else if(j%5==0){
   	console.log("Buzz");
   }
   else if(j%3==0 && j%5==0){
    console.log("FizzBuzz");
   }

}

 function text_to_array()
        {
        var n=prompt("Enter Your text message");   
        var a=[]=n.split(' '); 
        console.log("Your message is ");
        for (var i=0;i<n.length && a[i]!=null;i++) {
        console.log(a[i]+",");
        }
        }


 function reverse_sort()
        {
        var n=prompt("Enter Number of names to sort");
        n=parseInt(n);    
        var a=[]; 
        for(var i=0;i<n;i++) {
        a[i]=(prompt("Enter name"+i)); 
        }
        a.sort();
        a.reverse();  
        console.log("The lexicographical order is ");  
        for (var i=0;i<n;i++) {
        console.log(a[i]);
        }
        }




