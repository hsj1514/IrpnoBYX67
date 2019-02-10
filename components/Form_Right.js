const Form_Style = {
  marginLeft : '10px',
  paddingBottom : '150px',
}


function Form_Right(){
  return (
    <form style={Form_Style} action="/create_process" method="post" className="addStudentForm" id="form">


    &nbsp;과목명&nbsp;<input type="text" name="subject" placeholder="ex) 물리" required></input>


    &nbsp;수업료(단위 : 만)&nbsp;<input className="inputTuition" type="number" name="tuition" placeholder="숫자만 입력" required />



    <input className="complete-button" type="submit" value="완료" />

    </form>
  )
}

export default Form_Right
