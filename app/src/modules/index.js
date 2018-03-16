let keys = require('object-keys');

function validateInput(obj){
  if(!obj.team || !obj.applicants){
    return false
  }
  if(Array.isArray(obj.team) && Array.isArray(obj.applicants)){
    return true
  } else {
    return false
  }
}

function isNumber(num){
  if(typeof num === "number"){
    return true
  } else {
    return false
  }
}

function inRange(num){
    if(num >= 0 && num <= 10){
        return true
    } else {
        return false
    }
}

export function compatibilityPredictor(workplace){
  //validate that there is both a team and an applicants array
  if(!validateInput(workplace)){
    return Error("predictor must have a team and applicants array input")
  }
  //define object of team attributes
  let initialTeamAttributes = {}
  for(let key in workplace.team[0].attributes){
    initialTeamAttributes[key] = 0
  }
  //reduce and sum attributes of all team members
  let teamAttributesTotal = workplace.team.reduce((initial, current, index, array) => {
      let sum = {};
      for(let key in current.attributes){
          sum[key] = parseInt(initial[key]) + parseInt(current.attributes[key]);
    };
      return sum;
  }, initialTeamAttributes);
  //create average of teams attributes to be compared against
  let teamAttributesAverage = {};
  for(let key in teamAttributesTotal){
      teamAttributesAverage[key] = (parseInt(teamAttributesTotal[key]) / workplace.team.length).toFixed(2)
  };
  //map new array of scored applicants
  //calculates score by calculating the average difference of applicant attributes vs team average
  let scoredApplicants = workplace.applicants.map(applicant => {
    let sum = 0;
    for(let key in applicant.attributes){
        sum += Math.abs(teamAttributesAverage[key] - parseInt(applicant.attributes[key]))
    };
    let averageDifference = sum / keys(applicant.attributes).length;
    return {
        name: applicant.name,
        score: (1 - averageDifference/10).toFixed(2)
    };
  });
  return scoredApplicants;
}
