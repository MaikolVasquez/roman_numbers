function convertToRoman(num) {
    let res = []
    num = num.toString().split("").reverse()
    
    for(let i = 0;i<num.length;i++){
      num[i] = parseInt(num[i]+"0".repeat(i))
      
      switch(num[i]){
    //1>4
        case num[i]<=4?num[i]: null :
          if(num[i] == 4){
            res.push("IV")
            break;
          }
          res.push("I".repeat(num[i]))
        break;
    //1>4
    //5>9
        case num[i]>=5 && num[i]<=9 ? num[i]:null:
          if(num[i] == 9){
            res.push("IX")
            break;
          }
          res.push("V"+"I".repeat(num[i]%5))
        break;
    //5>9      
    //10>40
        case num[i]>=10 && num[i]<=40 ? num[i]:null:
          if(num[i] == 40){
            res.push("XL")
            break;
          }
          res.push("X".repeat(num[i]/10))
        break; 
    //10>40 
    //50>90
        case num[i]>=50 && num[i]<=90 ? num[i]:null:
          if(num[i] == 90){
            res.push("XC")
            break;
          }
          res.push("L"+"X".repeat((num[i]%50)/10))
        break;
    //50>90      
    //100>400 
        case num[i]>=100 && num[i]<=400 ? num[i]:null:
          if(num[i] == 400){
            res.push("CD")
            break;
          }
          res.push("C".repeat(num[i]/100))
        break; 
    //100>400
    //500>900
        case num[i]>=500 && num[i]<=900 ? num[i]:null:
          if(num[i] == 900){
            res.push("CM")
            break;
          }
          res.push("D"+"C".repeat((num[i]%500)/100))
        break;
    //500>900
    //1000>4000
        case num[i]>=1000 && num[i]<=4000 ? num[i]:null:
          if(num[i] == 4000){
            res.push("M|V|")
            break;
          }
          res.push("M".repeat(num[i]/1000))
        break; 
    //1000>4000
    //5000>9000
        case num[i]>=5000 && num[i]<=9000 ? num[i]:null:
          if(num[i] == 9000){
            res.push("M|X|")
            break;
          }
          res.push("|V|"+"M".repeat((num[i]%5000)/1000))
        break;
    //5000>9000
        default:
        res.push("")
      }
    }
    
     return res;
    }
    
    console.log(convertToRoman(891))