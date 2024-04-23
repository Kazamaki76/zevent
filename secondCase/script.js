const form = document.getElementById("complaint-form");
const nameInput = document.getElementById("name");
const emailOrPhoneInput = document.getElementById("emailOrPhone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

  // Validate
  const name = nameInput.value.trim();
  const emailOrPhone = emailOrPhoneInput.value.trim();
  const message = messageInput.value.trim();

  if (!name) {
    alert("Please enter Name-Surname");
    return;
  }

  if (!emailOrPhone) {
    alert("Please enter email or phone");
    return;
  }
  const emailOrPhoneRegex =
    /^(?:\b\d{10}\b|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)$/;
  if (!emailOrPhoneRegex.test(emailOrPhone)) {
    alert("Please enter a valid email address or a 10-digit phone number.");
    return;
  }

  if (!message) {
    alert("Please enter message ");
    return;
  }

  // แสดง alert และ console log ข้อมูลที่กรอก
  const formData = {
    name,
    emailOrPhone,
    message,
  };

  alert(`Message: ${message}`);
  console.log(JSON.stringify(formData, null, 2));
});
