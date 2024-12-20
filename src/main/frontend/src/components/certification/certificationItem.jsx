import React, {useEffect} from 'react';
import "../../style/certification.css";

const CertificationItem = ({item, point,setPoint}) => {
  const result_list = item.split('\n')
  const contents = result_list.filter((_, index) => index % 2 === 0);

  const vol_hour = result_list[6].split('시간')[0];
  useEffect(() => {
    setPoint(prev=>(prev+vol_hour*100))

  }, []);


  // useEffect(() => {
  //   console.log(result_list)
  // }, []);
  return (
      <div className="certification-item">
        {contents.map((content, i) => {
          if (i ===2 ){return}
          return (<span>{content}</span>)
        })}
        <div>
        <span>{vol_hour*100} 어흥</span>
        </div>
      </div>

  );
};

export default CertificationItem;