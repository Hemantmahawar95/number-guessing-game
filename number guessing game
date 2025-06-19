#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));

    int randomNumber = (rand() % 100) + 1;
    // printf("Random number between 1 and 10 0: %d\n", randomNumber); 
    int no_of_guess = 0;
    int guessed;

    do
    {
        printf("guess the number :\n");
        scanf("%d", &guessed);
        if (guessed < randomNumber)
         {
            printf("please enter a larger number \n"); 
         }else if (guessed > randomNumber)
         {
            printf("please enter a smaller number \n");
         }
         else
         {
            printf("congratulations You guessed the right number  %d \n", guessed);
         }   

        no_of_guess++;        
    
    } while(guessed != randomNumber);
    
    printf("You guessed the number %d guesses \n", no_of_guess);

    return 0;
}
