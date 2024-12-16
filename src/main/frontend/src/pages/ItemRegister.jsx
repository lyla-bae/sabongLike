import React, {useState} from 'react';
import axios from "axios";

const ItemRegister = () => {

  const itemInfo = {
    name:"",
    price:"",
    description:"",
    thumbnail:"",
    detailImage:""
  }

  const [itemData, setItemData] = useState(itemInfo)

  const applyItemData = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  function itemRegisterHandler(e) {
    e.preventDefault()
    axios({
      url:"/products/create",
      method:"POST",
      data:itemData
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)})
  }


  function thumbnailUploadHandler(e) {

    const formData = new FormData();
    formData.append('file', e.target.files[0]);  // 'image'는 서버에서 받을 필드명


    axios({
      url:"/images/upload",
      method:"POST",
      headers: {
        'Content-Type': 'multipart/form-data',  // 이미지 전송을 위한 헤더 설정
      },
      data:formData
    }).then(res=>{
      console.log(res)
      setItemData((prevData) => ({
        ...prevData,
        thumbnail: res.data
      }));
    })
  }

  function detailUploadHandler(e) {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);  // 'image'는 서버에서 받을 필드명


    axios({
      url:"/images/upload",
      method:"POST",
      headers: {
        'Content-Type': 'multipart/form-data',  // 이미지 전송을 위한 헤더 설정
      },
      data:formData
    }).then(res=>{
      setItemData((prevData) => ({
        ...prevData,
        detailImage: res.data
      }));
    })
  }
  return (
      <div>

        등록
        <form>
          {/*name*/}
          <input onChange={applyItemData} name="name" value={itemData.name} type="text"/>

          {/*price*/}
          <input onChange={applyItemData} name="price" value={itemData.price}
                 type="text"/>

          {/*description*/}
          <input onChange={applyItemData} name="description" value={itemData.description}
                 type="text"/>

          {/*thumbnail*/}
          <input onChange={thumbnailUploadHandler} type="file"/>

          {/*detailImage*/}
          <input onChange={detailUploadHandler} type="file"/>
          <button onClick={itemRegisterHandler}> 등록</button>


        </form>

      </div>
  );
};

export default ItemRegister;