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

try {
  const cbODO = document.getElementById("cb_odOther");
  cbODO.onchange = function () {
    if (cbODO.checked) {
      document.getElementById("txt_odOther").disabled = false;
    } else {
      document.getElementById("txt_odOther").disabled = true;
    }
  }
} catch (e) {

}

/************************* MENTAL ************************/

try {
  const cbSchizo = document.getElementById("cb_schizo");
  const schizoSymtoms = document.getElementsByName("cb_schizo");
  cbSchizo.onchange = function () {
    if (cbSchizo.checked) {
      for (var i = 0; i < schizoSymtoms.length; i++)
        schizoSymtoms[i].disabled = false;
    } else {
      for (var i = 0; i < schizoSymtoms.length; i++)
        schizoSymtoms[i].disabled = true;
    }
  }
} catch (e) {

}

/************************* NEURO ************************/
const rbDizzyTimings = document.getElementsByName("rb_dizzyTiming");
for(let i = 0 ; i < rbDizzyTimings.length ; i++){
  rbDizzyTimings[i].onclick = function () {
    if (rbDizzyTimings[rbDizzyTimings.length - 1].checked) {
      document.getElementById("txt_dizzyTimingOther").disabled = false;
    } else {
      document.getElementById("txt_dizzyTimingOther").disabled = true;
    }
  }
}

const rbDizzyWith = document.getElementsByName("rb_dizzyWith");
const cbDizzyWith = document.getElementsByName("cb_dizzyWith");
for(let i = 0 ; i < rbDizzyWith.length ; i++){
  rbDizzyWith[i].onclick = function () {
    if (rbDizzyWith[0].checked) {
      for (let j = 0 ; j < cbDizzyWith.length ; j++)
        cbDizzyWith[j].disabled = false;
    } else if(rbDizzyWith[1].checked){
      for (let j = 0 ; j < cbDizzyWith.length ; j++)
        cbDizzyWith[j].disabled = true;
    }
  }
}

try {
  const cbDWOther = document.getElementById("cb_dizzyWithOther");
  cbDWOther.onchange = function () {
    if (cbDWOther.checked) {
      document.getElementById("txt_dizzyWithOther").disabled = false;
      document.getElementById("txt_dizzyWithOther").placeholder = "증상을 적어주세요";
    } else {
      document.getElementById("txt_dizzyWithOther").disabled = true;
      document.getElementById("txt_dizzyWithOther").placeholder = "";
    }
  }
} catch (e) {

}

try {
  const cbDHOther = document.getElementById("cb_dizzyHarderOther");
  cbDHOther.onchange = function () {
    if (cbDHOther.checked) {
      document.getElementById("txt_dizzyHarderOther").disabled = false;
      document.getElementById("txt_dizzyHarderOther").placeholder = "요소를 적어주세요";
    } else {
      document.getElementById("txt_dizzyHarderOther").disabled = true;
      document.getElementById("txt_dizzyHarderOther").placeholder = "";
    }
  }
} catch (e) {

}

const rbHardHear = document.getElementsByName("rb_hardHearing");
const cbHardHear = document.getElementsByName("cb_hardHearing");
for(let i = 0 ; i < rbHardHear.length ; i++){
  rbHardHear[i].onclick = function() {
    if (rbHardHear[0].checked) {
      for(let j = 0 ; j < cbHardHear.length; j++)
        cbHardHear[j].disabled = false;
    } else if(rbHardHear[1].checked) {
      for(let j = 0 ; j < cbHardHear.length; j++)
        cbHardHear[j].disabled = true;
    }
  }
}

const rbRinging = document.getElementsByName("rb_ringing");
const cbRinging = document.getElementsByName("cb_ringing");
for(let i = 0 ; i < rbRinging.length ; i++){
  rbRinging[i].onclick = function() {
    if (rbRinging[0].checked) {
      for(let j = 0 ; j < cbRinging.length; j++)
        cbRinging[j].disabled = false;
    } else if(rbRinging[1].checked) {
      for(let j = 0 ; j < cbRinging.length; j++)
        cbRinging[j].disabled = true;
    }
  }
}

const rbEarDeaf = document.getElementsByName("rb_earDeaf");
const cbEarDeaf = document.getElementsByName("cb_earDeaf");
for(let i = 0 ; i < rbEarDeaf.length ; i++){
  rbEarDeaf[i].onclick = function() {
    if (rbEarDeaf[0].checked) {
      for(let j = 0 ; j < cbEarDeaf.length; j++)
        cbEarDeaf[j].disabled = false;
    } else if(rbEarDeaf[1].checked) {
      for(let j = 0 ; j < cbEarDeaf.length; j++)
        cbEarDeaf[j].disabled = true;
    }
  }
}

const cbNeuroHistory = document.getElementsByName("cb_history");
const txtNeuroHistory = document.getElementsByName("txt_history");
for (let i = 0; i < cbNeuroHistory.length; i++) {
  cbNeuroHistory[i].onchange = function () {
    if (cbNeuroHistory[i].checked) {
      txtNeuroHistory[i].disabled = false;
    } else {
      txtNeuroHistory[i].disabled = true;
    }
  }
}

const rbHeadFreq = document.getElementsByName("rb_headacheFreq");
for (let i = 0 ; i < rbHeadFreq.length; i++){
  rbHeadFreq[i].onclick = function () {
    if (rbHeadFreq[rbHeadFreq.length - 1].checked) {
      document.getElementById("txt_headacheFreqOther").disabled = false;
    } else {
      document.getElementById("txt_headacheFreqOther").disabled = true;
    }
  }
}

try {
  const cbHSOther = document.getElementById("cb_hSituationOther");
  cbHSOther.onchange = function () {
    if (cbHSOther.checked) {
      document.getElementById("txt_hSituationOther").disabled = false;
      document.getElementById("txt_hSituationOther").placeholder = "상황을 적어주세요";
    } else {
      document.getElementById("txt_hSituationOther").disabled = true;
      document.getElementById("txt_hSituationOther").placeholder = "";
    }
  }
} catch (e) {

}

try {
  const cbHSyOther = document.getElementById("cb_hSymtomOther");
  cbHSyOther.onchange = function () {
    if (cbHSyOther.checked) {
      document.getElementById("txt_hSymtomOther").disabled = false;
      document.getElementById("txt_hSymtomOther").placeholder = "증상을 적어주세요";
    } else {
      document.getElementById("txt_hSymtomOther").disabled = true;
      document.getElementById("txt_hSymtomOther").placeholder = "";
    }
  }
} catch (e) {

}

const rbHeadWith = document.getElementsByName("rb_headWith");
const cbHeadWith = document.getElementsByName("cb_headWith");
for(let i = 0 ; i < rbHeadWith.length ; i++){
  rbHeadWith[i].onclick = function () {
    if (rbHeadWith[0].checked) {
      for (let j = 0 ; j < cbHeadWith.length ; j++)
        cbHeadWith[j].disabled = false;
    } else if(rbHeadWith[1].checked){
      for (let j = 0 ; j < cbHeadWith.length ; j++)
        cbHeadWith[j].disabled = true;
    }
  }
}

try {
  const cbHWOther = document.getElementById("cb_headWithOther");
  cbHWOther.onchange = function () {
    if (cbHWOther.checked) {
      document.getElementById("txt_headWithOther").disabled = false;
      document.getElementById("txt_headWithOther").placeholder = "증상을 적어주세요";
    } else {
      document.getElementById("txt_headWithOther").disabled = true;
      document.getElementById("txt_headWithOther").placeholder = "";
    }
  }
} catch (e) {

}

const rbHOSymtom = document.getElementsByName("rb_headOtherSymtom");
const rbHOSDur = document.getElementsByName("rb_otherDuration");
for (let i = 0; i < rbHOSymtom.length; i++) {
  rbHOSymtom[i].onclick = function () {
    if (rbHOSymtom[0].checked) {
      document.getElementById("txt_headOtherSymtom").disabled = false;
      for (let j = 0 ; j < rbHOSDur.length; j++)
        rbHOSDur[j].disabled = false;
    } else if (rbHOSymtom[1].checked) {
      document.getElementById("txt_headOtherSymtom").disabled = true;
      for (let j = 0 ; j < rbHOSDur.length; j++)
        rbHOSDur[j].disabled = true;
    }
  }
}

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
