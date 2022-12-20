import random

class Tshirt:
    def __init__(self, func=None):
        colours = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "VIOLET"]
        sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
        fabrics = ["WOOL", "COTTON", "POLYESTER", "RAYON", "LINEN", "CASHMERE", "SILK"]

        self.color = random.choice(colours)
        self.size = random.choice(sizes)
        self.fabric = random.choice(fabrics)
        
        if func:
            self.execute = func
        
    def execute(self):
        print(self.color ,self.size, self.fabric)


arr = []


for i in range(0,5):
    unit = Tshirt()
    arr.append(unit)
    unit.execute()



#bubble sort size ascending
def bubble_sort_sa(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].size > arr[j+1].size:
                arr[j].size, arr[j+1].size = arr[j+1].size, arr[j].size

    
bubble_sort_sa(arr)


#bubble sort size descending
def bubble_sort_sd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].size < arr[j+1].size:
                arr[j].size, arr[j+1].size = arr[j+1].size, arr[j].size

bubble_sort_sd(arr)



#bubble sort colour ascending
def bubble_sort_ca(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].color > arr[j+1].color:
                arr[j].color, arr[j+1].color = arr[j+1].color, arr[j].color

bubble_sort_ca(arr)


#bubble sort colour descending
def bubble_sort_cd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].color < arr[j+1].color:
                arr[j].color, arr[j+1].color = arr[j+1].color, arr[j].color

bubble_sort_cd(arr)


#bubble sort fabric ascending
def bubble_sort_fa(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].fabric > arr[j+1].fabric:
                arr[j].fabric, arr[j+1].cofabriclor = arr[j+1].fabric, arr[j].fabric

bubble_sort_fa(arr)


#bubble sort fabric descending
def bubble_sort_fd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].fabric < arr[j+1].fabric:
                arr[j].fabric, arr[j+1].fabric = arr[j+1].fabric, arr[j].fabric

bubble_sort_fd(arr)



#bubble sort size,color,fabric ascending

def bubble_sort_sa(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].size > arr[j+1].size:
                arr[j].size, arr[j+1].size = arr[j+1].size, arr[j].size

def bubble_sort_ca(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].color > arr[j+1].color:
                arr[j].color, arr[j+1].color = arr[j+1].color, arr[j].color

def bubble_sort_fa(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].fabric > arr[j+1].fabric:
                arr[j].fabric, arr[j+1].cofabriclor = arr[j+1].fabric, arr[j].fabric

bubble_sort_sa(arr)
bubble_sort_ca(arr)
bubble_sort_fa(arr)



#bubble sort size,color,fabric descending

def bubble_sort_sd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].size < arr[j+1].size:
                arr[j].size, arr[j+1].size = arr[j+1].size, arr[j].size

def bubble_sort_cd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].color < arr[j+1].color:
                arr[j].color, arr[j+1].color = arr[j+1].color, arr[j].color

def bubble_sort_fd(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j].fabric < arr[j+1].fabric:
                arr[j].fabric, arr[j+1].fabric = arr[j+1].fabric, arr[j].fabric


bubble_sort_sd(arr)
bubble_sort_cd(arr)
bubble_sort_fd(arr)



'''
for i in range(len(arr)):
    print(arr[i].color, arr[i].size, arr[i].fabric)
'''
