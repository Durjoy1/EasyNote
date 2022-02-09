// console.log('1asst')
showNotes();
let addbtn = document.getElementById('AddN');
addbtn.addEventListener("click", function(e){
    let addtext = document.getElementById('notespace');
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
    html += ` <div class="space" style="padding:5px;">
    <div class="deln" style="background-color:rgb(228, 225, 222); width:61%;margin:auto; border-radius:3px; text-align:center;">
      <h4 id="index" class="myNote" style="margin:1px 5px; text-align:center;">Note ${index + 1}</h4>
    <p style="margin:1px 5px; text-align:justify;" >${element}</p>
  <button id="${index}"onclick="deleteNote(this.id)" class="delBut" style=" background-color:blue;color: #ffffff; padding:4px;border: 1px solid blue; border-radius: 3px;">Delete Note</button>
</div>
</div>
    `
    
 });
    let notesElm = document.getElementById('notes');
 if (notesObj.length != 0){
     notesElm.innerHTML=html;
 }
 else {
    notesElm.innerHTML=`Nothing to Show! Use "Add" button to add a note`
 }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('search')
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    let space = document.getElementsByClassName('space')
    Array.from(space).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })

})