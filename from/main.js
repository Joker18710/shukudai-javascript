function companyflg(ischecked) {
  if (ischecked === true) {
    document.getElementById("companyName").disabled = false;
  }
  else {
    document.getElementById("companyName").disabled = true;
  }
}

function custmerflg(ischecked) {
  if (ischecked === true) {
    document.getElementById("companyName").disabled = true;
  } else {
    document.getElementById("companyName").disabled = true;
  }
}


//const container = document.querySelector("#container");

//const radiobutton = document.querySelector("#radiobutton");

//console.log(container);

const saveBtn = document.querySelector("#savedBtn input");


//c or b
let elements = document.getElementsByName('content');
elements[0].checked = true;

saveBtn.addEventListener('click', () => {
  console.log('クリックされました。');
  let checkedValue = "";
  let len = elements.length;
  for (let i = 0; i < len; i++) {
    if (elements.item(i).checked) {
      checkedValue = elements.item(i).value;
    }
  };
  localStorage.setItem("radiobtan", checkedValue);
});

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  const radiobtanSave = localStorage.getItem('radiobtan');
  console.log("run");
  let elements = document.getElementsByName('content');
  let len = elements.length;
  for (let i = 0; i < len; i++) {
    if (elements.item(i).value === radiobtanSave) {
      elements[i].checked = true;
    }
  }
});


/*backBtn.addEventListener('click',()=>{
  console.log('クリックされました');
const radiosave = localStorage.getItem("radiobtan");
elements.item(i).value = radiosave;

})*/






//会社名をフォームから取得し変数に格納する
const container = document.getElementById("container");
const companyNameElement = document.getElementById("companyName");


//取得した会社名をローカルストレージに保存する。
saveBtn.addEventListener("click", () => {
  const inputDate = companyNameElement.value;
  localStorage.setItem("companyname", inputDate);
  companyNameElement.value = "";
});
//ローカルストレージから会社名を取得する。
backBtn.addEventListener("click", () => {
  const savedDate = localStorage.getItem("companyname");
  companyNameElement.value = savedDate;
});


//氏名
const inputFormElements = document.getElementById("inputForm");
//氏名をフォームから取得しローカルストレージに保存する。
saveBtn.addEventListener("click", () => {
  const inputDate = inputFormElements.value;
  localStorage.setItem("name", inputDate);
  inputFormElements.value = "";
});
//ローカルストレージから氏名を取得する
backBtn.addEventListener("click", () => {
  const savedname = localStorage.getItem("name");
  inputFormElements.value = savedname;
});

//性別
let genderElements = document.getElementsByName('trigger');
genderElements[0].checked = true;

saveBtn.addEventListener('click', () => {
  let genderCheckValue = "";
  let genderlen = genderElements.length;
  for (let i = 0; i < genderlen; i++) {
    if (genderElements.item(i).checked) {
      genderCheckValue = genderElements.item(i).value;
    }
  };
  localStorage.setItem("gender", genderCheckValue);
});
backBtn.addEventListener("click", () => {
  const genderSave = localStorage.getItem('gender');
  console.log("run");
  let genderelements = document.getElementsByName('trigger');
  let len = genderelements.length;
  for (let i = 0; i < len; i++) {
    if (genderelements.item(i).value === genderSave) {
      genderelements[i].checked = true;
    }
  }
});


//生年月日
const yearsElemnts = document.getElementById("years");
//取得した生年月日をローカルストレージに保存する
saveBtn.addEventListener("click", () => {
  const inputData = yearsElemnts.value;
  localStorage.setItem("years", inputData);
  yearsElemnts.value = "";
});
backBtn.addEventListener("click", () => {
  const yearssave = localStorage.getItem("years");
  yearsElemnts.value = yearssave;
});

//メールアドレス
const emailad = document.getElementById("eadress");
saveBtn.addEventListener("click", () => {
  const inputData = emailad.value
  localStorage.setItem('email', inputData);
  emailad.value = "";
});
backBtn.addEventListener('click', () => {
  const gendersave = localStorage.getItem("email");
  emailad.value = gendersave;
})


//郵便番号
const postCodeElemnts = document.getElementById("postCode");
saveBtn.addEventListener("click", () => {
  const inputData = postCodeElemnts.value
  localStorage.setItem('postcode', inputData);
  postCodeElemnts.value = "";
});
backBtn.addEventListener('click', () => {
  const postsave = localStorage.getItem("postcode");
  postCodeElemnts.value = postsave;
})
//ボタンクリックで検索
const searchBtn = document.getElementById('postSearch');

//セレクトボックス

saveBtn.addEventListener('click', () => {
  const prefElements = document.getElementById('pref');
  console.log(prefElements.length);
  let options = prefElements.options;

  let prefCheckValue = "";
  let preflen = prefElements.length;
  for (let i = 0; i < preflen; i++) {
    if (prefElements.item(i).selected) {
      prefCheckValue = prefElements.item(i).value;
    }
  };
  localStorage.setItem('pref', prefCheckValue);
  options[0].selected = true;
});


backBtn.addEventListener("click", () => {
  const prefselectSave = localStorage.getItem('pref');  
  console.log("run");
  let element = document.getElementById('pref');
  let options = element.options;
  let len = options.length;
  for (let i = 0; i < len; i++) {
    if (options[i].value === prefselectSave) {
      options[i].selected = true;
    }
  }
});


/*backBtn.addEventListener('click', () => {
  const prefSave = localStorage.getItem("perf")
  prefElements.value = prefSave;
})*/



//都道府県
/*const selectElement = document.getElementById('pref'); // セレクト要素の取得

fetch(`https://zipcloud.ibsnet.co.jp/api/prefcode`) // 都道府県一覧のAPIを取得
  .then((response) => response.json()) // レスポンスをJSON形式に変換
  .then((data) => {
    data.results.forEach(element => {
      
    });((prefecture) => { // データの中身をループ
      const optionElement = document.createElement('option'); // <option>要素の生成
      optionElement.value = prefecture.prefCode; // 都道府県コードをvalue属性にセット
      optionElement.textContent = prefecture.prefName; // 都道府県名をテキストとしてセット
      selectElement.appendChild(optionElement); // <select>要素に<option>要素を追加
    });
  });*/


//市町村区 町域
const prefElements = document.getElementById('pref');
const cityElements = document.getElementById('address2');
const areaElements = document.getElementById('address3');

const zipcloudUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
//住所を整形して表示する
function formatJSON(json) {
  console.log(json);
  document.getElementById('message').textContent = "";
  document.getElementById('results').textContent = "";

  if (json.message !== null) {
    document.getElementById('message').textContent = 'json.message';
  }
  else if (json.results === null) {
    document.getElementById('message').textContent = '郵便番号が存在しません'
  }
  else {
    //prefElements.value = json.results[0].prefcode;
    cityElements.value = json.results[0].address2;
    areaElements.value = json.results[0].address3;

    let element = document.getElementById('pref');
    let options = element.options;
    let len = options.length;
    for (let i = 0; i < len; i++) {
      if (options[i].value === json.results[0].prefcode);
      options[i].selected = true;
  
    }

  }
}
window.addEventListener("load", () => {
  const searchBtn = document.getElementById('postSearch');

  searchBtn.addEventListener('click', () => {
    const url = zipcloudUrl + document.getElementById('postCode').value
    fetch(url)
      .then((Response) => Response.json())
      .then(data => formatJSON(data));


  })
});

/*const info ={
  data: 'cityData','areaData';
  Elements: cityElements,areaElements,
  key: 'city','area'
  
};
console.log(info[0]);

SavaBtn.addEventListener("click",() => {
  for(let l=0; l<'info'.length; l++)
  info.data[l] = info.Elements[l].value;
localStorage.setItem('info.key[l]',info.data[l]);
info.data[l],value = "";
})
backBtn.addEventListener('click',()=>{
 Elements[l].value = localStorage.getItem('key[l]');
})*/

saveBtn.addEventListener('click', () => {
  localStorage.setItem('city', cityElements.value);
  localStorage.setItem('area', areaElements.value);
  cityElements.value = "";
  areaElements.value = "";

})
backBtn.addEventListener('click', () => {
  const citySava = localStorage.getItem('city');
  cityElements.value = citySava;
  const areaSave = localStorage.getItem('area')
  areaElements.value = areaSave;
});


//町域


const questionElements = document.getElementById("ask");
saveBtn.addEventListener("click", () => {
  const questiontData = questionElements.value
  localStorage.setItem('question', questiontData);
  questionElements.value = "";
});
backBtn.addEventListener('click', () => {
  const asksave = localStorage.getItem("question");
  questionElements.value = asksave;
});