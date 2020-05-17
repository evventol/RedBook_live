import React from "react";
import { AboutBlock } from "../about-block";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./about-map.module.scss";

export class AboutMap extends React.Component {
  state = {
    position: null,
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { coords } = pos;

        const position = [coords.latitude, coords.longitude];

        this.setState({ position });
      },
      (err) => console.log(err),
      {
        timeout: 5000,
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  }

  render() {
    const { position } = this.state;

    return (
      <AboutBlock
        title={"Карта"}
        description={"Data downloads on GBIF.org from users in Ukraine"}
      >
        {position && (
          <Map className={styles.map} center={position} zoom={15}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </Map>
        )}
      </AboutBlock>
    );
  }
}
