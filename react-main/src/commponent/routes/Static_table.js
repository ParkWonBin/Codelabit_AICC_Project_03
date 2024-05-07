

const StaticTable = ({props})=>{
    const {getData, setMapData} = props

    const handleRowClick = (item) => {
        setMapData({
            latitude: item.위도,
            longitude: item.경도,
            message: `번호: ${item.번호}`  // 혹은 다른 메시지 형식
        });
    };

    return(
    <div className='panel'>
        <h3>데이터 상세</h3>
        <table id='chartDataTable'>
          <thead>
            <tr>
            {// 첫번째 요소의 key값들을 모두 조회하면서 열이름 작성
            getData.length > 0 && Object.keys(getData[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
            </tr>
          </thead>
          <tbody>
          {// 전체 내용 출력
          getData.map((item, index) => (
            <tr key={index} onClick={() => handleRowClick(item)}>
              {Object.values(item).map((value, valueIndex) => (
                <td key={valueIndex}>{value}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
}

export default StaticTable;