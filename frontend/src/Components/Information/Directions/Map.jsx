
import GoogleMaps from "simple-react-google-maps"

const Map = ({ coord }) => {
    const { lat, lng } = coord;
    return (
        <GoogleMaps
            apiKey={"AIzaSyBUfUckWghbs-wyuV-KNPODMAQcog4qA28&callback=initMap"}
            style={{ height: "300px", width: "100%" }}
            zoom={17}
            center={{ lat: lat, lng: lng }}
            markers={{ lat: lat, lng: lng }}
        />
    );
}


export default Map