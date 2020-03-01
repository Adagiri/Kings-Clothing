const SHOP_DATA = {
  pistol: {
    id: 1,
    title: "handguns",
    routeName: "pistol",
    items: [
      {
        id: 1,
        name: "CZ-75",
        imageUrl: "http://www.military-today.com/firearms/cz_75.jpg",
        price: 800
      },
      {
        id: 2,
        name: "FN Five Seven ",
        imageUrl: "http://www.military-today.com/firearms/fn_five_seven.jpg",
        price: 1200
      },
      {
        id: 3,
        name: "HK USP ",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/First-year_H%26K_USP_9mm_%2832415150000%29_modified.jpg/800px-First-year_H%26K_USP_9mm_%2832415150000%29_modified.jpg",
        price: 900
      },
      {
        id: 4,
        name: " Beretta PX4 Storm ",
        imageUrl:
          "http://www.military-today.com/firearms/beretta_px4_storm.jpg",
        price: 1100
      },
      {
        id: 5,
        name: "Walther P99",
        imageUrl: "http://www.military-today.com/firearms/walther_p99.jpg",
        price: 1185
      },
      {
        id: 6,
        name: "Walther P99",
        imageUrl: "http://www.military-today.com/firearms/walther_p99.jpg",
        price: 1111
      },
      {
        id: 7,
        name: " Beretta PX4 Storm ",
        imageUrl:
          "http://www.military-today.com/firearms/beretta_px4_storm.jpg",
        price: 1150
      },
      {
        id: 8,
        name: "FN Five Seven ",
        imageUrl: "http://www.military-today.com/firearms/fn_five_seven.jpg",
        price: 1300
      },
      {
        id: 9,
        name: "CZ-75",
        imageUrl: "http://www.military-today.com/firearms/cz_75.jpg",
        price: 990
      }
    ]
  },
  smg: {
    id: 2,
    title: "sub machine guns",
    routeName: "smg",
    items: [
      {
        id: 10,
        name: "CZ Scorpion EVO 3",
        imageUrl: "http://www.military-today.com/firearms/cz_scorpion_evo3.jpg",
        price: 1000
      },
      {
        id: 11,
        name: "Ingram",
        imageUrl: "http://www.military-today.com/firearms/ingram.jpg",
        price: 900
      },
      {
        id: 12,
        name: "Beretta PM12",
        imageUrl: "http://www.military-today.com/firearms/beretta_pm12.jpg",
        price: 1100
      },
      {
        id: 13,
        name: "Heckler & Koch UMP",
        imageUrl: "http://www.military-today.com/firearms/hk_ump.jpg",
        price: 1050
      },
      {
        id: 14,
        name: "Heckler & Koch MP7",
        imageUrl: "http://www.military-today.com/firearms/hk_mp7.jpg",
        price: 850
      },
      {
        id: 15,
        name: "Uzi",
        imageUrl: "http://www.military-today.com/firearms/uzi.jpg",
        price: 1350
      },
      {
        id: 16,
        name: "FN P90 ",
        imageUrl: "http://www.military-today.com/firearms/fn_p90.jpg",
        price: 1500
      },
      {
        id: 17,
        name: " Heckler & Koch MP5",
        imageUrl: "http://www.military-today.com/firearms/hk_mp5.jpg",
        price: 200
      }
    ]
  },
  shotgun: {
    id: 3,
    title: "shotgun",
    routeName: "shotgun",
    items: [
      {
        id: 18,
        name: "Browning Citori White Lightning",
        imageUrl:
          "https://assets.americanhunter.org/media/1999206/browningcitoriwhitelightning_inset.jpg",
        price: 1250
      },
      {
        id: 19,
        name: "Mossberg 500 Turkey .410",
        imageUrl:
          "https://assets.americanhunter.org/media/1999207/mossberg500turkey410_inset.jpg",
        price: 1230
      },
      {
        id: 20,
        name: "Benelli 828U",
        imageUrl:
          "https://assets.americanhunter.org/media/1999215/benelli828usport_inset.jpg",
        price: 1300
      },
      {
        id: 21,
        name: "Caesar Guerini Revenant",
        imageUrl:
          "https://assets.americanhunter.org/media/1999214/caesarguerinirevenant_inset.jpg",
        price: 1600
      },
      {
        id: 22,
        name: "CZ-USA CZ 1012",
        imageUrl:
          "https://assets.americanhunter.org/media/1999213/cz1012_inset.jpg",
        price: 1850
      }
    ]
  },
  assault: {
    id: 4,
    title: "assault rifles",
    routeName: "rifle",
    items: [
      {
        id: 23,
        name: "AK 103",
        imageUrl:
          "https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Best_Military_Rifles_AK-103_resize_md.JPG",
        price: 2500
      },
      {
        id: 24,
        name: "Heckler & Koch G36 ",
        imageUrl: "http://www.military-today.com/firearms/hk_g36.jpg",
        price: 3000
      },
      {
        id: 25,
        name: "Steyr AUG ",
        imageUrl: "http://www.military-today.com/firearms/steyr_aug.jpg",
        price: 3200
      },
      {
        id: 26,
        name: "Galil",
        imageUrl: "http://www.military-today.com/firearms/galil.jpg",
        price: 2400
      },
      {
        id: 27,
        name: "Tavor TAR-21 ",
        imageUrl: "http://www.military-today.com/firearms/tavor_tar21.jpg",
        price: 3500
      },
      {
        id: 28,
        name: "FN SCAR",
        imageUrl: "http://www.military-today.com/firearms/fn_scar.jpg",
        price: 3510
      },
      {
        id: 29,
        name: "kalashnikov-ak-74",
        imageUrl:
          "https://media.istockphoto.com/photos/kalashnikov-ak-74-with-gp25-grenade-launcher-picture-id1021375044?k=6&m=1021375044&s=170667a&w=0&h=ranT6txgdb6WrOCgF6AblOc14g0rL7bxgF7ZvpSWQG4=",
        price: 2820
      }
    ]
  },
  sniper: {
    id: 5,
    title: "sniper rifles",
    routeName: "sniper",
    items: [
      {
        id: 30,
        name: "barrett m82",
        imageUrl: "http://www.military-today.com/firearms/barrett_m82.jpg",
        price: 6000
      },
      {
        id: 31,
        name: "Steyr SSG 69 ",
        imageUrl: "http://www.military-today.com/firearms/steyr_ssg_69.jpg",
        price: 10000
      },
      {
        id: 32,
        name: "arctic warfare magnum",
        imageUrl:
          "http://www.military-today.com/firearms/arctic_warfare_magnum.jpg",
        price: 8000
      },
      {
        id: 33,
        name: "m 24",
        imageUrl: "http://www.military-today.com/firearms/m24.jpg",
        price: 14000
      },
      {
        id: 34,
        name: " SAKO TRG 42",
        imageUrl: "http://www.military-today.com/firearms/sako_trg_42.jpg",
        price: 12000
      },
      {
        id: 35,
        name: " Blaser R93 Tactical",
        imageUrl:
          "http://www.military-today.com/firearms/blaser_r93_tactical.jpg",
        price: 13000
      }
    ]
  }
}

export default SHOP_DATA;
