# calculadora simples
import os
os.system('cls' if os.name == 'nt' else 'clear')
clear = lambda: os.system('clear')


print("\033[33m" + "#### < Bem vindo a calculadora > ####" + "\033[0;0m")
opc = 's'
while opc == 's':
        
        primeiro_numero = float(input("\nInforme o primeiro número >>> "))
        operacao = input("\nInforme a operação:\n + para Adição \n / para Divisão \n * para Multiplicação \n - para Subtração \n>>> ") 
        segundo_numero = float(input("\nInforme o segundo número >>> "))
        if operacao =='+':
         resultado = primeiro_numero + segundo_numero
        elif operacao =='-':
         resultado = primeiro_numero - segundo_numero
        elif operacao =='*':
         resultado = primeiro_numero * segundo_numero
        if operacao =='/' and segundo_numero != 0:
                resultado = primeiro_numero / segundo_numero
        else:
                print("\033[31m" + "Não é possível dividir por 0"+"\033[0;0m")
        exit()
        print("\nResultado : " + str(primeiro_numero) + ' ' + str(operacao) + ' ' + str(segundo_numero) + ' = ' + str(resultado))
        opc = str(input("\nDeseja realizar outro calculo?\n s para Sim \n n para Não\n >>> "))
        if opc == 's':
                clear()
        elif opc == 'n':
                print("\033[33m" + "\nAté mais...\n" + "\033[0;0m")
        else:
                print("Opção inválida")


        
        






               

               


