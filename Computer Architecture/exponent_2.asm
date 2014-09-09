.data
	prompt_base: .asciiz "Enter the base: "
	prompt_exp: .asciiz "Enter the exponent: "

.text
	# print base prompt
	li $v0,4 		# prepare to print string
	la $a0,prompt_base	# load address for prompt
	syscall			# print prompt for base
	
	# read input for base
	li $v0,5	# call read int
	syscall		# run read int
	move $t1,$v0	# put base in $t1
	
	# print exponent prompt
	li $v0,4		# prepare to print string
	la $a0,prompt_exp	# load address for prompt
	syscall			# print prompt for exponent
	
	# read input for exponent
	li $v0,5	# call read int
	syscall		# run read int
	move $t2,$v0	# put exponent in $t2
	
	# set variables for loop
	li $t3,1 # $t3 will act as incrementer i
	la $t0,($t1) # $t0 will act as result
	
exponent:
	# loop to multiply base by itself exponent times
	mult $t0,$t1 		# multiply result by base (exponent times)
	mflo $t0		# put multiplication result in $t1
	addi $t3,$t3,1 		# increment i ($t3) by 1
	beq $t3,$t2,print	# print result if i is equal to exponent
	jal exponent		# return to top of loop otherwise
	
print:
	# print result
	li $v0,1	# prepare to print integers
	move $a0,$t0	# move $t0 (result) to print address
	syscall 	# print result
	
exit:
	# exit program
	li $v0,10 # code to exit program
	syscall # exit program