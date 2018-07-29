// Gable, uzupelnij funkcje, ktora sprawdzi, czy do jedengo z samochodow zmieszcza sie slodkie mordeczki
// wykorzystaj obie funkcje dla dwoch samochodow (lacznie 4ry przypadki)
function PumpItUp(car, fuel,howManyKmsPerTank) {
    if(car.fuel == fuel) {
        return car.tanked_times +=1
    }
    
    else {
      console.log("samochut: nie lejesz mi dobrze :(")
    

function CheckHowManySlodziaks(car, homiesNumber, fuel) {
    if ((homiesNumber<= car.homiesCanFit) && (fuel == car.fuel)) {
      console.log("jedziemy na kaszeby")
      }
    else {
      console.log("nie weszles, nie pojechales :(")
    }
  }
   

  gulfCzy ={
    fuel : "lpg",
    homiesCanFit : 4,
    tanked_times : 600
  }
   
  vlevo ={
    fuel : "dizel",
    homiesCanFit : 7,
    tanked_times : 1000
  }
   
  PumpItUp(gulfCzy,"lpg")
  PumpItUp(vlevo, "dizel")
   
  CheckHowManySlodziaks(gulfCzy, 4, "lpg")
  CheckHowManySlodziaks(vlevo, 7, "dizel")

/*
wez rozszerz fukcje PumpItUp
tak by zwracala informacje o przebiegu
czyli dorzuc info do howManyKmsPerTank do obiektow
w samej fukcji sprawdz, czy taka informacja istnieje wogole w opisie 
samochodu
ktos se mogl nie sprawdzic 
mogl
jak nie ma info zwraca zero
jak jest to kmPerTank * ilosc tankowań

*/




