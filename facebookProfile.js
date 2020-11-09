let facebookProfile = {
  name: "Adrien Lee",
  friends: [
    { objectId: 1, name: "Armeen Hadizadeh" },
    { objectId: 2, name: "Jacob La" },
    { objectId: 3, name: "Jack Bui" },
    { objectId: 4, name: "Kai Luthra" },
    { objectId: 5, name: "Oliver Kwan" },
  ],
  newFriend: function (name) {
    let objectId = facebookProfile.friends.length + 1;
    facebookProfile.friends.push({ objectId, name});
  },

  removeFriend: function (id) {
    facebookProfile.friends.find((friend, index, arr) => {
      try {
        if(id === friend.objectId){
          console.log(friend)
          facebookProfile.friends.splice(index, 1)
        }
      }
      catch(e){
        console.log('error')
      }
    });
  },
};


facebookProfile.newFriend('Hus Moahli')

facebookProfile.removeFriend(5)

console.log(facebookProfile.friends)