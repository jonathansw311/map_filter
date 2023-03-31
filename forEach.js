numbers = [10,20,30,40,43,50,60, 65]
names = ['colt','matt', 'tim', 'test']

function doubleValues(arr){
    newArr = [];
     arr.forEach(function(nums){
         newArr.push(nums *2);        
     });
     return (newArr);
 }




function onlyEvenValues(arr){
    evenNums= [];
 arr.forEach(function(nums){
    if(nums % 2 === 0){
        evenNums.push(nums);
    }
}  );  
return evenNums;
}



function showFirstAndLast(arr){
    const firstAndLast = [];
    arr.forEach(function(ar){
        last = ar.length - 1;
        console.log(last);
        firstAndLast.push(ar[0]+ar[last]);
       
    })
    return firstAndLast;
}



function addKeyAndValue(obj, keys, val){
const added = {};
let count = 0;
    obj.forEach(function(newObj){
        console.log(newObj);
        newObj[keys] = val;
        console.log(newObj);
        added[count] = newObj;
        count++;
    
})
return added;
}









function vowelCount(str){
    let vowel = {}
    const split_str = str.toLowerCase().split("");
    split_str.forEach(function(st){
        vowels = ['a','e','i','o','u'];
        for(i=0; i<vowels.length; i++){
        if (st === vowels[i]){//checks to see if the letter is a vowel
       if(vowel[vowels[i]]){//if the key of the value exists in the object
        vowel[vowels[i]]++;//the value is increased by one
         }
       else (vowel[vowels[i]]=1)}}//if the key does not exist the key is established and itial value is 1
 
    })
  return vowel;
}

function doubleValuesWithMap(arr){
    const newNums = arr.map(function(nums){
                 return nums * 2;
     });
     return (newNums);
 }

 function valTimesIndex(arr){
    let count = 0;
    const newTimes = arr.map(function(ar, idx){
        
        return ar * idx;
    })
    return newTimes;
 }

 function extractKey(obj, keys){
    const names = obj.map(function(ob){
        return ob[keys];
    });
 return names;
 }

 function extractFullName(obj){
    const fullNames = obj.map(function(ob){
        return (ob['first']+' '+ob['last'])
    })
    return fullNames;
 }

 function filterByValue(obj, key){
    const catOwners = obj.filter(function(ob){
      return (ob[key]);
              
    })
    return catOwners
}

function find(arr, val){
    const number =  arr.filter(function(ar){
        return ar === val;
    })
    return number;
}

function findInObj(obj, key, value){
    const firstVal = obj.filter(function(ob){
        return ob[key]=== value;
    })
    return firstVal[0];
}

function removeVowels(str){
    const split_str = str.toLowerCase().split("");
    arry = split_str.filter(function(ss){
        add = isVowel(ss);
        if(add < 0){//if isvowel is -1 no vowel was found  
            return ss;
        }
    })
    noSpace = arry.join('');
    newString = noSpace.toString();
    return newString;
}

function isVowel(char){
    const isVowel = 'aeiou'.indexOf(char);
       return isVowel;   
}

function doubleOddNumbers(arr){
    const oddsOnly = arr.filter(function(ar){
        return (ar % 2 !== 0)
    })

    const doubled = oddsOnly.map(function(odd){
        return odd *2;
    })

return doubled;
}