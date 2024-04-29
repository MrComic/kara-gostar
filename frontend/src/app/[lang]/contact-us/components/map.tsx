"use client";
import { Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MyMap(props: any) {
  return (
    <MapContainer
      center={[35.71773061103417, 51.12759384438734]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[35.71773061103417, 51.12759384438734]}></Marker>
    </MapContainer>
  );
}
