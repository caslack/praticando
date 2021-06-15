#include <stdio.h>
//#include <math.h>

int main() {
  /* code */
  float priNum,segNum,resultado;
  char operador,op;
  
  printf("Informe o primeiro número: ");
  scanf("%f",&priNum);
  printf("Informe o operador +,-,*,/: ");
  scanf("%s",&operador);
  printf("Informe o segundo número: ");
  scanf("%f",&segNum);
  

do {  

  if(operador=='+'){
	  resultado =(priNum+segNum);
	  printf("\n O resultado é: %f", resultado);
  }
  
  else
  if(operador=='-'){
	  resultado =(priNum-segNum);
	  printf("\n O resultado é: %f", resultado);
  }
  
  else
  if(operador=='*'){
	  resultado =(priNum*segNum);
	  printf("\n O resultado é: %f", resultado);
  }
  
  else
  if(operador=='/'){
	  if(segNum==0){
		  printf("Não é possível divisão por 0");
	  }
	  resultado =(priNum/segNum);
	  printf("\n O resultado é: %f", resultado);
      
  }
 
  printf("\n Deseja realizar outro calculo?(s=Sim,n=Não): ");
  scanf("%i",&op);
  
  } while(op =='s');
  
  return 0;
}
