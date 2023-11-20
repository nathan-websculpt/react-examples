const namesList:string[] = ["Beck Bright","Kim Collins","Yasir Sloan","Emery Glass","Kim Marquez","Zelda Schmidt","Oscar Wallace","Simon Cash","Samuel Burns","Emi Cummings","Yuli Weeks","Vanna Pate","Myles Thornton","Abdul Mccormick","Colette Snyder","Ezekiel Munoz","Vincent Golden","Jamal Blackburn","Odysseus O'donnell","Faith Floyd","Alexander Perez","Finn James","Fuller Boyle","Jessamine Whitley","Jamal Nieves","Fleur Chandler","Jared Wright","Rhona Schroeder","Bruce Marshall","Nero Brennan","Teegan Walter","Morgan Byers","Neville Dudley","Owen Avery","Mannix Ford","Serina Anthony","Anthony Robbins","Shad Holt","Akeem Witt","Danielle Ford","Hilda Holland","Naomi Snyder","Uma Morrison","Cyrus Rowe","Dominic Gillespie","Germane Brock","Leslie Buck","Gloria James","Valentine Pitts","Phyllis Vincent","Colt Duffy","Deacon Mckee","Isadora Foley","Alden Mason","Harriet Booth","Sierra Marshall","Rahim Garcia","Murphy Blackwell","Alexa Gomez","Iona Marks","Montana Simon","Lacota Melton","Quail Wilkins","Kirestin Mcgowan","Melanie Cleveland","Michelle Cline","Lucian Beard","Avye Wilkins","Elliott Guy","Barry Patterson","Jakeem Compton","Maite Frank","Thor Sampson","Abigail Maynard","Brenden Hutchinson","Chelsea Morales","Simon Buchanan","Denise Sparks","Alfreda Cole","Stephanie Davidson","Ivan Ellison","Tad Dunn","Juliet Valenzuela","Barrett Galloway","Elmo Becker","Jorden Frost","Patrick Wise","Rosalyn Frost","Brian Monroe","William Bowman","Samuel Sawyer","Selma Nelson","Hedley Castaneda","Gillian Peters","Nelle Abbott","Lisandra Duran","Vivien Casey","Isadora Carey","Robin Hickman","Steel Petersen"];
const emailsList:string[] = ["eleifend.egestas@protonmail.com","nec.ante@google.ca","sagittis.placerat.cras@yahoo.com","eros.proin.ultrices@protonmail.org","ut@aol.edu","lectus@hotmail.com","dolor.nulla.semper@outlook.com","arcu.morbi@outlook.org","arcu.iaculis@icloud.com","odio.a@hotmail.net","gravida.non@aol.net","ligula@hotmail.com","ac.fermentum@protonmail.com","commodo.auctor@protonmail.com","magnis@aol.edu","etiam.laoreet.libero@yahoo.com","ut@hotmail.edu","conubia.nostra.per@google.net","nonummy.ac@hotmail.com","libero@outlook.edu","malesuada@protonmail.com","malesuada.vel.venenatis@hotmail.ca","ipsum@google.com","massa.rutrum@icloud.com","vitae.purus@aol.net","nostra.per@protonmail.com","in@yahoo.com","curabitur.egestas@hotmail.ca","lorem.lorem@yahoo.ca","integer.tincidunt@outlook.com","maecenas.iaculis@hotmail.com","phasellus.at.augue@protonmail.org","lacus.etiam@outlook.com","semper.auctor@aol.org","bibendum@hotmail.org","in@google.com","tristique.senectus.et@google.com","nullam@hotmail.ca","nec.tempus@icloud.com","vestibulum.mauris@outlook.com","egestas.blandit@hotmail.com","ut.pellentesque.eget@yahoo.edu","metus@icloud.net","at.fringilla.purus@protonmail.com","eros.proin.ultrices@icloud.net","arcu@hotmail.net","mauris.magna.duis@outlook.com","fermentum.arcu@yahoo.net","tempus@aol.ca","nulla.cras@yahoo.net","posuere@hotmail.ca","lectus.sit@protonmail.com","quam@outlook.com","faucibus.orci@icloud.com","justo.nec@google.edu","morbi@google.com","duis@outlook.net","nisi.sem@protonmail.net","suspendisse.sagittis@outlook.com","sapien.imperdiet@yahoo.com","adipiscing.lacus@aol.org","tempor.augue@hotmail.com","nunc.sed.libero@hotmail.edu","lorem@hotmail.edu","vitae.purus@outlook.edu","pede@aol.edu","dictum.augue@protonmail.edu","lorem.fringilla.ornare@protonmail.com","sit@icloud.com","sollicitudin.adipiscing.ligula@aol.org","ut.lacus@outlook.ca","eget@icloud.org","libero.proin.sed@outlook.ca","vestibulum.accumsan.neque@aol.edu","nunc.pulvinar.arcu@aol.ca","non@outlook.com","luctus.lobortis@protonmail.org","primis.in@icloud.com","ut@icloud.edu","purus@hotmail.org","auctor.velit.aliquam@aol.org","lacinia@outlook.org","non.luctus.sit@aol.com","vivamus.sit@aol.edu","metus.eu@yahoo.com","turpis.egestas@aol.com","ac.libero.nec@outlook.net","purus.ac@icloud.ca","luctus.et.ultrices@google.com","at.risus.nunc@icloud.com","aliquam@hotmail.edu","dictum.proin@hotmail.net","in@aol.edu","vulputate.risus@hotmail.edu","non.lorem.vitae@yahoo.org","sit@protonmail.net","id.blandit@hotmail.com","sit@hotmail.edu","laoreet.libero@protonmail.edu","tristique.ac.eleifend@aol.ca"];
const phonesList:string[] = ["1-386-872-1265","1-420-276-1117","1-271-196-6615","1-685-862-3067","1-634-864-3130","1-934-491-6332","1-952-520-9331","1-603-844-3772","1-287-378-8858","1-718-607-5345","1-489-492-1261","1-889-398-8718","1-374-369-2540","1-624-737-4588","1-811-476-7535","1-125-322-6913","1-811-985-4274","1-651-661-1420","1-485-396-7246","1-266-935-5348","1-673-517-1482","1-835-838-7762","1-429-325-7491","1-322-646-0341","1-133-713-2985","1-746-456-3281","1-322-451-6112","1-277-548-3024","1-241-502-9289","1-457-999-3172","1-853-745-3122","1-897-731-7267","1-798-425-5873","1-813-883-5240","1-388-776-8977","1-542-724-3027","1-823-919-2115","1-413-386-6688","1-868-800-4488","1-472-424-6474","1-728-880-0929","1-815-184-7347","1-929-135-7892","1-482-416-3572","1-977-365-6231","1-405-165-5466","1-344-851-3747","1-772-372-7373","1-896-679-5728","1-482-189-1643","1-857-317-4641","1-236-483-2794","1-613-597-4266","1-285-463-1138","1-561-141-6601","1-558-589-6455","1-278-323-0074","1-912-614-8881","1-945-228-8637","1-337-670-1431","1-801-385-4894","1-341-643-7567","1-484-953-8025","1-743-648-5260","1-271-255-8126","1-203-246-5643","1-231-941-8443","1-311-986-6864","1-862-252-4234","1-534-779-0865","1-664-512-4676","1-497-225-5134","1-646-472-5285","1-828-959-8767","1-686-639-9666","1-281-732-2516","1-534-718-2575","1-684-166-2450","1-475-694-8664","1-997-252-9818","1-486-918-7723","1-480-243-9625","1-606-468-4191","1-417-235-0212","1-445-448-6181","1-245-250-3245","1-746-677-6021","1-757-884-4315","1-676-351-5271","1-914-233-5615","1-582-161-8866","1-228-829-8571","1-402-670-6439","1-241-653-0105","1-354-245-1942","1-383-525-8338","1-505-500-9102","1-760-867-6263","1-595-485-8876","1-432-843-5116"];

const addressesList:string[] = ["633-8624 Dictum St.","P.O. Box 805, 4528 Erat Road","566-2124 Lorem. St.","606-4106 Phasellus Road","P.O. Box 541, 3049 Molestie Avenue","Ap #887-1808 Vestibulum. St.","3604 Eget Road","Ap #250-6678 Nullam Road","Ap #686-2379 Erat St.","Ap #440-1414 Vel St.","256-3790 Laoreet, Rd.","Ap #693-5601 Sed St.","Ap #505-8892 Risus. Avenue","3772 Leo, Street","6668 Nonummy Ave","Ap #665-842 Felis Ave","P.O. Box 189, 7862 Nullam Av.","515-3466 Malesuada Rd.","P.O. Box 403, 1097 Lacus. Rd.","P.O. Box 138, 1466 Vitae, St.","Ap #379-9069 Faucibus Avenue","Ap #939-1652 Dictum St.","779-5868 Ac Av.","919-1116 Nec Rd.","Ap #561-2046 Fringilla. Rd.","Ap #413-4985 Sagittis. St.","P.O. Box 754, 4048 Scelerisque Av.","Ap #479-756 Nullam Road","P.O. Box 807, 3696 Penatibus Rd.","P.O. Box 715, 5871 Ut Ave","Ap #408-856 Ante Road","821-1560 Ipsum St.","Ap #933-7397 Donec St.","740-8492 Sociis Ave","P.O. Box 417, 4127 Vitae Avenue","841-9873 Consequat, St.","Ap #340-3947 Fusce St.","P.O. Box 952, 4804 Ac Rd.","P.O. Box 412, 5717 Lacus. Rd.","833-4731 Vestibulum Avenue","629-6442 Blandit Ave","P.O. Box 596, 5310 Nullam Rd.","Ap #208-6575 Id, Street","394-6628 Nunc Street","Ap #297-4844 Malesuada St.","687-9109 Auctor, Ave","790-5623 Consectetuer Ave","Ap #440-8562 Et Avenue","4423 Sem Street","Ap #237-9180 Quisque St.","Ap #649-6225 Orci. Ave","Ap #860-2379 Primis Rd.","Ap #956-9481 Morbi St.","Ap #654-6758 Vitae Ave","Ap #928-7889 Rutrum Rd.","585-6703 Urna, Rd.","9249 Amet, Av.","P.O. Box 304, 2592 Primis Road","381-7817 Integer Road","Ap #595-5945 Congue, Rd.","5076 Enim. Road","Ap #886-8866 Ut Ave","6015 Vestibulum St.","P.O. Box 645, 5113 Lorem Street","Ap #977-3255 Quis Ave","176-4598 Mauris Avenue","P.O. Box 471, 8350 Rhoncus. Av.","1415 Sed St.","398-3486 Donec St.","368-6335 Aliquet, St.","2014 Rutrum Rd.","937-4818 Ligula Av.","892-5965 Nam St.","149-8578 Donec Rd.","Ap #114-3585 Eu, Rd.","P.O. Box 470, 642 In Rd.","5785 Eget St.","6365 Morbi Ave","Ap #113-2715 Sed Street","Ap #457-4800 Donec Ave","756-7080 Sociis Ave","Ap #219-7228 Elementum, Ave","Ap #145-2851 Proin Road","154-829 Ac Rd.","Ap #778-545 Mauris St.","Ap #243-2200 Enim. Ave","P.O. Box 883, 8071 Penatibus St.","696-1360 Sociis Street","P.O. Box 124, 4639 Maecenas Rd.","P.O. Box 394, 3106 Quis Avenue","Ap #739-688 Diam. Road","8122 Leo. Avenue","Ap #536-938 Mi, Avenue","631-6261 Donec Ave","Ap #242-8076 Vitae Road","5079 Pede. St.","503-2370 Lobortis Rd.","483-516 In Avenue","734 Sollicitudin Av.","Ap #638-7247 Class Road"];
const zipsList:string[] = ["50295","74636","59354","92918","87272","23665","99603","48607","64930","95509","25845","35225","28083","28308","67514","24472","35278","45127","21331","63962","87748","28434","60747","58028","37725","72850","67752","42360","28747","61334","38745","87881","60514","23521","63592","42653","64881","57137","35161","76880","41835","40736","33757","22119","35221","55205","35781","87424","79676","67438","38220","36050","36942","63614","48267","91414","31904","83646","89223","79573","47818","84117","48435","92306","27644","83722","65362","33636","33711","42640","34865","85046","30586","43632","72868","68255","37878","55554","91215","72337","31814","31448","71372","36212","39577","56044","90127","61257","67567","64135","86600","25496","83516","11861","59746","54660","77344","29243","30285","42235"];
const statesList:string[] = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "D.C.", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

const userNamesList:string[] = ["RCU25UTJ8JK","YOR19OTG4BD","VGU65BIO6EK","MMP85VTK5YK","GFT14FAB7LQ","DUG34UHD6KF","OET11FOM7TY","MYM45YCQ3FW","KPA71FYM9HM","TSF18EWU7MF","BXH85NBT6LS","ZDU71NJO4WR","EIC61GWZ6TC","IRQ83QSQ8GX","PJP57LFE4YI","WVD29IWU0ID","ONX32CFC6JA","MIP78MWQ5TR","TSM65YXW5OT","UFD28BOY4NC","KEK19WNA5CX","LCV25TEA9XT","YOK72SKR8YF","MCB25NMU6LC","DVJ67NOL6TP","ZQQ74OMY2OG","CIV53UEW3ND","HMU67LLG8UX","TXI76GBQ3WU","MVU15YBN3GS","FQQ38SBW8PC","NXF05RVS7TL","HJL15EFU3UF","ZRW77NNY3CR","QVY85FDC4NO","KYO69LHN0XB","YYL47NXK8IY","GZH89UKK6GG","NFH64FEX5JJ","XCI82TRN3WS","VIW19FHI0IP","HAJ12ADC9EN","LQX97MGB7QJ","NST24TCK6YS","WDV21VDK4KH","DHY77NXT1QK","DOU98CSK9TT","NPH18KUV6KA","TCY87DTW5MQ","SNN91CEH6KE","SYE28TKG1NN","ZXY72FXH5PN","IRY52JUC4RV","HIO87QVV3YM","LCV56WER8MQ","YKC18IEV4QN","VPB61IJH6ID","CMU58ZNR8KV","JJX68CRV3OH","MHK85RKQ6WP","FJR82LYO5KS","HUS52FOW7QT","YCP85JEL4QY","GVV85EKT2RD","YKP65JWZ9IB","HDX91MTB0WU","RSI73FVG3AJ","YXX21PWJ2OV","JFL58SHG3DS","YUZ36VWE0NS","QDR07GIV4UK","TLS12RPW6WD","CXH41TIU1ES","BAT61DRU1VT","MPI20UKN8YR","LQG61CWQ5QU","UVO84KVR3MV","IXS78TSO7QO","WTC84LRU7IR","XML33DRU1BG","QSV86JQU7IZ","JSU42GRK1QG","NVG17RVF9FM","HSY61TWP1LV","SPB81SHH7EY","BOQ47PMB7QE","CWP32VOK5JN","PWD32NMZ0PZ","GUX42DDA5CA","LIC71QMV9HE","GMU28LBN5FX","JYR45XOX5QX","JSD83CXH9IB","QED18MPF2LR","VUO56HMN3NP","XWD65CVJ1DK","RFO51TJV1CV","CRQ05OTA7KV","PWT15NGU7DV","OYM48VLZ9VV"];

const pricesList:number[] = [83.95 ,78.94 ,52.60 ,50.85 ,109.88 ,50.32 ,41.40 ,123.10 ,51.87 ,104.69 ,75.27 ,65.93 ,126.28 ,128.55 ,141.50 ,117.24 ,142.03 ,69.69 ,102.58 ,40.38 ,62.10 ,78.01 ,52.47 ,73.48 ,47.02 ,76.23 ,99.60 ,105.13 ,135.90 ,40.78 ,83.30 ,85.75 ,97.08 ,139.80 ,143.05 ,55.24 ,45.11 ,134.43 ,74.82 ,52.95 ,67.11 ,39.94 ,109.67 ,50.27 ,55.64 ,31.54 ,102.65 ,143.39 ,97.82 ,84.22 ,130.33 ,131.95 ,136.79 ,96.71 ,62.48 ,86.19 ,113.96 ,35.12 ,71.47 ,76.79 ,49.35 ,128.16 ,58.28 ,47.28 ,63.03 ,32.68 ,47.29 ,113.53 ,117.67 ,83.58 ,31.46 ,141.22 ,59.43 ,114.83 ,31.05 ,96.68 ,51.11 ,92.88 ,54.64 ,56.43 ,101.96 ,110.12 ,79.45 ,82.13 ,88.37 ,87.21 ,43.40 ,83.60 ,103.80 ,46.19 ,80.21 ,80.49 ,104.33 ,106.56 ,51.12 ,81.76 ,94.21 ,91.81 ,56.10 ,73.58];
//^^^lists of 100 random items, generated from: https://generatedata.com/

export type addressObj = {
  id: number;
  address: string;
  zip: string;
  state: string;
};
export type emailObj = { id: number; account: string; emailAddress: string };
export type phoneObj = { id: number; phoneNumber: string; monthlyBill: number };
export type userObj = {
  id: number;
  name: string;
  email: string;
  phone: string;
  addresses: addressObj[];
  emails: emailObj[];
  phones: phoneObj[];
};

export const getNamesList = (): string[] => { return namesList; };
export const getEmailsList = (): string[] => { return emailsList; };
export const getPhonesList = (): string[] => { return phonesList; };

export const getAddressesList = (): string[] => { return addressesList; };
export const getZipsList = (): string[] => { return zipsList; };
export const getStatesList = (): string[] => { return statesList; };

export const getUserNamesList = (): string[] => { return userNamesList; };

export const getPricesList = (): number[] => { return pricesList; };

// export const getAddressObj = ():addressObj => {return {  id: 0, address: "", zip: "", state: "" };};
export const getAddressObj = (
  _id: number = 0,
  _addr: string = "123 Something St.",
  _zip: string = "55555",
  _state: string = "MI"
): addressObj => {
  return { id: _id, address: _addr, zip: _zip, state: _state };
};

export const getEmailObj = (
    _id: number = 0,
    _acct: string = "testUserName",
    _emailAddr: string = "test@test.com"
): emailObj => {
  return { id: _id, account: _acct, emailAddress: _emailAddr };
};

export const getPhoneObj = (
    _id: number = 0,
    _phoneNum: string = "555-555-5555",
    _monthly: number = 35.55
): phoneObj => {
  return { id: _id, phoneNumber: _phoneNum, monthlyBill: _monthly };
};

export const getUserObj = (
    _id: number = 0,
    _name: string = "John Smith",
    _email: string = "test@test.com",
    _phone: string = "555-555-5555",
    _addr: addressObj[] = [],
    _emails: emailObj[] = [],
    _phones: phoneObj[] = [],
): userObj => {
  return {
    id: _id,
    name: _name,
    email: _email,
    phone: _phone,
    addresses: _addr,
    emails: _emails,
    phones: _phones,
  };
};
//^^^taking more of a Factory Function approach
