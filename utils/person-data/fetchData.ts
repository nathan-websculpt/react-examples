import { getNamesList, getEmailsList, getPhonesList, getUserObj, userObj, getAddressObj, getAddressesList, getZipsList, getStatesList, getEmailObj, getUserNamesList, getPhoneObj, getPricesList } from "./data";

const fetchData = (peopleCount: number): userObj[] => {
  const getRandomItemFromArray = (arr: any[], notThisItem: any) => {
    let item = arr[Math.floor(Math.random() * arr.length)];
    if (item === notThisItem)
      return arr[Math.floor(Math.random() * arr.length)];
    else return item;
  };

  const handleAddresses = (user:userObj, addressCount:number): userObj => {
    for(let i = 0; i < addressCount; i++) {
      let newAddress = getAddressObj();
      newAddress.id = i;
      newAddress.address = getRandomItemFromArray(getAddressesList(), "");
      newAddress.zip = getRandomItemFromArray(getZipsList(), "");
      newAddress.state = getRandomItemFromArray(getStatesList(), "");
      user.addresses.push(newAddress);
    }
    return user;
  };

  const handleEmails = (user:userObj, emailCount:number): userObj => {
    for(let i = 0; i < emailCount; i++) {
      let newEmail = getEmailObj();
      newEmail.id = i;
      newEmail.account = getRandomItemFromArray(getUserNamesList(), "");
      newEmail.emailAddress = getRandomItemFromArray(getEmailsList(), "");
      user.emails.push(newEmail);
    }
    return user;
  };

  const handlePhones = (user:userObj, phoneCount:number): userObj => {
    for(let i = 0; i < phoneCount; i++) {
      let newPhone = getPhoneObj();
      newPhone.id = i;
      newPhone.phoneNumber = getRandomItemFromArray(getPhonesList(), "");
      newPhone.monthlyBill = getRandomItemFromArray(getPricesList(), "");
      user.phones.push(newPhone);
    }
    return user;
  };

  let rslt = [];
  let notThisName = "";
  let notThisEmail = "";
  let notThisPhone = "";
  for (let i = 0; i < peopleCount; i++) {
    let newUserObj = getUserObj();
    newUserObj.id = i;
    let userName = getRandomItemFromArray(getNamesList(), notThisName);
    let userEmail = getRandomItemFromArray(getEmailsList(), notThisEmail);
    let userPhone = getRandomItemFromArray(getPhonesList(), notThisPhone);
    newUserObj.name = userName;
    notThisName = userName;
    newUserObj.email = userEmail;
    notThisEmail = userEmail;
    newUserObj.phone = userPhone;
    notThisPhone = userPhone;
    
    newUserObj = handleAddresses(newUserObj, 3);
    newUserObj = handleEmails(newUserObj, 3);
    newUserObj = handlePhones(newUserObj, 4);

    console.log(i, newUserObj);
    rslt.push(newUserObj);
  }
  return rslt;
};
export default fetchData;

//^^^TODO: this code will not "randomly" select the same item twice in a row
// ..... but, it needs to store all selected items into their own arrays, prevent doubles that way