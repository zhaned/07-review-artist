/* eslint-disable */
export async function getArtists(query,offset){
    const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=5&offset=${offset}`)
    const {artists} = await res.json();

  return artists.map((artist) => ({
      id: artist.id, 
      type: artist.type,
      name: artist.name,
      distinction: artist.disambiguation || 'Original Artist here',
  }))
}

export async function getReleases(artistId, artistName, offset) {
    const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=5&offset=${offset}`);

    const {releases} = await res.json();
    
    return releases.map((release) => ({
        id: release.id,
        artist: artistName,
        title: release.title,
        image: `http://coverartarchive.org/release/${release.id}/front` || 'https://placekitten.com/300/300'
    }))
}

export async function getSongs(releaseId, artistName){
    const res = fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`);

    const {recordings} = await res.json();
    // const songRes = fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    // const {lyrics} = await songRes.json();

    return recordings.map((song) => ({
        id: song.id,
        artist: artistName,
        title: song.title,
        lyrics: lyrics,
    }))
}

export async function getLyrics(artist, title){
    const res = fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    const {lyrics} = await res.json();
    return lyrics;
}

