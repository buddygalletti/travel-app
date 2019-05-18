import mapboxgl from 'mapbox-gl';
import markerMaker from './marker';
import goFetch from './ajaxStuff';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVkZHlnYWxsZXR0aSIsImEiOiJjanZ0cnNiNTkwc2tuM3pvZ3VkMHJyNm82In0.7zcRJ9o1nNOBsjiJnpv3tQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

async function addOptions(category) {
    try {
        const places = await goFetch(category);
        const select = document.getElementById(`${category}-choices`);
        places.forEach(function(place){
            const option = document.createElement('option');
            option.setAttribute('id', `${category}-${place.id}`);
            option.innerHTML = `${place.name}`
            select.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

addOptions('hotels');
addOptions('activities');
addOptions('restaurants');

console.log(goFetch('hotels'));