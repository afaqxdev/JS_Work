let totalAmmount=100000;
let withdrawAmount=prompt('Enter the withdraw ammount ');
if (withdrawAmount<=0){
    console.log('withdraw ammount is geater then 0 '+withdrawAmount)


}else if (withdrawAmount<totalAmmount){
  totalAmmount = totalAmmount -withdrawAmount
    console.log('Here is  your withDraw Amount '+withdrawAmount)
} else{
    console.log('You dont have much ammount '+withdrawAmount )
 }