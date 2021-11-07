#Factorial de un número
factorial<-function(n)
 {
 f<-1
 if(n>1)
 for(i in 1:n)
 f<-f*i
 return(f)
 }
factorial(3)
