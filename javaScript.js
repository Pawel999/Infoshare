function getSecret(file, secretPassword) {
  Secretfile.opened = Secretfile.opened + 1;
  if (secretPassword == superSecretFile.password){
      return superSecretFile.contents;
  }
  else{
    return "Złe hasło! Nie masz dostępu do sekretów.";
  }
}
function setSecret(file, secretPassword, secret) {
    if(secretPassword == superSecretFile.password){
      superSecretFile.opened = 0;
      superSecretFile.contents = secret;
    }
}
//////////
var superSecretFile ={
  level:"tajne",
  opened: 0,
  password:2,
  contents:"Następne spotkanie z dr Zatanem odbędzie się w Katowicach"
};
/////////
var secret = getSecret(??,??);
console.log(secret);


setSecret(??, ?? , "Następne spotkanie z dr Zatanem odbędzie się w Katowicach");
secret = (getSecret( ?? , ?? ));
console.log(secret);





/*
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
const getTax = (itemCount) =>{
  return getSubTotal(itemCount) * 0.06;
};
const getTotal = (itemCount) => {
  return getSubTotal + getTax;
}
console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount));
