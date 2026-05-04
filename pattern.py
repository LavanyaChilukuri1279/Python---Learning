rows = 5              # total number of rows to print (height of the triangle)

num = 1               # starting number that will be printed and updated each time

for i in range(1, rows + 1):   # outer loop → controls rows (runs 5 times: 1 to 5)
    
    for j in range(1, i + 1):  # inner loop → controls how many numbers per row (runs i times)
        
        print(num, end=" ")    # print current value of num on the same line with space
        
        num += 222             # increase num by 222 after each print (creates jumps like 1, 223, 445...)
    
    print()                    # move to the next line after finishing one row