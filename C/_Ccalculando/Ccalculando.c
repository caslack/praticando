#include <stdio.h>
//#include <math.h>

int main() {
  /* code */
  printf(">>>>> Vamos Calcular...\n");
  float priNum,segNum,resultado;
  char operador;
  char opc = 's';
  while(opc =='s'){
    
  printf(">>>Informe o primeiro número: ");
  scanf("%f",&priNum);
  printf(">>>Informe o operador +,-,*,/: ");
  scanf("%s",&operador);
  printf(">>>Informe o segundo número: ");
  scanf("%f",&segNum);
  
if(operador=='+'){
	  resultado =(priNum+segNum);
	}
  
  else
  if(operador=='-'){
	  resultado =(priNum-segNum);
	}
  
  else
  if(operador=='*'){
	  resultado =(priNum*segNum);
	}
  
  else
  if(operador=='/'){
	  if(segNum==0){
		  printf("Não é possível divisão por 0");
	  }
	  resultado =(priNum/segNum);
	       
  }
  printf("\n O resultado de %f %c %f eh %f",priNum, operador, segNum, resultado);
 
  printf("\n Deseja realizar outro calculo?(s=Sim,n=Não): ");
  scanf("%s",&opc);
  
  }
 
  
  return 0;
 
}
