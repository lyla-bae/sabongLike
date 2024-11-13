import axios from "axios";
import { useState, useEffect,  } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import DetailDataTable from "./DetailDataTable";

export default function Detail(props) {
    const [detailData, setdetailData] = useState(null);

    const [loading, setLoading] = useState(true);

    // ProductDetail.js
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const productId = params.id;



    const getDetail = async (progrmRegistNo = productId) => {
        const service = "/getVltrPartcptnItem";
        const serviceKey =
            "?serviceKey=vb52G3WJqnRQ7ECwTfXfSGQJY3AFx9yCfxGlDJGPgAiUVTu3g%2Bqmq%2B8wZNLRKenbUiuGfuLPwmJHpxMb9SbYow%3D%3D";

        const url = `&progrmRegistNo=${progrmRegistNo}`;
        const response = await axios({
            method: "get",
            url: "/api" + service + serviceKey + url,
        });
        const data = response.data.response.body.items.item
        console.log(data);

        setdetailData(data);
        setLoading(false);
    };

    useEffect(() => {
        getDetail();
    }, []);

    if (loading) return <div>loading</div>;
    // return <div>{detailData}</div>;

    return <DetailDataTable items={detailData} productId = {productId} />;
}

export { Detail };
