class Human:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f'Hello my name is {self.name}')

class Player(Human):
    def __init__(self, name, xp):
        super().__init__(name)
        name
        self.xp = xp

class Fan(Human):
    def __init__(self, name, fav_team):
        super().__init__(name)
        self.fav_team = fav_team

lgh_player = Player('lgh', 10)
lgh_fan = Fan('lgh_fan', 'downtown')

lgh_player.say_hello()
lgh_fan.say_hello()