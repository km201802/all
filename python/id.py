import math
import time
import random
import urllib

chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
rango = 8

def getID():
  name = ""
  for i in range(rango):
    char = chars[random.randint(0, len(chars)-1)]
    up = random.randint(0,1)
    if(up == 1):
      char = char.upper()
    name += char
  return name
# 62
while 1:
  print(getID())
  time.sleep(0.01)
