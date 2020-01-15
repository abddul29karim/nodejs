const people = [
    { name: "Steve", friend: true },
    { name: "Dan", friend: false },
    { name: "Bart", friend: true },
    { name: "Sarah", friend: false },
    { name: "Michelle", friend: false },
    { name: "Holly", friend: true }
   ];
   
// indentasi tidak rapih 
// kalo ada case kaya gini, yang di console log sort nya, lihat notes di bawah
  const sort = people.filter(
      function(ffriends){
//       ini bisa diganti jadi ffriends.friend == true
      if(ffriends.friend == true){
          console.log(ffriends)
      }
  })
//   disini console.log(sort
