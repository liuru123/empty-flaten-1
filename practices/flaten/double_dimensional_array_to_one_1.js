'use strict';

function double_to_one(collection) {

   var num=[],k=0;
  //在这里写入代码
   for(var i=0;i<collection.length;i++)
     {
        if(typeof(collection[i])=='object')
          {
            for(var j=0;j<collection[i].length;j++)
             {
              num[k++]=collection[i][j];
             }
          }
        else
           num[k++]=collection[i];   
     }
    return num;
}

module.exports = double_to_one;
