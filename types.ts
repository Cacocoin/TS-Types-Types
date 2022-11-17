type Food = Fish | Vegetables;

type Fish = 'Tuna'|'Cod'|'Hake'| 'Mackeral'                   

type Vegetables = 'carrot'|'potato'|'onion'|'eggplant'|'corn'            
              
interface DinnerPrep {
  fish1: Fish,
  fish2: Fish,
  veg1: Vegetables,
  veg2: Vegetables
}

let menu1: DinnerPrep = {
              fish1: 'Tuna',
              fish2: 'Cod',
              veg1: 'carrot',
              veg2: 'potato',
}

type SecondDinnerPrep = {
              fish3: Fish,
              fish4: Fish,
              veg3: Vegetables,
              veg4: Vegetables,
              veg5: Vegetables,
}

let menu2 = {
              fish3: 'Hake',
              fish4: 'Mackeral',
              veg3: 'onion',
              veg4: 'eggplant',
              veg5: 'corn' } satisfies SecondDinnerPrep  


const onionUpperCase = menu2.veg3.toUpperCase();

console.log(onionUpperCase)
