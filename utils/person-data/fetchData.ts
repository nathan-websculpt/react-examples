import { getNamesList, getEmailsList, getPhonesList, getUserObj, userObj, getAddressObj, getAddressesList, getZipsList, addressObj, getStatesList, getEmailObj, getUserNamesList, getPhoneObj, getPricesList, emailObj, phoneObj } from "./data";

const fetchData = (peopleCount: number): userObj[] => {
  const getRandomItemFromArray = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleAddresses = (addressCount:number): addressObj[] => {
    let addresses:addressObj[] = [];
    for(let i = 0; i < addressCount; i++) {
      const addr = getRandomItemFromArray(getAddressesList());
      const zip = getRandomItemFromArray(getZipsList());
      const state = getRandomItemFromArray(getStatesList());
      addresses.push(getAddressObj(i, addr, zip, state));
    }
    return addresses;
  };

  const handleEmails = (emailCount:number): emailObj[] => {
    let emails:emailObj[] = [];
    for(let i = 0; i < emailCount; i++) {
      const account = getRandomItemFromArray(getUserNamesList());
      const emailAddress = getRandomItemFromArray(getEmailsList());
      emails.push(getEmailObj(i, account, emailAddress));
    }
    return emails;
  };

  const handlePhones = (phoneCount:number): phoneObj[] => {
    let phones:phoneObj[] = [];
    for(let i = 0; i < phoneCount; i++) {
      const phoneNumber = getRandomItemFromArray(getPhonesList());
      const monthlyBill = getRandomItemFromArray(getPricesList());
      phones.push(getPhoneObj(i, phoneNumber, monthlyBill));
    }
    return phones;
  };

  let rslt = [];
  for (let i = 0; i < peopleCount; i++) {
    const userName = getRandomItemFromArray(getNamesList());
    const userEmail = getRandomItemFromArray(getEmailsList());
    const userPhone = getRandomItemFromArray(getPhonesList());
    
    const addressArr = handleAddresses(3);
    const emailArr = handleEmails(3);
    const phoneArr = handlePhones(4);

    let newUserObj = getUserObj(i, userName, userEmail, userPhone, addressArr, emailArr, phoneArr);

    console.log(i, newUserObj);
    rslt.push(newUserObj);
  }
  return rslt;
};
export default fetchData;
