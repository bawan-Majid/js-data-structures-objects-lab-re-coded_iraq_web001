// Write your solution in this file!
let driver={key:"hi"};
function updateDriverWithKeyAndValue(driver,key,value){
  driver['key']=value;
 return driver 
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key){
  return driver
}
function deleteFromDriverByKey( driver,key){
delete driver['key'];
}

updateDriverWithKeyAndValue(driver,key,'11 Broadway');
destructivelyUpdateDriverWithKeyAndValue(driver,key);