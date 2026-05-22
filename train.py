# TASK L
# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.
# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

arr = []


def reverse(str):
    # print(str.split())
    for item in str.split():
        # print(item)
        print(item[::-1])
        arr.append(item[::-1])
        print(arr)

    return " ".join(arr)


print(reverse("we like coding!"))
