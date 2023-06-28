def get_the_missing_number(list_of_int):
    missing_num = 0

    list_of_int.sort()

    for i in range(1, len(list_of_int)+1):
        if i == list_of_int[i-1]:
            continue
        else:
            missing_num = i
            break

    return missing_num


list_of_random_integers = list(map(int, input(
    "Enter random numbers from 1 to 100 and miss a number of your choice:").split()))

missing_integer = get_the_missing_number(list_of_random_integers)

print("Missing Integer is", missing_integer)
