import { getNamesList, getEmailsList, getPhonesList, User, TUser, Address, getAddressesList, getZipsList, TAddress, getStatesList, Email, getUserNamesList, Phone, getPricesList, TEmail, TPhone } from "./data";

const fetchData = (peopleCount: number): TUser[] => {
  const getRandomItemFromArray = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleAddresses = (addressCount:number): TAddress[] => {
    let addresses:TAddress[] = [];
    for(let i = 0; i < addressCount; i++) {
      const addr = getRandomItemFromArray(getAddressesList());
      const zip = getRandomItemFromArray(getZipsList());
      const state = getRandomItemFromArray(getStatesList());
      addresses.push(Address(i, addr, zip, state));
    }
    return addresses;
  };

  const handleEmails = (emailCount:number): TEmail[] => {
    let emails:TEmail[] = [];
    for(let i = 0; i < emailCount; i++) {
      const account = getRandomItemFromArray(getUserNamesList());
      const emailAddress = getRandomItemFromArray(getEmailsList());
      emails.push(Email(i, account, emailAddress));
    }
    return emails;
  };

  const handlePhones = (phoneCount:number): TPhone[] => {
    let phones:TPhone[] = [];
    for(let i = 0; i < phoneCount; i++) {
      const phoneNumber = getRandomItemFromArray(getPhonesList());
      const monthlyBill = getRandomItemFromArray(getPricesList());
      phones.push(Phone(i, phoneNumber, monthlyBill));
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

    let newUserObj = User(i, userName, userEmail, userPhone, addressArr, emailArr, phoneArr);

    console.log(i, newUserObj);
    rslt.push(newUserObj);
  }
  return rslt;
};
export default fetchData;
