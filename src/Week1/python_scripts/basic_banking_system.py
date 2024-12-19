def banking_system():
    # Initialize account balance
    account_balance = 1000

    # Function to display menu
    def display_menu():
        print("\n=== Basic Banking System ===")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
    # Start the banking system
    while True:
        display_menu()
        try:
            # Prompt user for menu selection
            choice = int(input("Enter your choice (1-4): "))

            if choice == 1:
                # Option 1: Check balance
                print(f"Your current account balance is: ${account_balance}")
            
            elif choice == 2:
                # Option 2: Deposit money
                try:
                    deposit_amount = float(input("Enter the amount to deposit: "))
                    if deposit_amount > 0:
                        account_balance += deposit_amount
                        print(f"Successfully deposited ${deposit_amount}. Your new balance is: ${account_balance}")
                    else:
                        print("Deposit amount must be a positive number.")
                except ValueError:
                    print("Invalid input. Please enter a numeric value.")
            
            elif choice == 3:
                # Option 3: Withdraw money
                try:
                    withdraw_amount = float(input("Enter the amount to withdraw: "))
                    if withdraw_amount > 0:
                        if withdraw_amount <= account_balance:
                            account_balance -= withdraw_amount
                            print(f"Successfully withdrew ${withdraw_amount}. Your new balance is: ${account_balance}")
                        else:
                            print("Insufficient funds! Withdrawal amount exceeds account balance.")
                    else:
                        print("Withdrawal amount must be a positive number.")
                except ValueError:
                    print("Invalid input. Please enter a numeric value.")
            
            elif choice == 4:
    # Option 4: Exit
                print("Thank you for using the Basic Banking System. Goodbye!")
                break
            
            else:
                print("Invalid choice. Please select an option between 1 and 4.")
        
        except ValueError:
            print("Invalid input. Please enter a number between 1 and 4.")

# Run the banking system program
banking_system()