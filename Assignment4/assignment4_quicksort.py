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


for i in range(0,3):
    unit = Tshirt()
    arr.append(unit)
    unit.execute()

print()

def sort(arr):
    """Sort the array by using quicksort."""
    
    less = []
    equal = []
    greater = []

    if len(arr) > 1:
        pivot = arr[0].size
        print(pivot)
        print()
        for x in arr:
            if x.size < pivot:
                less.append(x)
                print("<",x.size)
            elif x.size == pivot:
                equal.append(x)
                print("=",x.size)
            elif x.size > pivot:
                greater.append(x)
                print(">",x.size)
            
            
        return sort(less)+equal+sort(greater)
                  
    else:  
        return arr

sort(arr)

for i in range(len(arr)):
    print(arr[i].color, arr[i].size, arr[i].fabric)

