function Form_Left(){
  return (
    <form action="/create_process" method="post" class="addStudentForm" id="form">


    &nbsp;과목명&nbsp;<input type="text" name="subject" placeholder="ex) 물리" required></input>


    &nbsp;수업료(단위 : 만)&nbsp;<input class="inputTuition" type="number" name="tuition" placeholder="숫자만 입력" required />



    <input class="complete-button" type="submit" value="완료" />
    
    </form>
  )
}

export default Form_Left
