const initialState = {
  sections: [
    {
      title: "Hand Guns",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/FN5701.jpg",
      id: 1,
      linkUrl: `shop/${encodeURI('handguns')}`
    },
    {
      title: "sub machine guns",
      imageUrl:
        "https://www.loveworldtv.co.uk/wp-content/uploads/2018/04/sub-machine-gun-seized-in-anti-gang-raids.jpg",
      id: 2,
      linkUrl: `shop/${encodeURI('sub machine guns')}`
    },
    {
      title: "SHOT GUNS",
      imageUrl:
        "https://www.thefirearmblog.com/blog/wp-content/uploads/2018/05/Wilson-Combat-Rob-Haught-Special-Shotguns-6-660x260.jpg",
      id: 3,
      linkUrl: `shop/${encodeURI('shotgun')}`
    },
    {
      title: "Assault RifleS",
      imageUrl:
        "https://i2.wp.com/currentaffairs.gktoday.in/wp-content/uploads/2020/01/AK-203.jpg?fit=1260%2C709&ssl=1",
      size: "large",
      id: 4,
      linkUrl: `shop/${encodeURI('assault rifles')}`
    },
    {
      title: "Sniper RifleS",
      imageUrl: "https://i.imgur.com/een6ic4.jpg",
      size: "large",
      id: 5,
      linkUrl: `shop/${encodeURI('sniper rifles')}`
    }
  ]
};

const directoryReducer = (state = initialState, action) => { switch(action.type) {
    default:
        return state
}};

export default directoryReducer;
