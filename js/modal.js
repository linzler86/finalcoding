const modal = document.getElementById('modal');
// id값이 modal인 속성을 찾아서 modal변수에 할당
const button = document.getElementById('modal_Btn');
// id값이 btn인 속성을 찾아서 button변수에 할당
const span = document.querySelector('.close');
// class값이 close인 속성을 찾아 span변수에 할당

button.onclick = function() {
    modal.style.display = 'block';
}
// 버튼을 클릭했을때 modal창을 block으로 바꿔준다. (보이게끔)

span.onclick = function() {
    modal.style.display = 'none';
}
// X버튼을 클릭했을때 modal창을 닫는다.(안보이게 한다.)

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}
// 위에 X버튼 외에 모달창 밖 아무데나 클릭하면 modal창을 닫는다.(window객체이용)