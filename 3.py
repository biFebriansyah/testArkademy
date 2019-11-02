import random


def randomize(angka = 0) :

    aray = []
    for i in range(1, angka + 1) :
        number = random.randint(1, 10)
        aray.append(number)

    
    print("Array: ", aray)
    print("Sum: ", sum(aray))



randomize(3)