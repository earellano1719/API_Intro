document.addEventListener('DOMContentLoaded', () => {

let APIResponse =
{
    "status": "success",
    "message": {
      "affenpinscher": [
        
      ],
      "african": [
        
      ],
      "airedale": [
        
      ],
      "akita": [
        
      ],
      "appenzeller": [
        
      ],
      "basenji": [
        
      ],
      "beagle": [
        
      ],
      "bluetick": [
        
      ],
      "borzoi": [
        
      ],
      "bouvier": [
        
      ],
      "boxer": [
        
      ],
      "brabancon": [
        
      ],
      "briard": [
        
      ],
      "bulldog": [
        "boston",
        "french"
      ],
      "bullterrier": [
        "staffordshire"
      ],
      "cairn": [
        
      ],
      "cattledog": [
        "australian"
      ],
      "chihuahua": [
        
      ],
      "chow": [
        
      ],
      "clumber": [
        
      ],
      "cockapoo": [
        
      ],
      "collie": [
        "border"
      ],
      "coonhound": [
        
      ],
      "corgi": [
        "cardigan"
      ],
      "cotondetulear": [
        
      ],
      "dachshund": [
        
      ],
      "dalmatian": [
        
      ],
      "dane": [
        "great"
      ],
      "deerhound": [
        "scottish"
      ],
      "dhole": [
        
      ],
      "dingo": [
        
      ],
      "doberman": [
        
      ],
      "elkhound": [
        "norwegian"
      ],
      "entlebucher": [
        
      ],
      "eskimo": [
        
      ],
      "frise": [
        "bichon"
      ],
      "germanshepherd": [
        
      ],
      "greyhound": [
        "italian"
      ],
      "groenendael": [
        
      ],
      "hound": [
        "afghan",
        "basset",
        "blood",
        "english",
        "ibizan",
        "walker"
      ],
      "husky": [
        
      ],
      "keeshond": [
        
      ],
      "kelpie": [
        
      ],
      "komondor": [
        
      ],
      "kuvasz": [
        
      ],
      "labrador": [
        
      ],
      "leonberg": [
        
      ],
      "lhasa": [
        
      ],
      "malamute": [
        
      ],
      "malinois": [
        
      ],
      "maltese": [
        
      ],
      "mastiff": [
        "bull",
        "tibetan"
      ],
      "mexicanhairless": [
        
      ],
      "mix": [
        
      ],
      "mountain": [
        "bernese",
        "swiss"
      ],
      "newfoundland": [
        
      ],
      "otterhound": [
        
      ],
      "papillon": [
        
      ],
      "pekinese": [
        
      ],
      "pembroke": [
        
      ],
      "pinscher": [
        "miniature"
      ],
      "pointer": [
        "german",
        "germanlonghair"
      ],
      "pomeranian": [
        
      ],
      "poodle": [
        "miniature",
        "standard",
        "toy"
      ],
      "pug": [
        
      ],
      "puggle": [
        
      ],
      "pyrenees": [
        
      ],
      "redbone": [
        
      ],
      "retriever": [
        "chesapeake",
        "curly",
        "flatcoated",
        "golden"
      ],
      "ridgeback": [
        "rhodesian"
      ],
      "rottweiler": [
        
      ],
      "saluki": [
        
      ],
      "samoyed": [
        
      ],
      "schipperke": [
        
      ],
      "schnauzer": [
        "giant",
        "miniature"
      ],
      "setter": [
        "english",
        "gordon",
        "irish"
      ],
      "sheepdog": [
        "english",
        "shetland"
      ],
      "shiba": [
        
      ],
      "shihtzu": [
        
      ],
      "spaniel": [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      "springer": [
        "english"
      ],
      "stbernard": [
        
      ],
      "terrier": [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      "vizsla": [
        
      ],
      "weimaraner": [
        
      ],
      "whippet": [
        
      ],
      "wolfhound": [
        "irish"
      ]
    }
  }



// let breedList = APIResponse.message//returns value for the message section 
// let dogResult = []//where we are going to push our results
// for(let key in breedList){//looping through the values inside the message values.
//     if (breedList[key].length){//as long as there are values inside 
//     breedList[key].forEach(el => {
//         dogResult.push(key + " " + el)//after the for each has worked, return the value of message + elements within 
//     })
//   } else {
//       dogResult.push(key)//simply push the name of the dog
//   }
// }
// console.log(dogResult);



let breedList = APIResponse.message
let dogResult = []
for(let key in breedList){
    let capKey = (key[0]).toUpperCase() + (key).slice(1);
    if (breedList[key].length){ 
    breedList[key].forEach(el => {
        let capEl = (el[0]).toUpperCase() + (el).slice(1);
        dogResult.push(capEl + " " + capKey)
    })
  } else {
      dogResult.push(capKey);
  }
}

console.log(dogResult);


// let button = document.getElementById('button');   
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         document.getElementById("boom").textContent = "Another One"
//     });
//  });  


let button = document.querySelector(".boom")
let p = document.createElement("p");
button.addEventListener("click",() => {
  event.preventDefault();
    let rand = Math.floor(Math.random() * dogResult.length)
    p.innerText = dogResult[rand]
    document.body.appendChild(p)
    if (button.innerText!=="Another One!") {
      button.innerText = "Another One!"
    }
})

})