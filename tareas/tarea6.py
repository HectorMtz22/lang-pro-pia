print("CONVERSOR DE DECIMALES A OTRA BASE")
number = input("Ingresa un numero de base decimal: ") 
base = input("Ingresa la base: ")
numbers = []

def residuo(number, base, iteration = 0):
    cociente = number // base
    res = number % base
    print("  " * iteration, res, cociente)
    numbers.append(res)

    if (cociente < base): 
        numbers.append(cociente)
        return
    else:
        return residuo(cociente, base, iteration + 1)

base = int(base)
residuo(int(number), base)

print("El resultante base", base, "es: ", end='')
for i in range(len(numbers) - 1, -1, -1):
    print(numbers[i], end='')

print()
