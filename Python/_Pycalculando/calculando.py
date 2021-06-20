# calculadora simples

def calcula():
        primeiro_numero = float(input("Informe o primeiro número:"))
        operacao = input("Informe a operacao:") 
        segundo_numero = float(input("Informe o segundo número "))
        if operacao =='+':
         resultado = primeiro_numero + segundo_numero
        elif operacao =='-':
         resultado = primeiro_numero - segundo_numero
        elif operacao =='/':
         resultado = primeiro_numero / segundo_numero
        print(str(primeiro_numero) + ' ' + str(operacao) + ' ' + str(segundo_numero) + ' = ' + str(resultado))
 
#calcula()

def opcao():
        opc = str(input('Deseja realizar outra operação (s-Sim \n n-Não):'))
if opc == 's':
        calcula()
elif opc =='n':
        exit(0)
else:
        print('valor inválido')

opcao()






               

               


