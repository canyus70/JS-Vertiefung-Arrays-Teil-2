let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
];


const newAlbum = album.map(bilder => {
    let y = bilder.split(".");
    if (y.length >1 ) {
        return y[0].toLowerCase();
    } else {
        return "invalid"
    }
});

console.log(newAlbum);