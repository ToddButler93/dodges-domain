type MapName = Record<
  string,
  {
    name: string;
    link: string;
  }
>;

const mapImages: MapName = {
  Katabatic: {
    name: "Katabatic",
    link: "https://utfs.io/f/6e61513f-6582-464e-b28a-5692e0fa36b6-1yedf.jpg",
  },
  "Arx Novena": {
    name: "Arx Novena",
    link: "https://utfs.io/f/553d5407-4bf6-4dd8-a862-377e07bf6e43-22qv.jpg",
  },
  "Dangerous Crossing": {
    name: "Dangerous Crossing",
    link: "https://utfs.io/f/4dd048a5-bcb6-477d-960b-81ab3f12cf51-2hg.jpg",
  },
  Crossfire: { name: "Crossfire", link: "" },
  Drydock: {
    name: "Drydock",
    link: "https://utfs.io/f/2d5f1340-de2d-4d45-befa-d4b9f7133497-2gw.jpg",
  },
  Terminus: { name: "Terminus", link: "" },
  Sunstar: {
    name: "Sunstar",
    link: "https://utfs.io/f/e19c167a-94a9-4ba2-a00d-ea31dceb20bf-2u8.jpg",
  },
  "Bella Omega": {
    name: "Bella Omega",
    link: "https://utfs.io/f/16ef85ec-9fb5-4082-aae9-0f8b210b2c8f-1jqmke.jpg",
  },
  "Bella Omega NS": {
    name: "Bella Omega NS",
    link: "https://utfs.io/f/16ef85ec-9fb5-4082-aae9-0f8b210b2c8f-1jqmke.jpg",
  },
  "Canyon Crusade Revival": { name: "Canyon Crusade Revival", link: "" },
  Blueshift: { name: "Blueshift", link: "" },
  Hellfire: { name: "Hellfire", link: "" },
  "Ice Coaster": { name: "Ice Coaster", link: "" },
  Perdition: { name: "Perdition", link: "" },
  Permafrost: { name: "Permafrost", link: "" },
  Raindance: {
    name: "Raindance",
    link: "https://utfs.io/f/1622342d-7352-4499-80a8-8105803d420a-2sy.jpg",
  },
  Stonehenge: { name: "Stonehenge", link: "" },
  Tartarus: {
    name: "Tartarus",
    link: "https://utfs.io/f/33d17c8b-7b48-401d-a577-956c774b405b-2457z.jpg",
  },
  "Temple Ruins": { name: "Temple Ruins", link: "" },
  // Community CTF
  Blues: { name: "Blues", link: "" },
  Incidamus: {
    name: "Incidamus",
    link: "https://utfs.io/f/29a1f116-4f10-46ab-a68d-5671ccb44300-1nqqux.jpg",
  },
  Periculo: {
    name: "Periculo",
    link: "https://utfs.io/f/56d30310-a245-40cd-b6d5-93b0eea55410-u33ju1.png",
  },
  Fracture: {
    name: "Fracture",
    link: "https://utfs.io/f/d4af37d3-616b-4ad1-ac74-0e696b5b566d-26fp.jpg",
  },
  Phlegethon: {
    name: "Phlegethon",
    link: "https://utfs.io/f/4e49d81d-5383-46de-8059-418a0bb1b63e-ywd9iw.png",
  },
  "Deserted Valley": {
    name: "Deserted Valley",
    link: "https://utfs.io/f/9c284427-0812-4dcb-af6f-38d85273d7a5-uclcr2.png",
  },
  Acheron: {
    name: "Acheron",
    link: "https://utfs.io/f/9e5b51fc-07f1-452b-a12d-f9103787ca25-o0x8sg.png",
  },
  Styx: {
    name: "Styx",
    link: "https://utfs.io/f/c3d66a27-74f8-402e-8f08-79933be46a43-2g54.jpg",
  },
  Eclipse: {
    name: "Eclipse",
    link: "https://utfs.io/f/fa141bd2-e4b2-4e07-b3dd-b342472a18b9-d303wr.jpg",
  },
  Polaris: {
    name: "Polaris",
    link: "https://utfs.io/f/1d38c69c-dfba-457d-a432-6b9d0d650185-8xh2kq.jpg",
  },
  Oceanus: {
    name: "Oceanus",
    link: "https://utfs.io/f/99f42db1-4d19-496a-9168-472d01d6327c-2cr5.jpg",
  },
  Meridian: { name: "Meridian", link: "" },
  Ascent: {
    name: "Ascent",
    link: "https://utfs.io/f/517f714f-a7f1-4ad7-8863-72b6b60ee875-bwelpk.jpg",
  },
  Crash: { name: "Crash", link: "" },
  Andromeda: {
    name: "Andromeda",
    link: "https://utfs.io/f/b0e2daef-aa74-4700-9bea-d9d3be399687-c0o2y1.jpg",
  },
  // Community Misc
  "Treacherous Pass": { name: "Treacherous Pass", link: "" },
  "Maze Runner": { name: "Maze Runner", link: "" },
  "Air Arena Blitz": { name: "Air Arena Blitz", link: "" },
  Broadside: {
    name: "Broadside",
    link: "https://utfs.io/f/be7be31f-59e9-451c-8c1b-3ac850f999e6-jqvz71.png",
  },
  // Community Arena
  "Walled In": {
    name: "Walled In",
    link: "https://utfs.io/f/f8773de0-1c62-4c28-9073-66752b5ae3d5-2xe.jpg",
  },
  "Elysian Battleground": {
    name: "Elysian Battleground",
    link: "https://utfs.io/f/fc3d415c-7a82-4bfc-9c49-9776200391df-2hp.jpg",
  },
  // Arena
  Ruins: {
    name: "Ruins",
    link: "https://utfs.io/f/938208c1-95d8-4e3a-ab94-6c81b5b68d80-f7ptmh.jpg",
  },
  Fraytown: { name: "Fraytown", link: "" },
  "Lava Arena": {
    name: "Lava Arena",
    link: "https://utfs.io/f/5bae4fdf-5b28-4a67-876d-c6c76070bb8d-2np.jpg",
  },
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
      return "https://utfs.io/f/99f42db1-4d19-496a-9168-472d01d6327c-2cr5.jpg";
    }
  } else {
    return "https://utfs.io/f/553d5407-4bf6-4dd8-a862-377e07bf6e43-22qv.jpg";
  }
}
