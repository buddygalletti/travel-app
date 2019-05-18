import mapboxgl from 'mapbox-gl'

function markerMaker(category, coordinates) {
    const marker = document.createElement('div');
    marker.style.width = '32px';
    marker.style.height = '39px';
    if(category === 'activities'){
        marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    }
    if(category === 'hotels'){
        marker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
    }
    if(category === 'restaurants'){
        marker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
    }
    return new mapboxgl.Marker(marker).setLngLat(coordinates);
}

export default markerMaker;