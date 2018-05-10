# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

num= 13195
i=2

for k in range(0,num):
    if i >= num:
        break
    elif num % i == 0:
        num = num / i
    else:
        i= i + 1
print ("biggest prime number is: "+str(num))
