
# // TASK M

# // Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.

# // Masalan: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, ...]


def name(arr):
    result = []
    for item in arr:
        a = f"number:{item}, square: {item*item}"
        print(a)
        result.append({a})

    return result


print(name([1, 2]))


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
