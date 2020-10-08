/************************* COMMON ************************/

/************************* BONE ************************/

const boneRbHurts = document.getElementsByName("rb_hurt_exp");
for (let i = 0 ; i < boneRbHurts.length; i++){
  boneRbHurts[i].onclick = function () {
    if (boneRbHurts[0].checked) {
      document.getElementById("txt_hurt_exp").disabled = false;
      document.getElementById("txt_hurt_exp").placeholder = "어떻게 다쳤나요? ex) 디스크";
    } else if(boneRbHurts[1].checked) {
      document.getElementById("txt_hurt_exp").disabled = true;
      document.getElementById("txt_hurt_exp").placeholder = "";
    }
  }
}

try {
  const cbPPO = document.getElementById("cbPainPointOther");
  cbPPO.onchange = function() {
    if (cbPPO.checked) {
      document.getElementById("txtPainPointOther").disabled = false;
    } else {
      document.getElementById("txtPainPointOther").disabled = true;
    }
  }
} catch (e) {

}

try {
  const cbHO = document.getElementById("cbHisOther");
  cbHO.onchange = function () {
    if (cbHO.checked) {
      document.getElementById("txtHisOther").disabled = false;
    } else {
      document.getElementById("txtHisOther").disabled = true;
    }
  }
} catch(e) {

}

const rbSurgeryExps = document.getElementsByName("rb_surgeryexp");
for (let i = 0 ; i < rbSurgeryExps.length; i++){
  rbSurgeryExps[i].onclick = function () {
    if (rbSurgeryExps[0].checked) {
      document.getElementById("txtSurgeryExp").disabled = false;
    } else if(rbSurgeryExps[1].checked) {
      document.getElementById("txtSurgeryExp").disabled = true;
    }
  }
}

const rbAllergy = document.getElementsByName("rb_allergy");
for (let i = 0 ; i < rbAllergy.length; i++){
  rbAllergy[i].onclick = function () {
    if (rbAllergy[0].checked) {
      document.getElementById("txtAllergy").disabled = false;
    } else if(rbAllergy[1].checked) {
      document.getElementById("txtAllergy").disabled = true;
    }
  }
}

/************************* DENTIST ************************/

/************************* EAR ************************/

try {
  const cbDHO = document.getElementById("cb_dhOther");
  cbDHO.onchange = function () {
    if (cbDHO.checked) {
      document.getElementById("txt_dhOther").disabled = false;
      document.getElementById("txt_dhOther").placeholder = "병명을 입력하세요.";
    } else {
      document.getElementById("txt_dhOther").disabled = true;
      document.getElementById("txt_dhOther").placeholder = "";
    }
  }
} catch (e) {

}

const rbDrugSide = document.getElementsByName("rb_drugSide");
for (let i = 0 ; i < rbDrugSide.length; i++){
  rbDrugSide[i].onclick = function () {
    if (rbDrugSide[0].checked) {
      document.getElementById("txt_drugSide").disabled = false;
      document.getElementById("txt_drugSide").placeholder = "약물 이름을 적어주세요";
    } else if(rbDrugSide[1].checked) {
      document.getElementById("txt_drugSide").disabled = true;
      document.getElementById("txt_drugSide").placeholder = "";
    }
  }
}

const rbOtherAction = document.getElementsByName("rb_otherAction");
for (let i = 0 ; i < rbOtherAction.length; i++){
  rbOtherAction[i].onclick = function () {
    if (rbOtherAction[0].checked) {
      document.getElementById("txt_OAAHos").disabled = false;
      document.getElementById("txt_OAAAct").disabled = false;
    } else if(rbOtherAction[1].checked) {
      document.getElementById("txt_OAAHos").disabled = true;
      document.getElementById("txt_OAAAct").disabled = true;
    }
  }
}

const rbVisited = document.getElementsByName("rb_visited");
for (let i = 0 ; i < rbVisited.length; i++){
  rbVisited[i].onclick = function () {
    if (rbVisited[0].checked) {
      document.getElementById("ta_symtomChange").disabled = false;
      document.getElementById("ta_symtomChange").placeholder = "증세 변화 사항 및 필요한 사항을 적어주세요.";
    } else if(rbVisited[1].checked) {
      document.getElementById("ta_symtomChange").disabled = true;
      document.getElementById("ta_symtomChange").placeholder = "";
    }
  }
}

/************************* EYE ************************/

/************************* MENTAL ************************/

/************************* NEURO ************************/

/************************* PEE ************************/

/************************* PLASTIC ************************/

/************************* SKIN ************************/

const rbTerms = document.getElementsByName("rb_pain_exp");
for (let i = 0 ; i < rbTerms.length; i++){
  rbTerms[i].onclick = function () {
    if (rbTerms[0].checked) {
      document.getElementById("txtPainTerm").disabled = false;
    } else if(rbTerms[1].checked) {
      document.getElementById("txtPainTerm").disabled = true;
    }
  }
}

const rbDrugs = document.getElementsByName("rb_other_drug");
for (let i = 0 ; i < rbDrugs.length; i++){
  rbDrugs[i].onclick = function () {
    if (rbDrugs[0].checked) {
      document.getElementById("txtOtherDrug").disabled = false;
    } else if(rbDrugs[1].checked) {
      document.getElementById("txtOtherDrug").disabled = true;
    }
  }
}
