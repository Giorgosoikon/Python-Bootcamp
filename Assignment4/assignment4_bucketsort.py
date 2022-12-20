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



def insertionSort(b):
    for i in range(1, len(b)):
        up = b[i]
        j = i - 1
        while j >= 0 and b[j] > up:
            b[j + 1] = b[j]
            j -= 1
        b[j + 1] = up    
    return b    
             
def bucketSort(x):
    list = []
    slot_num = 40 
    for i in range(slot_num):
        list.append([])
         
    
    for j in x:
        index_b = int(slot_num * j)
        list[index_b].append(j)
     
    
    for i in range(slot_num):
        list[i] = insertionSort(list[i].size)
         
    
    k = 0
    for i in range(slot_num):
        for j in range(len(list[i])):
            x[k] = list[i][j].size
            k += 1
    return x



bucketSort(arr)
