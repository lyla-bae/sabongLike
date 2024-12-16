import React, {useEffect, useState} from 'react';
import axios from "axios";
import ShopItem from "../components/rewordShop/ShopItem";

const RewardShop = ({setPosition}) => {

    const [data, setData] = useState()


    useEffect(() => {
        setPosition("reward")

        axios({
            url:"/products/all",
            method:"get"
        }).then(res=>{
            console.log(res.data)

            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })

    },[])



    return (
                <>
                <main>
                    <div className="select_wrap list_filter">
                        <select name="select_wrap" id="" className="">
                            <option value="최신순">최신순</option>
                            <option value="최신순">최신순</option>
                            <option value="최신순">최신순</option>
                        </select>
                    </div>
                    <div className="list_pro_wrap">

                        {data&&data.map(item =>{
                            return <ShopItem key={item.id} item={item}/>
                        })}

                    </div>
                </main>


        </>
    );
};

export default RewardShop;