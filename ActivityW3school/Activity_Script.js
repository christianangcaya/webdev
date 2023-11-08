/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "255px";
    document.getElementById("main").style.marginLeft = "255px";
}  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function remove(){
    document.getElementById("correct").style.display = "none";
    document.getElementById("Wrong").style.display = "none";
    document.getElementById("Attribute1s").style.display = "none";
    document.getElementById("Attribute2s").style.display = "none";
    document.getElementById("Attribute3s").style.display = "none";
    document.getElementById("Attribute4s").style.display = "none";
    document.getElementById("Attribute5s").style.display = "none";
    document.getElementById("Heading1s").style.display = "none";
    document.getElementById("Heading2s").style.display = "none";
    document.getElementById("Heading3s").style.display = "none";
    document.getElementById("Heading4s").style.display = "none";
    document.getElementById("Heading5s").style.display = "none";
    document.getElementById("Paragraph1s").style.display = "none";
    document.getElementById("Paragraph2s").style.display = "none";
    document.getElementById("Paragraph3s").style.display = "none";
    document.getElementById("Paragraph4s").style.display = "none";
    document.getElementById("Paragraph5s").style.display = "none";
    document.getElementById("Style1s").style.display = "none";
    document.getElementById("Style2s").style.display = "none";
    document.getElementById("Style3s").style.display = "none";
    document.getElementById("Style4s").style.display = "none";
    document.getElementById("Style5s").style.display = "none";
    document.getElementById("Formatting1s").style.display = "none";
    document.getElementById("Formatting2s").style.display = "none";
    document.getElementById("Formatting3s").style.display = "none";
    document.getElementById("Formatting4s").style.display = "none";
    document.getElementById("Formatting5s").style.display = "none";
    document.getElementById("Quotation1s").style.display = "none";
    document.getElementById("Quotation2s").style.display = "none";
    document.getElementById("Quotation3s").style.display = "none";
    document.getElementById("Quotation4s").style.display = "none";
    document.getElementById("Quotation5s").style.display = "none";
    document.getElementById("Comment1s").style.display = "none";
    document.getElementById("Comment2s").style.display = "none";
    document.getElementById("Comment3s").style.display = "none";
    document.getElementById("Comment4s").style.display = "none";
    document.getElementById("Comment5s").style.display = "none";
    document.getElementById("CSS1s").style.display = "none";
    document.getElementById("CSS2s").style.display = "none";
    document.getElementById("CSS3s").style.display = "none";
    document.getElementById("CSS4s").style.display = "none";
    document.getElementById("CSS5s").style.display = "none";
    document.getElementById("Link1s").style.display = "none";
    document.getElementById("Link2s").style.display = "none";
    document.getElementById("Link3s").style.display = "none";
    document.getElementById("Link4s").style.display = "none";
    document.getElementById("Link5s").style.display = "none";
    document.getElementById("Image1s").style.display = "none";
    document.getElementById("Image2s").style.display = "none";
    document.getElementById("Image3s").style.display = "none";
    document.getElementById("Image4s").style.display = "none";
    document.getElementById("Image5s").style.display = "none";

    document.getElementById("Table1s").style.display = "none";
    document.getElementById("Table2s").style.display = "none";
    document.getElementById("Table3s").style.display = "none";
    document.getElementById("Table4s").style.display = "none";
    document.getElementById("Table5s").style.display = "none";

    document.getElementById("List1s").style.display = "none";
    document.getElementById("List2s").style.display = "none";
    document.getElementById("List3s").style.display = "none";
    document.getElementById("List4s").style.display = "none";
    document.getElementById("List5s").style.display = "none";

    document.getElementById("Classes1s").style.display = "none";
    document.getElementById("Classes2s").style.display = "none";
    document.getElementById("Classes3s").style.display = "none";
    document.getElementById("Classes4s").style.display = "none";
    document.getElementById("Classes5s").style.display = "none";

    document.getElementById("Id1s").style.display = "none";
    document.getElementById("Id2s").style.display = "none";
    document.getElementById("Id3s").style.display = "none";
    document.getElementById("Id4s").style.display = "none";
    document.getElementById("Id5s").style.display = "none";

    document.getElementById("Iframe1s").style.display = "none";
    document.getElementById("Iframe2s").style.display = "none";
    document.getElementById("Iframe3s").style.display = "none";
    document.getElementById("Iframe4s").style.display = "none";
    document.getElementById("Iframe5s").style.display = "none";

    document.getElementById("Script1s").style.display = "none";
    document.getElementById("Script2s").style.display = "none";
    document.getElementById("Script3s").style.display = "none";
    document.getElementById("Script4s").style.display = "none";
    document.getElementById("Script5s").style.display = "none";

    document.getElementById("Computercode1s").style.display = "none";
    document.getElementById("Computercode2s").style.display = "none";
    document.getElementById("Computercode3s").style.display = "none";
    document.getElementById("Computercode4s").style.display = "none";
    document.getElementById("Computercode5s").style.display = "none";

    document.getElementById("Form1s").style.display = "none";
    document.getElementById("Form2s").style.display = "none";
    document.getElementById("Form3s").style.display = "none";
    document.getElementById("Form4s").style.display = "none";
    document.getElementById("Form5s").style.display = "none";

    document.getElementById("FormAttri1s").style.display = "none";
    document.getElementById("FormAttri2s").style.display = "none";
    document.getElementById("FormAttri3s").style.display = "none";
    document.getElementById("FormAttri4s").style.display = "none";
    document.getElementById("FormAttri5s").style.display = "none";

    document.getElementById("FormElem1s").style.display = "none";
    document.getElementById("FormElem2s").style.display = "none";
    document.getElementById("FormElem3s").style.display = "none";
    document.getElementById("FormElem4s").style.display = "none";
    document.getElementById("FormElem5s").style.display = "none";

    document.getElementById("InputType1s").style.display = "none";
    document.getElementById("InputType2s").style.display = "none";
    document.getElementById("InputType3s").style.display = "none";
    document.getElementById("InputType4s").style.display = "none";
    document.getElementById("InputType5s").style.display = "none";

    document.getElementById("InputAttri1s").style.display = "none";
    document.getElementById("InputAttri2s").style.display = "none";
    document.getElementById("InputAttri3s").style.display = "none";
    document.getElementById("InputAttri4s").style.display = "none";
    document.getElementById("InputAttri5s").style.display = "none";

    document.getElementById("AttributeTutors").style.display = "none";
    document.getElementById("HeadingTutors").style.display = "none";
    document.getElementById("ParagraphTutors").style.display = "none";
    document.getElementById("StyleTutors").style.display = "none";
    document.getElementById("FormattingTutors").style.display = "none";
    document.getElementById("QuotationTutors").style.display = "none";
    document.getElementById("CommentTutors").style.display = "none";
    document.getElementById("CSSTutors").style.display = "none";
    document.getElementById("LinkTutors").style.display = "none";
    document.getElementById("ImagesTutors").style.display = "none";
    document.getElementById("TableTutors").style.display = "none";
    document.getElementById("ListTutors").style.display = "none";
    document.getElementById("ClassesTutors").style.display = "none";
    document.getElementById("idTutors").style.display = "none";
    document.getElementById("IframeTutors").style.display = "none";
    document.getElementById("ScriptTutors").style.display = "none";
    document.getElementById("ComputercodeTutors").style.display = "none";
    document.getElementById("FormTutors").style.display = "none";
    document.getElementById("FormAttriTutors").style.display = "none";
    document.getElementById("FormElemTutors").style.display = "none";
    document.getElementById("InputTypeTutors").style.display = "none";
    document.getElementById("InputAttriTutors").style.display = "none";


}
const previousArray = ["Attribute1s"];
function reply_click(clicked_id){
    remove();
    document.getElementById(clicked_id+"s").style.display = "block";
    previousArray.splice(0,1 ,clicked_id+"s" );
}

function onclickna(){ // akin toh ver
    //Attributes
    if (exercisesId_array.includes("q1")){
      remove();
      document.getElementById("Attribute2s").style.display = "block";
      previousArray.splice(0,1 ,"Attribute2s");

      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("q2")){
      remove();
      document.getElementById("Attribute3s").style.display = "block";
      previousArray.splice(0,1 ,"Attribute3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver")){
      remove();
      document.getElementById("Attribute4s").style.display = "block";
      previousArray.splice(0,1 ,"Attribute4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver1")){
      remove();
      document.getElementById("Attribute5s").style.display = "block";
      previousArray.splice(0,1 ,"Attribute5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver2")){
      remove();
      document.getElementById("Heading1s").style.display = "block";
      previousArray.splice(0,1 ,"Heading1s");
      document.getElementById("correct").style.display = "none";
    }        
}

function onclicknawrong(){ // sayo ver
    remove();
    document.getElementById("Wrong").style.display = "none";
    document.getElementById(previousArray[0]).style.display = "block";
}

const exercisesId_array = [];
function checkAnswer(questionId, inputId, exerciseId, ){
    // Get specific question by ID
    var thisQuestionId = document.getElementById(questionId);
    // Get answer value of the specific question
    var ans = thisQuestionId.getAttribute("ansValue");
    // Get user input value
    var userAsnwer = document.getElementById(inputId).value;
    var eId = document.getElementById(exerciseId);
    // Checks if user input is same with set correct answer
    if (ans === userAsnwer){
        remove();
        document.getElementById("correct").style.display = "block";
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
        }
        //pag correct
        if (exercisesId_array.includes(questionId)){
          document.getElementById(exerciseId).style.backgroundColor="#7DA0CA";
          document.getElementById(inputId).value = "";
        }
    } else {
      remove();
      document.getElementById("Wrong").style.display = "block";
      document.getElementById(inputId).value = "";
    }
}
var isHidden = true;
function showAnswer(questionId) {
    // Get specific question by ID
    var thisQuestionId = document.getElementById(questionId);
    // Get answer value of the specific question
    var ans = thisQuestionId.getAttribute("ansValue");
   // Get the input element
   if (isHidden === true){
    var inputElement = document.querySelector('input[name="attribute_info"]');
   
   // Set the value of the input element to the correct answer
   inputElement.value = ans;
   
   // Disable the input to prevent further editing
   inputElement.setAttribute('disabled', 'true');
   isHidden = false;
   } else {
    var inputElement = document.querySelector('input[name="attribute_info"]');
   
   // Set the value of the input element to the correct answer
   inputElement.value = '';
   
   // Disable the input to prevent further editing
   inputElement.removeAttribute('disabled');
   isHidden = true;
   }
 }
 var done_exercises = 0;
function progress(exercisesId){
  progressBar = document.getElementById("progressId");
  done_exercises++;
  progressBar.textContent = "Completed " + done_exercises.toString() + " of 110 Exercises:";
  exercisesId_array.push(exercisesId);
}
function changetolessons(){
  document.getElementById("exerciseLabel").textContent = "Lessons"
}
function changetoexercises(){
  document.getElementById("exerciseLabel").textContent = "Exercise"
}

