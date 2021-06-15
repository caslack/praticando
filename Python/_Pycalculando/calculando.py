# calculadora simples
opc = 0
while(opc==0):
    primeiro_numero = float(input("Informe o primeiro número:"))
    operacao = input("Informe a operacao:") 
    segundo_numero = float(input("Informe o segundo número "))

    if operacao =='+':
         resultado = primeiro_numero + segundo_numero
    elif operacao =='-':
         resultado = primeiro_numero - segundo_numero
    elif operacao =='/':
         resultado = primeiro_numero / segundo_numero
    else:
        print('valor inválido')

        print(str(primeiro_numero) + ' ' + str(operacao) + ' ' + str(segundo_numero) + ' = ' + str(resultado))
#if 
opc = int(input('Deseja realizar outra operação (0 - Sim 1 - não):'))


'''
def case1():
    operacao =='+'
    resultado = (primeiro_numero + segundo_numero)
    print(resultado)
    
def  case2():
    operacao =='-'
    resultado = (primeiro_numero - segundo_numero)
def case3():
    operacao =='*'
    resultado = (primeiro_numero * segundo_numero)
def case4():
    operacao =='/'
    resultado = (primeiro_numero / segundo_numero)

def case_default():
    print ("Valor invalido")

#print(resultado) 
'''
