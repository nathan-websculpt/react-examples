import { getNamesList, getEmailsList, getPhonesList, getUserObj, userObj } from "./data";

const fetchData = (peopleCount: number): userObj[] => {
  const getRandomItemFromArray = (arr: any[], notThisItem: any) => {
    let item = arr[Math.floor(Math.random() * arr.length)];
    if (item === notThisItem)
      return arr[Math.floor(Math.random() * arr.length)];
    else return item;
  };

  let rslt = [];
  let notThisName = "";
  let notThisEmail = "";
  let notThisPhone = "";
  for (let i = 0; i < peopleCount; i++) {
    let newUserObj = getUserObj();
    let userName = getRandomItemFromArray(getNamesList(), notThisName);
    let userEmail = getRandomItemFromArray(getEmailsList(), notThisEmail);
    let userPhone = getRandomItemFromArray(getPhonesList(), notThisPhone);
    newUserObj.name = userName;
    notThisName = userName;
    newUserObj.email = userEmail;
    notThisEmail = userEmail;
    newUserObj.phone = userPhone;
    notThisPhone = userPhone;
    newUserObj.id = i;
    console.log(i, newUserObj);
    rslt.push(newUserObj);
  }
  return rslt;
};
export default fetchData;

//^^^TODO: this code will not "randomly" select the same item twice in a row
// ..... but, it needs to store all selected items into their own arrays, prevent doubles that way