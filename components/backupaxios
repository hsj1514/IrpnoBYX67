import axios from 'axios';
// import fetch from 'isomorphic-unfetch'

const Main_Left_Content_Style = {
  borderTop : 'groove 1px',
  padding : '2px',
  margin : '3px 0px',
  height : '150px',
}


// Main_Left_Content.getInitialProps = async function() {
//   const res = await fetch('http://localhost:5000/list')
//   const data = await res.json()
//   console.log(data)
//
//   return {
//     shows: data
//   }
// }



function Main_Left_Content(){

  return (
    axios.get('http://localhost:5000/list')
      .then(function(response){
        const title = response.data
        console.log(title)
        console.log(title[2].title)
        // console.log(response)
        // console.log(title)
        // console.log(title[2])
        // console.log(title[2].title)
        // console.log(title[0])
        // console.log(title[1])
        // console.log(title[2])
        // console.log(title[3])

      }),


    <div className="content_left">

      <div style={Main_Left_Content_Style}>
        <div style={{paddingBottom : '10px', fontSize : '12px',}}>오늘 4월 26일</div>
        <div>학원 가기</div>
      </div>

      <div style={Main_Left_Content_Style}>
        <div style={{paddingBottom : '10px', fontSize : '12px',}}>목요일 5월 15일</div>
        <div>밥 먹기</div>
      </div>

    </div>
  )
}


export default Main_Left_Content
