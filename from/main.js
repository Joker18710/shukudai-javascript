function companyflg(ischecked){
  if(ischecked === true){
    document.getElementById("companyNameElement").disabled = false;
  }
  else{
    document.getElementById("companyNameElement").disabled = true;
  }
}

function custmerflg(ischecked){
  if(ischecked === true){
    document.getElementById("companyNameElement").disabled = true;
  }else{
    document.getElementById("companyNameElement").disabled = true;
  }
}


//const container = document.querySelector("#container");

//const radiobutton = document.querySelector("#radiobutton");

//console.log(container);
/*console.log(radiobutton);


c or b*/
function savedBtnClick(){
let checkValue = radioButton.elements['content'].value;
console.log('選択されているのは'+ checkValue + 'です');
}
let radioButton = document.getElementById('radioButton');
radioButton.elements[1].checked = true;

let savedBtn = document.getElementById('savedBtn');
savedBtn.addEventListener('click',savedBtnClick);


//会社名をフォームから取得し変数に格納する
const container =document.getElementById("container");
const companyname =document.getElementById("companyNameElement");
console.log(container);
console.log(companyname);

//取得した会社名をローカルストレージに保存する。
const saveBtn = document.getElementById("savedBtn");
saveBtn.addEventListener('click',()=>{
  const inputDate = companyname.value;
  localStorage.setItem("companyname",inputDate);
  companyname.value = "";
});
//ローカルストレージから会社名を取得する。
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("companyname");
  console.log(savedDate);
  companyname.value = savedDate;
});

/*
//氏名
const inputForm = document.getElementById("inputForm").value;
//氏名をフォームから取得しローカルストレージに保存する。
saveBtn.addEventListener("click",()=>{
  const inputDate = inputForm.value;
  localStorage.setItem("inputForm",inputDate);
  inputForm.value=""
})
//ローカルストレージから氏名を取得する
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("inputForm");
  inputForm.value = savedDate;
})

//生年月日
const years = document.getElementById("years").value;
//取得した生年月日をローカルストレージに保存する
localStorage.setItem("years",years);
saveBtn.addEventListener("click",()=>{
  years.value = localStorage.setItem("years");
  years.value=""
})
backBtn.addEventListener("click",()=>{
  years.value = localStorage.getItem("years");
})

//メールアドレス
const eadress = document.querySelector("#eadress");
console.log(eadress);
saveBtn.addEventListener("click",()=>{
  const inputDate = eadress.value;
  localStorage.setItem("key3",inputDate);
  eadress.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key3");
  eadress.value = savedDate;
})

//郵便番号
saveBtn.addEventListener("click",()=>{
  const inputDate = postCode.value;
  localStorage.setItem("key4",inputDate);
  postCode.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key4");
  postCode.value = savedDate;
})*/
//セレクトボックス
function savedBtnClick(){
  console.log('選択されているのは' + prefSelect.value +'です' );
}
let prefSelect = document.getElementById('pref');
prefSelect.option[2].selected = true;


/*住所
saveBtn.addEventListener("click",()=>{
  const inputDate = Adress.value;
  localStorage.setItem("key5",inputDate);
  Adress.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key5");
  Adress.value = savedDate;
})

//お問合せ内容
saveBtn.addEventListener("click",()=>{
  const inputDate = ask.value;
  localStorage.setItem("key6",inputDate);
  ask.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key6");
  ask.value = savedDate;
})

//ラジオボタンの値をローカルストレージに保存
function saveRadioButtonValue(){
  var radioButton = document.querySelectorAll('input[name="content"]');
  radioButton.forEach(function(radioButton) {
  if (radioButton.checked) {
  localStorage.setItem('content', radioButton.value);
 }
 });
}

// ページが読み込まれたときに以前選択された値を設定する関数
 function loadSavedValues() {
  var savedContent = localStorage.getItem('content');
  if (savedContent) {
  var radioButton = document.querySelector(`input[name="content"][value="${savedContent}"]`);
  if (radioButton) {
  radioButton.checked = true;
  }
  }
*/








