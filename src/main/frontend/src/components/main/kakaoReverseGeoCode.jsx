import React, {useEffect, useState} from "react";
import axios from "axios";

const KakaoReverseGeocoding = ({setCity}) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    getCurrentLocation()
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            reverseGeocode(longitude, latitude);
          },
          (err) => {
            setError("위치 정보를 가져올 수 없습니다.");
            console.error(err);
          }
      );
    } else {
      setError("이 브라우저에서는 위치 정보를 사용할 수 없습니다.");
    }
  };

  const reverseGeocode = async (longitude, latitude) => {
    const API_KEY = process.env.REACT_APP_KAKAO_KEY;
    const url = "https://dapi.kakao.com/v2/local/geo/coord2address.json";

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${API_KEY}`,
        },
        params: {
          x: longitude,
          y: latitude,
          input_coord: "WGS84",
        },
      });

      if (response.data.documents.length > 0) {
        setCity( response.data.documents[0].address["region_1depth_name"])
        // const { address } = response.data.documents[0];
        // setAddress(address.address_name);
      } else {
        setAddress("주소를 찾을 수 없습니다.");
      }
    } catch (err) {
      setError("역 지오코딩에 실패했습니다.");
      console.error(err);
    }
  };

  return (
     <></>
  );
};

export default KakaoReverseGeocoding;