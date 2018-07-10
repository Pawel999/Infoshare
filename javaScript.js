function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password){
        return file.contents;
    }
    else {
        return "Złe hasło! Nie masz dostępu do sekretów.";
    }
}
function setSecret(file, secretPassword, secret) {
    if( secretPassword == file.password){
      file.opened = 0;
      file.contents = secret;
    }
}
var superSecretFile ={
  level:"tajne",
  opened: 0,
  password:2,
  contents:"Następne spotkanie z dr Zatanem odbędzie się w Katowicach"
};

var secret = getSecret(superSecretFile,2) ;
console.log(secret);


setSecret(superSecretFile ,2 ,"Następne spotkanie z dr Zatanem odbędzie się w Zywcu");
secret = (getSecret(  SuperSecretFile, 2 ));
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
