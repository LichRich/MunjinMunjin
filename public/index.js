const { write } = require("@popperjs/core");
var firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
require("form-serializer");

var firebaseEmailAuth;
var firebaseDatabase;
var db;
var formSerializeArray;
var isAdduser = false;

// 파이어베이스 초기화
var firebaseConfig = {
  apiKey: "AIzaSyBWCGyjxtDL7smhVRkraxI-6EDGZuIGPvE",
  authDomain: "munjinmunjin-75fc5.firebaseapp.com",
  databaseURL: "https://munjinmunjin-75fc5.firebaseio.com",
  projectId: "munjinmunjin-75fc5",
  storageBucket: "munjinmunjin-75fc5.appspot.com",
  messagingSenderId: "452765368961",
  appId: "1:452765368961:web:8e7510b77ff4e7c8b18380",
};
firebase.initializeApp(firebaseConfig);

firebaseEmailAuth = firebase.auth();
firebaseDatabase = firebase.database();
db = firebase.firestore();

//로그인 구현
var index = document.getElementById("btn_login");
if (index) {
  index.onclick = function () {
    var id = document.getElementById("user_id").value;
    var password = document.getElementById("user_pw").value;
    //파이어베이스 이메일 로그인 함수
    firebaseEmailAuth
      .signInWithEmailAndPassword(id, password)
      .then(function (firebaseUser) {
        //성공하면 firebaseUser에 유저 정보 값이 담겨 넘어온다.
        loginSuccess(firebaseUser);
      })
      .catch(function (error) {
        // 실패했을 때 에러 처리
        alert(error);
        alert("로그인 실패");
      });
  };
}

//로그인 성공했을 때
function loginSuccess(firebaseUser) {
  alert("님 안녕하세요!");
  //로그인 성공한 유저 id 확인해 보기 - firebase database에 접근해서 데이터 조회 하는 함수
  firebaseDatabase
    .ref("users/" + firebaseUser.uid)
    .once("value")
    .then(function (snapshot) {});
  //메인 페이지로 이동
  window.location.href = "/Munjin_1_main.html";
}



// 제출 구현
var skinbtn = document.getElementById("btn_submit");
if (skinbtn) {
  skinbtn.onclick = function () {
   formSerializeArray = $("form").serializeObject();
    check2();
   saveToDB();
    setData();
  }
}

function check2() {
  if ($('#checkbox1').prop("checked"))
var name1 = $("#checkbox1").val();
if ($('#checkbox2').prop("checked"))
var name2 = $("#checkbox2").val();
}



//Database에 값 넣기
function saveToDB() {
  var user = firebase.auth().currentUser;
  var email;
  if (user != null) email = user.email;
  db.collection(email).add(formSerializeArray).then(function() {
    alert("저장되었습니다!ㅎㅅㅎ");
    window.location.href = "/Munjin_3_pyo.html";
}).catch(function() {
    alert("에러가 발생했습니다, 다시 시도해주세요");
  })
}

// (질문,값) 저장하기
function setData() {
  sessionStorage.clear();
  var questions = document.getElementsByClassName("question");

  for (var i = 0; i < questions.length; i++) {
    var obj_key = Object.keys(formSerializeArray)[i]; //key를구하고
    var obj_value = formSerializeArray[obj_key]; //key를 활용하여 value값을 구한다.
    sessionStorage.setItem(questions[i].innerHTML, obj_value);
  }
}


// 회원가입 구현
var joinUs = document.getElementById("btn_join");
if (joinUs) {
  joinUs.onclick = function () {
    var email = document.getElementById("join_email").value;
    var password = document.getElementById("join_pw").value;
    isAdduser = true;
    firebaseEmailAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        isAdduser = false;
      });
  };
  initApp();
}

function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user && isAdduser) {
      var ref = firebaseDatabase.ref("users/" + user.uid); //저장될 곳을 users라는 부모 키를 레퍼런스로 지정.
      var name = document.getElementById("join_name").value;
      //저장 형식
      var obj = { name: name };
      ref.set(obj); // 고유한 자식 키가 하나 생셩이 되면서 json 삽입
      alert("가입 성공!");
    } else {
    }
  });
}