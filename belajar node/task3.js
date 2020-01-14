const people = [
    { name: "Steve", friend: true },
    { name: "Dan", friend: false },
    { name: "Bart", friend: true },
    { name: "Sarah", friend: false },
    { name: "Michelle", friend: false },
    { name: "Holly", friend: true }
   ];
   
  const sort = people.filter(
      function(ffriends){
      if(ffriends.friend == true){
          console.log(ffriends)
      }
  })