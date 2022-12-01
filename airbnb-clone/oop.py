class Player:
    def __init__(self, name, xp):
        self.name = name
        self.xp = xp
    def say_hello(self):
        print(f'Hello my name is {self.name}')

lgh = Player('lgh', 1000)
lgh.say_hello()