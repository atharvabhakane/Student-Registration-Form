document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const cgpa = document.getElementById("cgpa").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const age = document.getElementById("age").value;
    const futurePlans = document.getElementById("futurePlans").value;
  
    const newFormData = [
      [name, cgpa, year, semester, contact, email, address, age, futurePlans]
    ];
  
    // Generate new Excel sheet with form data
    const formData = [
      ["Name", "CGPA", "Year", "Semester", "Contact", "Email", "Address", "Age", "Future Plans"],
      ...newFormData
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(formData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");
    XLSX.writeFile(workbook, "student_data.xlsx");
  
    // Reset the form
    document.getElementById("studentForm").reset();
  });
  