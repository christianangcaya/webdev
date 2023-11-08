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
     //Headings
     if (exercisesId_array.includes("hed1")){
      remove();
      document.getElementById("Heading2s").style.display = "block";
      previousArray.splice(0,1 ,"Heading2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("hed2")){
      remove();
      document.getElementById("Heading3s").style.display = "block";
      previousArray.splice(0,1 ,"Heading3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("hed3")){
      remove();
      document.getElementById("Heading4s").style.display = "block";
      previousArray.splice(0,1 ,"Heading4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("hed4")){
      remove();
      document.getElementById("Heading5s").style.display = "block";
      previousArray.splice(0,1 ,"Heading5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("hed5")){
      remove();
      document.getElementById("Paragraph1s").style.display = "block";
      previousArray.splice(0,1 ,"Paragraph1s");
      document.getElementById("correct").style.display = "none";
    }
    //Paragraphs
    if (exercisesId_array.includes("para1")){
      remove();
      document.getElementById("Paragraph2s").style.display = "block";
      previousArray.splice(0,1 ,"Paragraph2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("para2")){
      remove();
      document.getElementById("Paragraph3s").style.display = "block";
      previousArray.splice(0,1 ,"Paragraph3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("para3")){
      remove();
      document.getElementById("Paragraph4s").style.display = "block";
      previousArray.splice(0,1 ,"Paragraph4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("para4")){
      remove();
      document.getElementById("Paragraph5s").style.display = "block";
      previousArray.splice(0,1 ,"Paragraph5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("para5")){
      remove();
      document.getElementById("Style1s").style.display = "block";
      previousArray.splice(0,1 ,"Style1s");
      document.getElementById("correct").style.display = "none";
    }
    //Styles
    if (exercisesId_array.includes("st1")){
      remove();
      document.getElementById("Style2s").style.display = "block";
      previousArray.splice(0,1 ,"Style2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("st2")){
      remove();
      document.getElementById("Style3s").style.display = "block";
      previousArray.splice(0,1 ,"Style3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("st3")){
      remove();
      document.getElementById("Style4s").style.display = "block";
      previousArray.splice(0,1 ,"Style4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("st4")){
      remove();
      document.getElementById("Style5s").style.display = "block";
      previousArray.splice(0,1 ,"Style5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("st5")){
      remove();
      document.getElementById("Formatting1s").style.display = "block";
      previousArray.splice(0,1 ,"Formatting1s");
      document.getElementById("correct").style.display = "none";
    }
    //Formattings
    if (exercisesId_array.includes("frm01")){
      remove();
      document.getElementById("Formatting2s").style.display = "block";
      previousArray.splice(0,1 ,"Formatting2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("frm02")){
      remove();
      document.getElementById("Formatting3s").style.display = "block";
      previousArray.splice(0,1 ,"Formatting3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("frm03")){
      remove();
      document.getElementById("Formatting4s").style.display = "block";
      previousArray.splice(0,1 ,"Formatting4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("frm04")){
      remove();
      document.getElementById("Formatting5s").style.display = "block";
      previousArray.splice(0,1 ,"Formatting5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("frm05")){
      remove();
      document.getElementById("Quotation1s").style.display = "block";
      previousArray.splice(0,1 ,"Quotation1s");
      document.getElementById("correct").style.display = "none";
    }
    //Quotations
    if (exercisesId_array.includes("qt01")){
      remove();
      document.getElementById("Quotation2s").style.display = "block";
      previousArray.splice(0,1 ,"Quotation2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("qt02")){
      remove();
      document.getElementById("Quotation3s").style.display = "block";
      previousArray.splice(0,1 ,"Quotation3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("qt03")){
      remove();
      document.getElementById("Quotation4s").style.display = "block";
      previousArray.splice(0,1 ,"Quotation4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("qt04")){
      remove();
      document.getElementById("Quotation5s").style.display = "block";
      previousArray.splice(0,1 ,"Quotation5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("qt05")){
      remove();
      document.getElementById("Comment1s").style.display = "block";
      previousArray.splice(0,1 ,"Comment1s");
      document.getElementById("correct").style.display = "none";
    }
    //Comments
    if (exercisesId_array.includes("cmt01")){
      remove();
      document.getElementById("Comment2s").style.display = "block";
      previousArray.splice(0,1 ,"Comment2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cmt02")){
      remove();
      document.getElementById("Comment3s").style.display = "block";
      previousArray.splice(0,1 ,"Comment3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cmt03")){
      remove();
      document.getElementById("Comment4s").style.display = "block";
      previousArray.splice(0,1 ,"Comment4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cmt04")){
      remove();
      document.getElementById("Comment5s").style.display = "block";
      previousArray.splice(0,1 ,"Comment5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cmt05")){
      remove();
      document.getElementById("CSS1s").style.display = "block";
      previousArray.splice(0,1 ,"CSS1s");
      document.getElementById("correct").style.display = "none";
    }
    //CSSs
    if (exercisesId_array.includes("anscss1")){
      remove();
      document.getElementById("CSS2s").style.display = "block";
      previousArray.splice(0,1 ,"CSS2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anscss2")){
      remove();
      document.getElementById("CSS3s").style.display = "block";
      previousArray.splice(0,1 ,"CSS3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anscss3")){
      remove();
      document.getElementById("CSS4s").style.display = "block";
      previousArray.splice(0,1 ,"CSS4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anscss4")){
      remove();
      document.getElementById("CSS5s").style.display = "block";
      previousArray.splice(0,1 ,"CSS5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anscss5")){
      remove();
      document.getElementById("Link1s").style.display = "block";
      previousArray.splice(0,1 ,"Link1s");
      document.getElementById("correct").style.display = "none";
    }
    //Links
    if (exercisesId_array.includes("anslinks1")){
      remove();
      document.getElementById("Link2s").style.display = "block";
      previousArray.splice(0,1 ,"Link2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anslinks2")){
      remove();
      document.getElementById("Link3s").style.display = "block";
      previousArray.splice(0,1 ,"Link3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anslinks3")){
      remove();
      document.getElementById("Link4s").style.display = "block";
      previousArray.splice(0,1 ,"Link4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anslinks4")){
      remove();
      document.getElementById("Link5s").style.display = "block";
      previousArray.splice(0,1 ,"Link5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("anslinks5")){
      remove();
      document.getElementById("Image1s").style.display = "block";
      previousArray.splice(0,1 ,"Image1s");
      document.getElementById("correct").style.display = "none";
    }
    //Images
    if (exercisesId_array.includes("ansimage1")){
      remove();
      document.getElementById("Image2s").style.display = "block";
      previousArray.splice(0,1 ,"Image2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ansimage2")){
      remove();
      document.getElementById("Image3s").style.display = "block";
      previousArray.splice(0,1 ,"Image3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ansimage3")){
      remove();
      document.getElementById("Image4s").style.display = "block";
      previousArray.splice(0,1 ,"Image4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ansimage4")){
      remove();
      document.getElementById("Image5s").style.display = "block";
      previousArray.splice(0,1 ,"Image5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ansimage5")){
      remove();
      document.getElementById("Table1s").style.display = "block";
      previousArray.splice(0,1 ,"Table1s");
      document.getElementById("correct").style.display = "none";
    }
    //Tables
    if (exercisesId_array.includes("tin1")){
      remove();
      document.getElementById("Table2s").style.display = "block";
      previousArray.splice(0,1 ,"Table2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("tin2")){
      remove();
      document.getElementById("Table3s").style.display = "block";
      previousArray.splice(0,1 ,"Table3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("tin3")){
      remove();
      document.getElementById("Table4s").style.display = "block";
      previousArray.splice(0,1 ,"Table4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("tin4")){
      remove();
      document.getElementById("Table5s").style.display = "block";
      previousArray.splice(0,1 ,"Table5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("tin5")){
      remove();
      document.getElementById("List1s").style.display = "block";
      previousArray.splice(0,1 ,"List1s");
      document.getElementById("correct").style.display = "none";
    }
    //Lists
    if (exercisesId_array.includes("lin1")){
      remove();
      document.getElementById("List2s").style.display = "block";
      previousArray.splice(0,1 ,"List2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("lin2")){
      remove();
      document.getElementById("List3s").style.display = "block";
      previousArray.splice(0,1 ,"List3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("lin3")){
      remove();
      document.getElementById("List4s").style.display = "block";
      previousArray.splice(0,1 ,"List4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("lin4")){
      remove();
      document.getElementById("List5s").style.display = "block";
      previousArray.splice(0,1 ,"List5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("lin5")){
      remove();
      document.getElementById("Classes1s").style.display = "block";
      previousArray.splice(0,1 ,"Classes1s");
      document.getElementById("correct").style.display = "none";
    }
    //Classess
    if (exercisesId_array.includes("cin1")){
      remove();
      document.getElementById("Classes2s").style.display = "block";
      previousArray.splice(0,1 ,"Classes2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cin2")){
      remove();
      document.getElementById("Classes3s").style.display = "block";
      previousArray.splice(0,1 ,"Classes3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cin3")){
      remove();
      document.getElementById("Classes4s").style.display = "block";
      previousArray.splice(0,1 ,"Classes4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cin4")){
      remove();
      document.getElementById("Classes5s").style.display = "block";
      previousArray.splice(0,1 ,"Classes5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("cin5")){
      remove();
      document.getElementById("Id1s").style.display = "block";
      previousArray.splice(0,1 ,"Id1s");
      document.getElementById("correct").style.display = "none";
    }
    //Ids
    if (exercisesId_array.includes("ver3")){
      remove();
      document.getElementById("Id2s").style.display = "block";
      previousArray.splice(0,1 ,"Id2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver4")){
      remove();
      document.getElementById("Id3s").style.display = "block";
      previousArray.splice(0,1 ,"Id3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver5")){
      remove();
      document.getElementById("Id4s").style.display = "block";
      previousArray.splice(0,1 ,"Id4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver6")){
      remove();
      document.getElementById("Id5s").style.display = "block";
      previousArray.splice(0,1 ,"Id5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver7")){
      remove();
      document.getElementById("Iframe1s").style.display = "block";
      previousArray.splice(0,1 ,"Iframe1s");
      document.getElementById("correct").style.display = "none";
    }
    //Iframes
    if (exercisesId_array.includes("rhy4")){
      remove();
      document.getElementById("Iframe2s").style.display = "block";
      previousArray.splice(0,1 ,"Iframe2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy5")){
      remove();
      document.getElementById("Iframe3s").style.display = "block";
      previousArray.splice(0,1 ,"Iframe3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy6")){
      remove();
      document.getElementById("Iframe4s").style.display = "block";
      previousArray.splice(0,1 ,"Iframe4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy7")){
      remove();
      document.getElementById("Iframe5s").style.display = "block";
      previousArray.splice(0,1 ,"Iframe5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy8")){
      remove();
      document.getElementById("Script1s").style.display = "block";
      previousArray.splice(0,1 ,"Script1s");
      document.getElementById("correct").style.display = "none";
    }
    //Scripts
    if (exercisesId_array.includes("ver8")){
      remove();
      document.getElementById("Script2s").style.display = "block";
      previousArray.splice(0,1 ,"Script2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ver9")){
      remove();
      document.getElementById("Script3s").style.display = "block";
      previousArray.splice(0,1 ,"Script3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy1")){
      remove();
      document.getElementById("Script4s").style.display = "block";
      previousArray.splice(0,1 ,"Script4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy2")){
      remove();
      document.getElementById("Script5s").style.display = "block";
      previousArray.splice(0,1 ,"Script5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("rhy3")){
      remove();
      document.getElementById("Computercode1s").style.display = "block";
      previousArray.splice(0,1 ,"Computercode1s");
      document.getElementById("correct").style.display = "none";
    }
    //Computercodes
    if (exercisesId_array.includes("ccin1")){
      remove();
      document.getElementById("Computercode2s").style.display = "block";
      previousArray.splice(0,1 ,"Computercode2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ccin2")){
      remove();
      document.getElementById("Computercode3s").style.display = "block";
      previousArray.splice(0,1 ,"Computercode3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ccin3")){
      remove();
      document.getElementById("Computercode4s").style.display = "block";
      previousArray.splice(0,1 ,"Computercode4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ccin4")){
      remove();
      document.getElementById("Computercode5s").style.display = "block";
      previousArray.splice(0,1 ,"Computercode5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ccin5")){
      remove();
      document.getElementById("Form1s").style.display = "block";
      previousArray.splice(0,1 ,"Form1s");
      document.getElementById("correct").style.display = "none";
    }
    //Forms
    if (exercisesId_array.includes("Fform1")){
      remove();
      document.getElementById("Form2s").style.display = "block";
      previousArray.splice(0,1 ,"Form2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("Fform2")){
      remove();
      document.getElementById("Form3s").style.display = "block";
      previousArray.splice(0,1 ,"Form3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("Fform3")){
      remove();
      document.getElementById("Form4s").style.display = "block";
      previousArray.splice(0,1 ,"Form4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("Fform4")){
      remove();
      document.getElementById("Form5s").style.display = "block";
      previousArray.splice(0,1 ,"Form5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("Fform5")){
      remove();
      document.getElementById("FormAttri1s").style.display = "block";
      previousArray.splice(0,1 ,"FormAttri1s");
      document.getElementById("correct").style.display = "none";
    }
    //FormAttris
    if (exercisesId_array.includes("FAttr1")){
      remove();
      document.getElementById("FormAttri2s").style.display = "block";
      previousArray.splice(0,1 ,"FormAttri2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FAttr2")){
      remove();
      document.getElementById("FormAttri3s").style.display = "block";
      previousArray.splice(0,1 ,"FormAttri3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FAttr3")){
      remove();
      document.getElementById("FormAttri4s").style.display = "block";
      previousArray.splice(0,1 ,"FormAttri4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FAttr4")){
      remove();
      document.getElementById("FormAttri5s").style.display = "block";
      previousArray.splice(0,1 ,"FormAttri5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FAttr5")){
      remove();
      document.getElementById("FormElem1s").style.display = "block";
      previousArray.splice(0,1 ,"FormElem1s");
      document.getElementById("correct").style.display = "none";
    }
    //FormElems
    if (exercisesId_array.includes("FEq1")){
      remove();
      document.getElementById("FormElem2s").style.display = "block";
      previousArray.splice(0,1 ,"FormElem2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FEq2")){
      remove();
      document.getElementById("FormElem3s").style.display = "block";
      previousArray.splice(0,1 ,"FormElem3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FEq3")){
      remove();
      document.getElementById("FormElem4s").style.display = "block";
      previousArray.splice(0,1 ,"FormElem4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FEq4")){
      remove();
      document.getElementById("FormElem5s").style.display = "block";
      previousArray.splice(0,1 ,"FormElem5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("FEq5")){
      remove();
      document.getElementById("InputType1s").style.display = "block";
      previousArray.splice(0,1 ,"InputType1s");
      document.getElementById("correct").style.display = "none";
    }
    //InputTypes
    if (exercisesId_array.includes("ITq1")){
      remove();
      document.getElementById("InputType2s").style.display = "block";
      previousArray.splice(0,1 ,"InputType2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ITq2")){
      remove();
      document.getElementById("InputType3s").style.display = "block";
      previousArray.splice(0,1 ,"InputType3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ITq3")){
      remove();
      document.getElementById("InputType4s").style.display = "block";
      previousArray.splice(0,1 ,"InputType4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ITq4")){
      remove();
      document.getElementById("InputType5s").style.display = "block";
      previousArray.splice(0,1 ,"InputType5s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("ITq5")){
      remove();
      document.getElementById("InputAttri1s").style.display = "block";
      previousArray.splice(0,1 ,"InputAttri1s");
      document.getElementById("correct").style.display = "none";
    }
    //InpuAttris
    if (exercisesId_array.includes("IAq1")){
      remove();
      document.getElementById("InputAttri2s").style.display = "block";
      previousArray.splice(0,1 ,"InputAttri2s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("IAq2")){
      remove();
      document.getElementById("InputAttri3s").style.display = "block";
      previousArray.splice(0,1 ,"InputAttri3s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("IAq3")){
      remove();
      document.getElementById("InputAttri4s").style.display = "block";
      previousArray.splice(0,1 ,"InputAttri4s");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("IAq4")){
      remove();
      document.getElementById("InputAttri5s").style.display = "block";
      previousArray.splice(0,1 ,"InputAttris");
      document.getElementById("correct").style.display = "none";
    }
    if (exercisesId_array.includes("IAq5")){
      remove();
      document.getElementById("Attribute1s").style.display = "block";
      previousArray.splice(0,1 ,"Attribute1s");
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

