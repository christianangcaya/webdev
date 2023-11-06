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
}

function reply_click(clicked_id){
    remove();
    document.getElementById(clicked_id+"s").style.display = "block";
}
const exercisesId_array = [];
function checkAnswer(questionId, inputId){
    // Get specific question by ID
    var thisQuestionId = document.getElementById(questionId);
    // Get answer value of the specific question
    var ans = thisQuestionId.getAttribute("ansValue");
    // Get user input value
    var userAsnwer = document.getElementById(inputId).value;
    // Checks if user input is same with set correct answer
    if (ans === userAsnwer){
        alert( userAsnwer + " is correct!");
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
        }
        //Attributes
        if (exercisesId_array.includes("q1")){
          document.getElementById("Attribute1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("q2")){
          document.getElementById("Attribute2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver")){
          document.getElementById("Attribute3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver1")){
          document.getElementById("Attribute4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver2")){
          document.getElementById("Attribute5").style.backgroundColor="green";
        }
        //Heading
        if (exercisesId_array.includes("hed1")){
          document.getElementById("Heading1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("hed2")){
          document.getElementById("Heading2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("hed3")){
          document.getElementById("Heading3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("hed4")){
          document.getElementById("Heading4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("hed5")){
          document.getElementById("Heading5").style.backgroundColor="green";
        }
        //Paragraph
        if (exercisesId_array.includes("para1")){
          document.getElementById("Paragraph1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("para2")){
          document.getElementById("Paragraph2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("para3")){
          document.getElementById("Paragraph3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("para4")){
          document.getElementById("Paragraph4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("para5")){
          document.getElementById("Paragraph5").style.backgroundColor="green";
        }
        //Style
        if (exercisesId_array.includes("st1")){
          document.getElementById("Style1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("st2")){
          document.getElementById("Style2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("st3")){
          document.getElementById("Style3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("st4")){
          document.getElementById("Style4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("st5")){
          document.getElementById("Style5").style.backgroundColor="green";
        }
        //Formatting
        if (exercisesId_array.includes("frm01")){
          document.getElementById("Formatting1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("frm02")){
          document.getElementById("Formatting2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("frm03")){
          document.getElementById("Formatting3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("frm04")){
          document.getElementById("Formatting4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("frm05")){
          document.getElementById("Formatting5").style.backgroundColor="green";
        }
        //Quotation
        if (exercisesId_array.includes("qt01")){
          document.getElementById("Quotation1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("qt02")){
          document.getElementById("Quotation2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("qt03")){
          document.getElementById("Quotation3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("qt04")){
          document.getElementById("Quotation4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("qt05")){
          document.getElementById("Quotation5").style.backgroundColor="green";
        }
        //Comment
        if (exercisesId_array.includes("cmt01")){
          document.getElementById("Comment1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cmt02")){
          document.getElementById("Comment2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cmt03")){
          document.getElementById("Comment3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cmt04")){
          document.getElementById("Comment4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cmt05")){
          document.getElementById("Comment5").style.backgroundColor="green";
        }
        //CSS
        if (exercisesId_array.includes("anscss1")){
          document.getElementById("CSS1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anscss2")){
          document.getElementById("CSS2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anscss3")){
          document.getElementById("CSS3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anscss4")){
          document.getElementById("CSS4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anscss5")){
          document.getElementById("CSS5").style.backgroundColor="green";
        }
        //Link
        if (exercisesId_array.includes("anslinks1")){
          document.getElementById("Link1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anslinks2")){
          document.getElementById("Link2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anslinks3")){
          document.getElementById("Link3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anslinks4")){
          document.getElementById("Link4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("anslinks5")){
          document.getElementById("Link5").style.backgroundColor="green";
        }
        //Image
        if (exercisesId_array.includes("ansimage1")){
          document.getElementById("Image1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ansimage2")){
          document.getElementById("Image2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ansimage3")){
          document.getElementById("Image3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ansimage4")){
          document.getElementById("Image4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ansimage5")){
          document.getElementById("Image5").style.backgroundColor="green";
        }
        //Table
        if (exercisesId_array.includes("tin1")){
          document.getElementById("Table1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("tin2")){
          document.getElementById("Table2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("tin3")){
          document.getElementById("Table3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("tin4")){
          document.getElementById("Table4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("tin5")){
          document.getElementById("Table5").style.backgroundColor="green";
        }
        //List
        if (exercisesId_array.includes("lin1")){
          document.getElementById("List1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("lin2")){
          document.getElementById("List2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("lin3")){
          document.getElementById("List3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("lin4")){
          document.getElementById("List4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("lin5")){
          document.getElementById("List5").style.backgroundColor="green";
        }
        //Classes
        if (exercisesId_array.includes("cin1")){
          document.getElementById("Classes1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cin2")){
          document.getElementById("Classes2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cin3")){
          document.getElementById("Classes3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cin4")){
          document.getElementById("Classes4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("cin5")){
          document.getElementById("Classes5").style.backgroundColor="green";
        }
        //Id
        if (exercisesId_array.includes("ver3")){
          document.getElementById("Id1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver4")){
          document.getElementById("Id2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver5")){
          document.getElementById("Id3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver6")){
          document.getElementById("Id4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver7")){
          document.getElementById("Id5").style.backgroundColor="green";
        }
        //iframe
        if (exercisesId_array.includes("rhy4")){
          document.getElementById("iframe1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy5")){
          document.getElementById("iframe2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy6")){
          document.getElementById("iframe3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy7")){
          document.getElementById("iframe4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy8")){
          document.getElementById("iframe5").style.backgroundColor="green";
        }
        //Script
        if (exercisesId_array.includes("ver8")){
          document.getElementById("Script1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ver9")){
          document.getElementById("Script2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy1")){
          document.getElementById("Script3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy2")){
          document.getElementById("Script4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("rhy3")){
          document.getElementById("Script5").style.backgroundColor="green";
        }
        //Computercode
        if (exercisesId_array.includes("ccin1")){
          document.getElementById("Computercode1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ccin2")){
          document.getElementById("Computercode2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ccin3")){
          document.getElementById("Computercode3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ccin4")){
          document.getElementById("Computercode4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ccin5")){
          document.getElementById("Computercode5").style.backgroundColor="green";
        }
        //Form
        if (exercisesId_array.includes("Fform1")){
          document.getElementById("Form1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("Fform2")){
          document.getElementById("Form2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("Fform3")){
          document.getElementById("Form3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("Fform4")){
          document.getElementById("Form4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("Fform5")){
          document.getElementById("Form5").style.backgroundColor="green";
        }
        //FormAttri
        if (exercisesId_array.includes("FAttr1")){
          document.getElementById("FormAttri1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FAttr2")){
          document.getElementById("FormAttri2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FAttr3")){
          document.getElementById("FormAttri3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FAttr4")){
          document.getElementById("FormAttri4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FAttr5")){
          document.getElementById("FormAttri5").style.backgroundColor="green";
        }
        //FormElem
        if (exercisesId_array.includes("FEq1")){
          document.getElementById("FormElem1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FEq2")){
          document.getElementById("FormElem2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FEq3")){
          document.getElementById("FormElem3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FEq4")){
          document.getElementById("FormElem4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("FEq5")){
          document.getElementById("FormElem5").style.backgroundColor="green";
        }
        //InputType
        if (exercisesId_array.includes("ITq1")){
          document.getElementById("InputType1").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ITq2")){
          document.getElementById("InputType2").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ITq3")){
          document.getElementById("InputType3").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ITq4")){
          document.getElementById("InputType4").style.backgroundColor="green";
        }
        if (exercisesId_array.includes("ITq5")){
          document.getElementById("InputType5").style.backgroundColor="green";
        }








    } else {
        alert( userAsnwer + " is wrong!");
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
  progressBar.textContent = "Completed " + done_exercises.toString() + "of 110 Exercises:";
  exercisesId_array.push(exercisesId);
}

