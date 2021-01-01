const { write } = require("@popperjs/core");
const dayjs = require("dayjs");
var firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
require("form-serializer");
require("dayjs/locale/ko");
// import 'dayjs/locale/ko'
dayjs.locale('ko') // global로 한국어 locale 사용

var firebaseEmailAuth;
var firebaseDatabase;
var db;
var formSerializeArray;
var new_value;
var isAdduser = false;
var cnt = 0;
var temp = "";

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

//firestore document에서 사용하는 id값 임의 생성
var docID = db.collection(" ").doc().id;

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
    setData();
    saveToDB();
  };
}

//이전 페이지로 돌아가기 + 저장했던 DB 삭제
var before = document.getElementById("historyBack");
if (before) {
  before.onclick = function () {
    var user = firebase.auth().currentUser;
    var email;
    if (user != null) {
      email = user.email;
    }

    db.collection(email)
      .doc(sessionStorage.getItem("0"))
      .delete()
      .then(function () {
        var url = document.referrer;
        if (url != null) {
          window.location.href = url;
          sessionStorage.clear();
        } else {
          alert("진료과목 선택 페이지로 돌아갑니다.");
          window.location.href = "/Munjin_2_choice.html";
          sessionStorage.clear();
        }
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
}

// (질문,값) 세션에 저장하기
function setData() {
  sessionStorage.clear();
  sessionStorage.setItem("0", docID);
  var questions = document.getElementsByClassName("question");

  for (var i = 0; i < questions.length; i++) {
    var obj_key = Object.keys(formSerializeArray)[i]; //key를 구하고
    var obj_value = formSerializeArray[obj_key]; //key를 활용하여 value를 구한다.
    if (Array.isArray(obj_value)) {
      new_value = obj_value.filter(function (a) {
        return a !== "isNull";
      });
    } else {
      new_value = obj_value;
    }
    sessionStorage.setItem(questions[i].innerHTML, new_value);
    formSerializeArray[obj_key] = new_value;
  }
}

//Firestore에 값 넣기
function saveToDB() {
  var user = firebase.auth().currentUser;
  var email;
  if (user != null) email = user.email;
  var title = document.title;
  let now = dayjs();
  let info = {
    $timestamp: now.format("YYYY년 MM월 DD일 HH:mm:ss"),
    $category: title,
    $status: "yet"
  };
  db.collection(email)
    .doc(sessionStorage.getItem("0"))
    .set(formSerializeArray)
    .then(function () {
      window.location.href = "/Munjin_3_pyo.html";
      db.collection(email)
        .doc(sessionStorage.getItem("0"))
        .set(info, { merge: true });
    })
    .catch(function () {
      alert("에러가 발생했습니다, 다시 시도해주세요 "+error);
    });
}

//확인 후 처음 페이지로 돌아가기
var btnDone = document.getElementById("pyoDone");
if (btnDone) {
  btnDone.onclick = function () {
    alert("저장되었습니다!");
    window.location.href = "/Munjin_1_main.html";
  };
}

//진료 기록 페이지 
var historyList = document.getElementById("history");
var moreBtn = document.getElementById("more");
if (historyList) {
  moreBtn.onclick = function () {
   listUp();
  };
}

function listUp() {
  var user = firebase.auth().currentUser;
  var email;
  if (user != null) {
    email = user.email;
  }
  var first = db.collection(email)
  .orderBy("$timestamp", "desc")
  .limit(3);

  if (cnt === 0) {
    return first.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        historyList.innerHTML+="<tr><td>";
        historyList.innerHTML+=doc.data().$category+" => "+doc.data().$timestamp;
        temp = doc.data().$timestamp;
        historyList.innerHTML+="</td></tr>";
      });
    },
    cnt++)
    .catch(function (error) {
      console.log("데이터를 정렬하는 도중 오류가 발생했습니다, 다시 시도해주세요!", error);
    })
  }
  else {
    var next = db.collection(email)
            .orderBy("$timestamp", "desc")
            .startAfter(temp)
            .limit(3);
    return next.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        historyList.innerHTML+="<tr><td>";
        historyList.innerHTML+=doc.data().$category+" => "+doc.data().$timestamp;
        temp = doc.data().$timestamp;
        historyList.innerHTML+="</td></tr>";
      });
    }, cnt++)
    .catch(function (error) {
      console.log("데이터를 정렬하는 도중 오류가 발생했습니다, 다시 시도해주세요!", error);
    });
  }
}
//writeDr 완료하기
var btnDr = document.getElementById("btn_writeDr");
if (btnDr) {
  btnDr.onclick = function () {
    // formSerializeArray = $("form").serializeObject();
    setAnswer();
    alert("감사합니다 :)")

  };
}

function setAnswer() {
  var user = firebase.auth().currentUser;
  var email;
  if (user) email = user.email;
  //yet 검색해서 update해주기
}

var findL = document.getElementById("latest");
  if(findL) {
    findL.onclick = function () {
      listUp2();
    }
  }

function listUp2() {
  var user = firebase.auth().currentUser;
  var email;
  if (user) email = user.email;
  var statusIsYet = db.collection(email).where("$status", "==", "yet");
   statusIsYet.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        findL.innerHTML = "현재 문진표: "+doc.data().$category+" - "+doc.data().$timestamp;
    })
  })
    .catch(function (error) {
      console.log("데이터를 불러오는 도중 오류가 발생했습니다, 다시 시도해주세요!", error);
    });
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