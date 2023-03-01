let addition=(a,b)=>(a*1000+b*1000)/1000;
let subtraction=(a,b)=>(a*1000-b*1000)/1000;
let multiply=(a,b)=>a*b;
let divide=(a,b)=>{
	                 if(b==0)
					    return "impossible";
					 else
                        sum=a/b;
                     
                     if(sum.toString().length>5)					 
                        sum=(a/b).toFixed(3);
					
					return sum;
                  }

function operate(op,number1,number2)
{
	let result=0;
	switch(op)
	{
		case "+":
		  result=addition(number1,number2);
		  break;
		case "-":
		  result=subtraction(number1,number2);
		  break;
		case "*":
		  result=multiply(number1,number2);
		  break;
		case "/":
		  result=divide(number1,number2);
		  break;
		default:
		   console.log("There is a problem!");
	}
	
	return result;
}

// Populate the display with numbers when a number is pressed!

let numbers=document.querySelectorAll(".number");
let memoryValue=0;
let populate=false;
for(let num of numbers)
   num.addEventListener("click",function()
                                {
									
									if((document.querySelector(".display span").textContent=="0")||(populate==false))
									{ 
									   document.querySelector(".display span").textContent=this.value;
									   populate=true;
									}
									else
									{
									    document.querySelector(".display span").textContent+=this.value;
									}
									
									console.log(memoryValue);
								});
		
// Store the operator that has been chosen and reset the display value!
		
let operators=document.querySelectorAll(".operator");
let theOperation="";
for(let op of operators)
   op.addEventListener("click",function()
                               {  
							        if( theOperation=="")
									{
									  memoryValue=Number(document.querySelector(".display span").textContent);
									  if(memoryValue=="impossible")
									   {
										  document.querySelector(".display span").textContent="Sorry no can do!";
									      memoryValue==0;
									   }
									  console.log("Memory value becomes "+memoryValue);
									}
									else
									{
									   if(populate==true)
									   {
											memoryValue=operate(theOperation,memoryValue,Number(document.querySelector(".display span").textContent));
											if(memoryValue=="impossible")
											{
												document.querySelector(".display span").textContent="Sorry, no can do!";
												document.querySelector("sup").textContent="";
												memoryValue==0;
											}
											else
												document.querySelector(".display span").textContent=memoryValue;
											console.log("Memory value is "+memoryValue);
										}
									}
									theOperation=this.value;
									document.querySelector("sup").textContent=memoryValue+this.value;
									populate=false;
									console.log(theOperation);
							   });
								
document.querySelector(".equals").addEventListener("click",function()
                                                              {
																  memoryValue=operate(theOperation,memoryValue,Number(document.querySelector(".display span").textContent));
																  if(memoryValue=="impossible")
									                              {
										                              document.querySelector(".display span").textContent="Sorry no can do!";
																	  document.querySelector("sup").textContent="";
									                              }
																  else
																  {
																	  document.querySelector("sup").textContent+=document.querySelector(".display span").textContent+"=";
																	  document.querySelector(".display span").textContent=memoryValue;
																  }
																  memoryValue=0;
																  theOperation="";
																  populate=false;
															  });
															  
document.querySelector(".clear").addEventListener("click",function()
                                                              {
																  document.querySelector(".display span").textContent="0";
																  document.querySelector("sup").textContent="";
																  memoryValue=0;
																  theOperation="";
																  populate=false;
															  });