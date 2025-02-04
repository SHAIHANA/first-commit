import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(userListArray:any[],serachKey:string): any[] {

    const result:any=[]   
     if(!userListArray||serachKey==""){
      return userListArray
    }
    else{
      userListArray.map((item:any)=>{
        //item.name===serachkey ? push to new array
        if(item.name.toLowerCase().trim().inCludes(serachKey.toLowerCase().trim()))
          return result.push(item)

      })
    }
    return result;
  }

}
