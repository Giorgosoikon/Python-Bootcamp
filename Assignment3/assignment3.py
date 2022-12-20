class Tshirt:
    def __init__(self, func=None):
        self.color = (str.lower(input("T-shirt color? {RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET}")))
        self.size = (str.lower(input("T-shirt size? {XS, S, M, L, XL, XXL, XXXL}")))
        self.fabric = (str.lower(input("T-shirt fabric? {WOOL, COTTON, POLYESTER, RAYON, LINEN, CASHMERE, SILK}")))
        
        if func:
            self.execute = func
        
    def execute(self):
        print("Your product is",self.color ,self.size, self.fabric)


class Payment:
    def __init__(self, func=None):
        if func:
            self.execute = func


def executeCredit():
    unit.execute()
    print("And your payment method is Debit Card")

def executeBank():
    unit.execute()
    print("And your payment method is Bank Transfer")

def executeCash():
    unit.execute()
    print("And your payment method is Cash")

def paymentmethod():
    pm = str.lower(input("Wanna pay with [C]redit, [M]oney or [Cash]?"))

    if pm == "c":
        strat1 = Payment(executeCredit)
        strat1.execute()
            

    elif pm == "m":  
        strat2 = Payment(executeBank)
        strat2.execute()
            

    elif pm == "cash":
        strat3 = Payment(executeCash)
        strat3.execute()
        

if __name__ == "__main__":
    unit = Tshirt()
    paymentmethod()

    
