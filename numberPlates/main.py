def string_to_number(input_string):
    parts = input_string.split()
    if len(parts) != 2:
        raise ValueError("Input must contain 2 parts separated by a space")

    first_part = parts[0]
    second_part = parts[1]

    second_part_int = second_part[:-1]  
    second_part_ascii = ord(second_part[-1])

    first_part_as_ascii = ''.join(str(ord(char)) for char in first_part[1:])

    combined_number = int(first_part_as_ascii + str(second_part_ascii) + str(second_part_int) )

    return combined_number

def calculate_total_cars_between_plates(plate1, plate2):
    plate1_number = string_to_number(plate1)
    plate2_number = string_to_number(plate2)

    number = plate2_number - plate1_number
    number_part1 = int(str(number)[:2]) + 1
    number_part2 = int(str(number)[2:4]) + 1
    number_part3 = int(str(number)[4:6]) + 1
    number_part4 = int(str(number)[6:])

    section1 = number_part1 * number_part2
    section2 = number_part3 * number_part4
    total_cars = section1 * section2

    return total_cars

plate1 = input("Enter the first plate: ")
plate2 = input("Enter the second plate: ")

try:
    total_cars_between_plates = calculate_total_cars_between_plates(plate1, plate2)
    print(f"Total number of cars between {plate1} and {plate2}: {total_cars_between_plates}")
except ValueError as e:
    print(f"Error: {e}")
