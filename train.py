# TASK V

# Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.

# Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


def countChars(s):
    result = {}

    for char in s:
        if char in result:
            result[char] += 1
        else:
            result[char] = 1

    return result


print(countChars("hello"))


# # TASK T

# # Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.

# # Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]


# def mergeSortedArrays(arr1, arr2):
#     return sorted(arr1 + arr2)


# print(mergeSortedArrays([0, 3, 4], [4, 6]))
# [0, 3, 4, 4, 6]

# # TASK S

# # Array ichidagi tushib qolgan sonni topib qaytarsin.

# # Masalan: missingNumber([3, 0, 1]) return 2 in python

# def missingNumber(nums):
#     n = len(nums)
#     return n * (n + 1) // 2 - sum(nums)


# print(missingNumber([3, 0, 1]))  # 2


# # TASK R

# # "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.

# # Masalan: calculate("1 + 3") return 4


# def calculate(str):
#     a = eval(str)
#     print(a)


# calculate("1+3")
# calculate("1+3+4")


# # TASK Q Objectda berilgan string propertysi borligini tekshirsin. Masalan: hasProperty({name: "BMW"}, "name") return true


# def hasProperty(obj, prop):
#     return prop in obj


# print(hasProperty({"name": "BMW"}, "name"))  # True
# print(hasProperty({"name": "BMW"}, "age"))   # False


# # TASK P

# # Objectni nested array sifatida convert qilib qaytarsin.

# # Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]


# def objectToArray(obj):
#     return [[key, value] for key, value in obj.items()]


# print(objectToArray({"a": 10, "b": 20}))

# def calculateSumOfNumbers(arr):
#     total = 0

#     for item in arr:
#         if type(item) == int or type(item) == float:
#             total = total + item

#     return total


# print(calculateSumOfNumbers([10, "10", {"son": 10}, True, 35]))


# # TASK N

# # Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.

# # Masalan: palindromCheck("dad") return true


# def palindromCheck(str):
#     a = str[:len(str)]
#     b = a[::-1]

#     # print(a, b)

#     if a == b:
#         return True
#     else:
#         return False


# print(palindromCheck("nima"))
# print(palindromCheck("dad"))


# # // TASK M

# # // Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.

# # // Masalan: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, ...]


# def name(arr):
#     result = []
#     for item in arr:
#         a = f"number:{item}, square: {item*item}"
#         print(a)
#         result.append({a})

#     return result


# print(name([1, 2]))


# # TASK L
# # So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.
# # Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

# arr = []


# def reverse(str):
#     # print(str.split())
#     for item in str.split():
#         # print(item)
#         print(item[::-1])
#         arr.append(item[::-1])
#         print(arr)

#     return " ".join(arr)


# print(reverse("we like coding!"))
