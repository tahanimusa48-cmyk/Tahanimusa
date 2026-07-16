function changeToEnglish() {

    document.getElementById("title").innerHTML =
    "Al Shifa Clinic";

    document.getElementById("subtitle").innerHTML =
    "Appointment Booking System";

    document.getElementById("welcomeTitle").innerHTML =
    "Welcome to Al Shifa Clinic";

    document.getElementById("welcomeText").innerHTML =
    "We provide the best medical services with modern equipment.";

    document.body.dir = "ltr";
}

function changeToArabic() {

    document.getElementById("title").innerHTML =
    "عيادة الشفاء";

    document.getElementById("subtitle").innerHTML =
    "نظام حجز المواعيد";

    document.getElementById("welcomeTitle").innerHTML =
    "مرحباً بكم في عيادة الشفاء";

    document.getElementById("welcomeText").innerHTML =
    "نقدم لكم أفضل الخدمات الطبية بأحدث الأجهزة.";

    document.body.dir = "rtl";
}
function changeToEnglishDoctors() {

    document.getElementById("doctorPageTitle").innerHTML =
    "Doctors";

    document.getElementById("doctor1").innerHTML =
    "Dr. Ahmed Mohamed - Dentist";

    document.getElementById("doctor1Desc").innerHTML =
    "Specialist in dental treatment.";

    document.getElementById("doctor2").innerHTML =
    "Dr. Sara Ali - Pediatrician";

    document.getElementById("doctor2Desc").innerHTML =
    "Specialist in children's medicine.";

    document.getElementById("doctor3").innerHTML =
    "Dr. Mohamed Hassan - Internal Medicine";

    document.getElementById("doctor3Desc").innerHTML =
    "Specialist in internal diseases.";

    document.body.dir = "ltr";
}


function changeToArabicDoctors() {

    document.getElementById("doctorPageTitle").innerHTML =
    "الأطباء";

    document.getElementById("doctor1").innerHTML =
    "د. أحمد محمد - طبيب أسنان";

    document.getElementById("doctor1Desc").innerHTML =
    "متخصص في علاج الأسنان.";

    document.getElementById("doctor2").innerHTML =
    "د. سارة علي - طبيبة أطفال";

    document.getElementById("doctor2Desc").innerHTML =
    "متخصصة في طب الأطفال.";

    document.getElementById("doctor3").innerHTML =
    "د. محمد حسن - طبيب باطنية";

    document.getElementById("doctor3Desc").innerHTML =
    "متخصص في الأمراض الباطنية.";

    document.body.dir = "rtl";
}
function changeToEnglishBooking() {

    document.getElementById("bookingPageTitle").innerHTML =
    "Book Appointment";

    document.getElementById("formTitle").innerHTML =
    "Booking Form";

    document.getElementById("nameLabel").innerHTML =
    "Full Name";

    document.getElementById("phoneLabel").innerHTML =
    "Phone Number";

    document.getElementById("doctorLabel").innerHTML =
    "Select Doctor";

    document.getElementById("doctorOption").innerHTML =
    "Choose Doctor";

    document.getElementById("dateLabel").innerHTML =
    "Booking Date";

    document.getElementById("bookBtn").innerHTML =
    "Book";

    document.body.dir = "ltr";
}

function changeToArabicBooking() {

    document.getElementById("bookingPageTitle").innerHTML =
    "حجز موعد";

    document.getElementById("formTitle").innerHTML =
    "نموذج الحجز";

    document.getElementById("nameLabel").innerHTML =
    "الاسم الكامل";

    document.getElementById("phoneLabel").innerHTML =
    "رقم الهاتف";

    document.getElementById("doctorLabel").innerHTML =
    "اختر الطبيب";

    document.getElementById("doctorOption").innerHTML =
    "اختر الطبيب";

    document.getElementById("dateLabel").innerHTML =
    "تاريخ الحجز";

    document.getElementById("bookBtn").innerHTML =
    "حجز";

    document.body.dir = "rtl";
}
function changeToEnglishContact() {

    document.getElementById("contactPageTitle").innerHTML =
    "Contact Us";

    document.getElementById("contactTitle").innerHTML =
    "Send a Message";

    document.getElementById("contactNameLabel").innerHTML =
    "Full Name";

    document.getElementById("emailLabel").innerHTML =
    "Email Address";

    document.getElementById("messageLabel").innerHTML =
    "Message";

    document.getElementById("sendBtn").innerHTML =
    "Send";

    document.body.dir = "ltr";
}

function changeToArabicContact() {

    document.getElementById("contactPageTitle").innerHTML =
    "تواصل معنا";

    document.getElementById("contactTitle").innerHTML =
    "أرسل رسالة";

    document.getElementById("contactNameLabel").innerHTML =
    "الاسم الكامل";

    document.getElementById("emailLabel").innerHTML =
    "البريد الإلكتروني";

    document.getElementById("messageLabel").innerHTML =
    "الرسالة";

    document.getElementById("sendBtn").innerHTML =
    "إرسال";

    document.body.dir = "rtl";
}
function changeToEnglishLogin(){

document.documentElement.lang="en";
document.documentElement.dir="ltr";

document.getElementById("clinicTitle").innerHTML="Al-Shifa Clinic";
document.getElementById("loginTitle").innerHTML="Login";

document.getElementById("emailLabel").innerHTML="Email";
document.getElementById("passwordLabel").innerHTML="Password";

document.getElementById("email").placeholder="Enter your email";
document.getElementById("password").placeholder="Enter your password";

document.getElementById("loginBtn").innerHTML="Login";

document.getElementById("registerText").innerHTML='Don\'t have an account? <a href="register.html">Create Account</a>';

}

function changeToArabicLogin(){

document.documentElement.lang="ar";
document.documentElement.dir="rtl";

document.getElementById("clinicTitle").innerHTML="عيادة الشفاء";
document.getElementById("loginTitle").innerHTML="تسجيل الدخول";

document.getElementById("emailLabel").innerHTML="البريد الإلكتروني";
document.getElementById("passwordLabel").innerHTML="كلمة المرور";

document.getElementById("email").placeholder="أدخل البريد الإلكتروني";
document.getElementById("password").placeholder="أدخل كلمة المرور";

document.getElementById("loginBtn").innerHTML="تسجيل الدخول";

document.getElementById("registerText").innerHTML='ليس لديك حساب؟ <a href="register.html">إنشاء حساب</a>';

}