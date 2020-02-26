import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Hand Guns",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/FN5701.jpg",
          id: 1,
          linkUrl: "shop/pistol"
        },
        {
          title: "sub machine guns",
          imageUrl: "https://www.loveworldtv.co.uk/wp-content/uploads/2018/04/sub-machine-gun-seized-in-anti-gang-raids.jpg",
          id: 2,
          linkUrl: "shop/smg"
        },
        {
          title: "SHOT GUNS",
          imageUrl: "https://www.thefirearmblog.com/blog/wp-content/uploads/2018/05/Wilson-Combat-Rob-Haught-Special-Shotguns-6-660x260.jpg",
          id: 3,
          linkUrl: "shop/shotgun"
        },
        {
          title: "Assault RifleS",
          imageUrl: "https://news.wfsu.org/sites/wfsu/files/201906/AdobeStock_88720076.jpeg",
          size: "large",
          id: 4,
          linkUrl: "shop/assault"
        },
        {
          title: "Sniper RifleS",
          imageUrl: "https://i.imgur.com/een6ic4.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/sniper"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...restSection }) => (
          <MenuItem {...restSection} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
