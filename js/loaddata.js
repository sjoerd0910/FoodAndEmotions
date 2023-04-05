let myData;
let finalArray = [];

(async function () {

    myData = await d3.csv("data/data.csv");
    loadData(1);
    makeVisual();

})()


function loadData(value) {
    let participantArray = [];
    let previousParticipant;
    finalArray = [];

    for (let i = 0; i < myData.length; i++) {
        if (myData[i].Participant == previousParticipant) {
            participantArray.push(myData[i]);
            previousParticipant = myData[i].Participant;

        }
        else {
            if (participantArray.length != 0) {
                let scale = 20000 / participantArray.length;
                let index = Math.floor(value / scale);
                finalArray.push(participantArray[index]);
                participantArray = [];
            }
            participantArray.push(myData[i]);

            previousParticipant = myData[i].Participant;
        }
    }
    if (participantArray != []) {
        let scale = 20000 / participantArray.length;
        let index = Math.floor(value / scale);
        finalArray.push(participantArray[index]);
    }
}