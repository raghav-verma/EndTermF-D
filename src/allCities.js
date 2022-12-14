const ALL_CITIES = [
    {
       "id": "6303218439028736",
       "stateId": "5076495651307520",
       "name": "Meerut",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5720147234914304",
       "stateId": "5076495651307520",
       "name": "Greater Noida",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5091364022779904",
       "stateId": "5076495651307520",
       "name": "Noida",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5702666986455040",
       "stateId": "5076495651307520",
       "name": "Ghaziabad",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5654313976201216",
       "stateId": "5639445604728832",
       "name": "Gurugram",
       "state": "Haryana",
    },
    {
      "id": "6040283682701312",
      "stateId": "4922474219175936",
      "name": "Ahmedabad",
      "state": "Gujarat",
     },
    {
       "id": "5363819165515776",
          "stateId": "5634472569470976",
          "name": "Mumbai",
          "state": "Maharashtra",
    },
    {
       "id": "5554531081388032",
       "stateId": "5639445604728832",
       "name": "Sonipat",
       "state": "Haryana",
    },
    {
       "id": "5603669517008896",
       "stateId": "5076495651307520",
       "name": "Varanasi",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5631986051842048",
       "stateId": "5639445604728832",
       "name": "Karnal",
       "state": "Haryana",
    },
    {
       "id": "4542043879636992",
          "stateId": "4538857819209728",
          "name": "Chennai",
          "state": "Tamil Nadu",
    },
    {
       "id": "4549424646717440",
       "stateId": "5634472569470976",
       "name": "Pune",
       "state": "Maharashtra",
    },
    {
       "id": "4620792360861696",
       "stateId": "4922474219175936",
       "name": "Surat",
       "state": "Gujarat",
      },
    {
       "id": "4641881937936384",
       "stateId": "5076495651307520",
       "name": "Prayagraj",
       "state": "Uttar Pradesh",
    },
    {
       "id": "4758804721827840",
       "stateId": "4822765056032768",
       "name": "Patna",
       "state": "Bihar",
    },
    {
       "id": "6395289938165760",
       "stateId": "6515299092267008",
       "name": "Mangaluru",
       "state": "Karnataka",
    },
    {
       "id": "4765407277744128",
       "stateId": "5639445604728832",
       "name": "Rewari",
       "state": "Haryana",
    },
    {
       "id": "4987546543063040",
       "stateId": "5676073085829120",
       "name": "Mohali",
       "state": "Punjab",
    },
    {
       "id": "4988651792498688",
       "stateId": "5076495651307520",
       "name": "Lucknow",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5069036098420736",
          "stateId": "5076495651307520",
          "name": "Moradabad",
          "state": "Uttar Pradesh",
    },
    {
       "id": "5269854340775936",
       "stateId": "5700305828184064",
       "name": "Gwalior",
       "state": "Madhya Pradesh",
    },
    {
       "id": "5608929996308480",
       "stateId": "6515299092267008",
       "name": "Bengaluru",
       "state": "Karnataka",
    },
    {
       "id": "6368555629019136",
       "stateId": "4724545227325440",
       "name": "Hyderabad",
       "state": "Telangana",
    },
    {
       "id": "4934851924852736",
       "stateId": "5434384270229504",
       "name": "Kolkata",
       "state": "West Bengal",
    },
    {
       "id": "5682617542246400",
       "stateId": "5659313586569216",
       "name": "New Delhi",
       "state": "Delhi",
    },
    {
       "id": "5691878833913856",
       "stateId": "5763263606292480",
       "name": "Dehradun",
       "state": "Uttarakhand",
    },
    {
       "id": "5722646637445120",
       "stateId": "5639445604728832",
       "name": "Faridabad",
       "state": "Haryana",
    },
    {
       "id": "5754295311925248",
       "stateId": "5076495651307520",
       "name": "Mathura",
       "state": "Uttar Pradesh",
    },
    {
       "id": "5760066338684928",
       "stateId": "5715999101812736",
       "name": "Bhiwadi",
       "state": "Rajasthan",
    },
    {
       "id": "5760820306771968",
       "stateId": "5639445604728832",
       "name": "Panipat",
       "state": "Haryana",
    },
    {
       "id": "6337105865211904",
       "stateId": "5715999101812736",
       "name": "Jaipur",
       "state": "Rajasthan",
    },
    {
       "id": "6361769362587648",
       "stateId": "5076495651307520",
       "name": "Kanpur",
       "state": "Uttar Pradesh",
      },
    {
       "id": "6583328421445632",
       "stateId": "5676073085829120",
       "name": "Chandigarh",
       "state": "Punjab",
    },
    {
       "id": "6682450361057280",
       "stateId": "5634472569470976",
       "name": "Thane",
       "state": "Maharashtra",
    },
    {
       "id": "4701449325903872",
       "stateId": "5763263606292480",
       "name": "Haridwar",
       "state": "Uttarakhand",
    },
    {
       "id": "5650071221698560",
       "stateId": "4737420197101568",
       "name": "Goa",
       "state": "Goa",
    },{
       "id": "5739179841421312",
       "stateId": "6376429423951872",
       "name": "Thiruvananthapuram",
       "state": "Kerala",
    },{
       "id": "6212601906200576",
       "stateId": "4922474219175936",
       "name": "Vadodara",
       "state": "Gujarat",
    },{
       "id": "5994859634622464",
       "stateId": "5715999101812736",
       "name": "Neemrana",
       "state": "Rajasthan",
    },{
       "id": "6288037151506432",
       "stateId": "6376429423951872",
       "name": "Thrissur",
       "state": "Kerala",
    },{
       "id": "5037053941121047",
       "stateId": "6376429423951872",
       "name": "Kochi",
       "state": "Kerala",
    }
 ];
 
 module.exports = {
    ALL_CITIES
 }