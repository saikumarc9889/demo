print("Hello"[0])
print("Hello"[-1])
print("123"+"456")
print(123+456)
print(123_456_567)

print(type(123))
print(type("abc"))
print(type(3.14))
print(type(True))

#type convertion
print(int("123")+int("456"))

# make this line without error
#print("Number of letters in your name :"+len(input("What is your name?")))

name_of_the_user = input("Enter your name :")
length_of_name = len(name_of_the_user)
print(type("Number of lettres in your name :"))
print(type(length_of_name))

print("Number of lettres in your name :"+str(length_of_name))

# Mathematical Operator
print("My Age :"+str(12))

# what is the output of the code
print(3 * 3 + 3 / 3 -3)

# change the code so it output is 3
print(3 * (3 + 3) / 3 - 3)

# number manipulations
bmi = 84 / 1.65 ** 2
print(bmi)
print(int(bmi))
print(round(bmi))

a= int("5") / int(2.7)
print(a,type(a))

score = 0
score += 1
print(score)
print(f"your score is = {score}")