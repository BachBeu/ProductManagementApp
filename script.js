var studentList = [];
function addStudent() {
    var stuId = document.getElementById("studentId").value;
    var stuName = document.getElementById("studentName").value;
    var stuEmail = document.getElementById("studentEmail").value;
    var stuPhone = document.getElementById("studentPhone").value;
    var stuAddress = document.getElementById("studentAddress").value;
    var fTU = document.getElementById("fTL").value;
    var student = {
        "studentId" : stuId,
        "studentName" : stuName,
        "studentEmail" : stuEmail,
        "studentPhone" : stuPhone,
        "studentAddress" : stuAddress,
        "fTL" : fTU,
    };
    /*    validateId(stuId);
        validateName(stuName);
        validateEmail(stuEmail);
        validatePhone(stuPhone);*/
    if(curIndex == -1){//chỉ số hiện tại
        add(student);
    }else{
        studentList[curIndex] = student;
        curIndex = -1;
        document.getElementById("btnAdd").innerHTML = "Add Student";
        displayAll();
    }
}
function displayAll() {
    var detailSL = document.getElementById("detailList");
    detailSL.innerHTML = "";
    for (let i = 0; i < studentList.length; i++){
        var student = studentList[i];
        detailSL.innerHTML += "<tr>"+
            "<td>"+(i+1)+"</td>"+
            "<td>"+student.studentId+"</td>"+
            "<td>"+student.studentName+"</td>"+
            "<td>"+student.studentEmail+"</td>"+
            "<td>"+student.studentPhone+"</td>"+
            "<td>"+student.studentAddress+"</td>"+
            "<td><img src='Images/' +student.fTL+></td>"+
            "<td><center><button  onclick='edit("+i+")'>Edit</button></center></td>"+
            "<td><center><button  onclick=' onStudentDelete("+i+")'>Delete</button></center></td>"+
            "</tr>"
    }
}
function add(student) {
    studentList.push(student);
    console.log(studentList.length);
    var detailSL = document.getElementById("detailList");
    detailSL.innerHTML += "<tr>"+
        "<td>"+studentList.length+"</td>"+
        "<td>"+student.studentId+"</td>"+
        "<td>"+student.studentName+"</td>"+
        "<td>"+student.studentEmail+"</td>"+
        "<td>"+student.studentPhone+"</td>"+
        "<td>"+student.studentAddress+"</td>"+
        "<td>"+student.fTL+"</td>"+
        "<td><center><button  onclick='edit("+(studentList.length - 1)+")'>Edit</button></center></td>"+
        "<td><center><button  onclick='onStudentDelete()'>Delete</button>   </center></td>"+
        "</tr>"
}

var curIndex = -1;
function edit(index) {
    curIndex = index;
    var student = studentList[index];
    document.getElementById("studentId").value = student.studentId;
    document.getElementById("studentName").value = student.studentName;
    document.getElementById("studentEmail").value = student.studentEmail;
    document.getElementById("studentPhone").value = student.studentPhone;
    document.getElementById("studentAddress").value = student.studentAddress;
    document.getElementById("fTL").value = student.fTL;
    document.getElementById("btnAdd").innerHTML = "Update Student";
    displayAll(index);
}
function onStudentDelete(index) {
    if (confirm("Bạn chắc chắn muốn xóa ??")){
        studentDelete();
        displayAll();
    }
}
function studentDelete(index) {
    studentList.splice(index, 1);
}