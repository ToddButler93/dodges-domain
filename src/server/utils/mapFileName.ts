type MapName = Record<
  string,
  {
    name: string;
    link: string;
  }
>;

const mapImages: MapName = {
  Katabatic: { name: "Katabatic", link: "/static/img/maps/kata.jpg" },
  "Arx Novena": { name: "Arx Novena", link: "/static/img/maps/arx.jpg" },
  "Dangerous Crossing": {
    name: "Dangerous Crossing",
    link: "/static/img/maps/dx.jpg",
  },
  Crossfire: { name: "Crossfire", link: "" },
  Drydock: { name: "Drydock", link: "/static/img/maps/dd.jpg" },
  Terminus: { name: "Terminus", link: "" },
  Sunstar: { name: "Sunstar", link: "/static/img/maps/ss.jpg" },
  "Bella Omega": { name: "Bella Omega", link: "/static/img/maps/bella.jpg" },
  "Bella Omega NS": {
    name: "Bella Omega NS",
    link: "/static/img/maps/bella.jpg",
  },
  "Canyon Crusade Revival": { name: "Canyon Crusade Revival", link: "" },
  Blueshift: { name: "Blueshift", link: "" },
  Hellfire: { name: "Hellfire", link: "" },
  "Ice Coaster": { name: "Ice Coaster", link: "" },
  Perdition: { name: "Perdition", link: "" },
  Permafrost: { name: "Permafrost", link: "" },
  Raindance: { name: "Raindance", link: "/static/img/maps/rd.jpg" },
  Stonehenge: { name: "Stonehenge", link: "" },
  Tartarus: { name: "Tartarus", link: "/static/img/maps/tart.jpg" },
  "Temple Ruins": { name: "Temple Ruins", link: "" },
  // Community CTF
  Blues: { name: "Blues", link: "" },
  Incidamus: { name: "Incidamus", link: "/static/img/maps/incid.jpg" },
  Periculo: {
    name: "Periculo",
    link: "/static/img/maps/periculo-features.jpg",
  },
  Fracture: { name: "Fracture", link: "" },
  Phlegethon: { name: "Phlegethon", link: "" },
  "Deserted Valley": { name: "Deserted Valley", link: "" },
  Acheron: { name: "Acheron", link: "/static/img/maps/acheron-spawn.jpg" },
  Styx: { name: "Styx", link: "/static/img/maps/sty.jpg" },
  Eclipse: { name: "Eclipse", link: "/static/img/maps/eclipse2.jpg" },
  Polaris: { name: "Polaris", link: "/static/img/maps/polaris2.jpg" },
  Oceanus: { name: "Oceanus", link: "/static/img/maps/oce.jpg" },
  Meridian: { name: "Meridian", link: "" },
  Ascent: { name: "Ascent", link: "/static/img/maps/ascent2.jpg" },
  Crash: { name: "Crash", link: "" },
  Andromeda: { name: "Andromeda", link: "/static/img/maps/andromeda2.jpg" },
  // Community Misc
  "Treacherous Pass": { name: "Treacherous Pass", link: "" },
  "Maze Runner": { name: "Maze Runner", link: "" },
  "Air Arena Blitz": { name: "Air Arena Blitz", link: "" },
  Broadside: { name: "Broadside", link: "" },
  // Community Arena
  "Walled In": { name: "Walled In", link: "/static/img/maps/wi.jpg" },
  "Elysian Battleground": {
    name: "Elysian Battleground",
    link: "/static/img/maps/wb.jpg",
  },
  // Arena
  Ruins: { name: "Ruins", link: "/static/img/maps/ruins.jpg" },
  Fraytown: { name: "Fraytown", link: "" },
  "Lava Arena": { name: "Lava Arena", link: "" },
  "Air Arena": { name: "Air Arena", link: "" },
  Whiteout: { name: "Whiteout", link: "" },
  Undercroft: { name: "Undercroft", link: "" },
  Hinterland: { name: "Hinterland", link: "" },
  // Everything Else
  Nightabatic: { name: "Nightabatic", link: "" },
  "Sulfur Cove": { name: "Sulfur Cove", link: "" },
  Inferno: { name: "Inferno", link: "" },
  Outskirts: { name: "Outskirts", link: "" },
  Quicksand: { name: "Quicksand", link: "" },
  "Drydock Night": { name: "Drydock Night", link: "" },
  Miasma: { name: "Miasma", link: "" },
};

export async function mapToImageName(mapName: string): Promise<string> {
  const mapEntry = mapImages[mapName];
  if (mapEntry) {
    if (mapEntry.link != "") {
      return mapEntry.link;
    } else {
      return "/static/img/maps/oce.jpg";
    }
  } else {
    return "/static/img/maps/arx.jpg";
  }
}
