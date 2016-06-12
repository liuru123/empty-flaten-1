'use strict';

function double_to_one(collection) {
  var num=[],k=0; 
  for(var n=0;n<collection[0].length; n++)
      num[k++]=collection[0][n];
  for(var i=0;i<collection.length;i++)
     {
            for(var j=0;j<collection[i].length;j++)
             {
              for(var m=0;m<num.length;m++)
                  {
                    if(collection[i][j]==num[m])
                       break;
                  }
               if(m>=num.length)
                 num[k++]=collection[i][j];
             }
          
     }
   return num;
  //在这里写入代码
}

module.exports = double_to_one;
