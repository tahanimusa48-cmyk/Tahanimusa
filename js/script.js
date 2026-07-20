function changeToEnglishLogin(){
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.getElementById("clinicTitle").innerHTML = "Al-Shifa Clinic";
    document.getElementById("loginTitle").innerHTML = "Login";
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("passwordLabel").innerHTML = "Password";
    document.getElementById("email").placeholder = "Enter your email";
    document.getElementById("password").placeholder = "Enter your password";
    document.getElementById("loginBtn").innerHTML = "Login";
    document.getElementById("registerText").innerHTML = 'Don\'t have an account? <a href="register.html">Create Account</a>';
}

// ترجمة صفحة تسجيل الدخول للعربية
function changeToArabicLogin(){
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.getElementById("clinicTitle").innerHTML = "عيادة الشفاء";
    document.getElementById("loginTitle").innerHTML = "تسجيل الدخول";
    document.getElementById("emailLabel").innerHTML = "البريد الإلكتروني";
    document.getElementById("passwordLabel").innerHTML = "كلمة المرور";
    document.getElementById("email").placeholder = "أدخل البريد الإلكتروني";
    document.getElementById("password").placeholder = "أدخل كلمة المرور";
    document.getElementById("loginBtn").innerHTML = "تسجيل الدخول";
    document.getElementById("registerText").innerHTML = 'ليس لديك حساب؟ <a href="register.html">إنشاء حساب</a>';
}

// دالة تسجيل الدخول والانتقال إلى الصفحة الرئيسية
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "" || password == ""){
        alert("من فضلك ادخل البريد وكلمة المرور");
        return;
    }

    alert("تم تسجيل الدخول بنجاح");
    window.location.href = 'home.html'; 
}
// تغيير لغة الصفحة الرئيسية إلى الإنجليزية
function changeToEnglish() {
    document.getElementById("title").innerHTML = "Al Shifa Clinic";
    document.getElementById("subtitle").innerHTML = "Appointment Booking System";
    document.getElementById("welcomeTitle").innerHTML = "Welcome to Al Shifa Clinic";
    document.getElementById("welcomeText").innerHTML = "We provide the best medical services with modern equipment.";
    document.body.dir = "ltr";
}

// تغيير لغة الصفحة الرئيسية إلى العربية
function changeToArabic() {
    document.getElementById("title").innerHTML = "عيادة الشفاء";
    document.getElementById("subtitle").innerHTML = "نظام حجز المواعيد";
    document.getElementById("welcomeTitle").innerHTML = "مرحباً بكم في عيادة الشفاء";
    document.getElementById("welcomeText").innerHTML = "نقدم لكم أفضل الخدمات الطبية بأحدث الأجهزة.";
    document.body.dir = "rtl";
}
// تغيير لغة صفحة الأطباء إلى الإنجليزية
function changeToEnglishDoctors() {
    document.getElementById("doctorPageTitle").innerHTML = "Doctors";
    document.getElementById("doctor1").innerHTML = "Dr. Ahmed Mohamed - Dentist";
    document.getElementById("doctor1Desc").innerHTML = "Specialist in dental treatment.";
    document.getElementById("doctor2").innerHTML = "Dr. Sara Ali - Pediatrician";
    document.getElementById("doctor2Desc").innerHTML = "Specialist in children's medicine.";
    document.getElementById("doctor3").innerHTML = "Dr. Mohamed Hassan - Internal Medicine";
    document.getElementById("doctor3Desc").innerHTML = "Specialist in internal diseases.";
    document.body.dir = "ltr";
}

// تغيير لغة صفحة الأطباء إلى العربية
function changeToArabicDoctors() {
    document.getElementById("doctorPageTitle").innerHTML = "الأطباء";
    document.getElementById("doctor1").innerHTML = "د. أحمد محمد - طبيب أسنان";
    document.getElementById("doctor1Desc").innerHTML = "متخصص في علاج الأسنان.";
    document.getElementById("doctor2").innerHTML = "د. سارة علي - طبيبة أطفال";
    document.getElementById("doctor2Desc").innerHTML = "متخصصة في طب الأطفال.";
    document.getElementById("doctor3").innerHTML = "د. محمد حسن - طبيب باطنية";
    document.getElementById("doctor3Desc").innerHTML = "متخصص في الأمراض الباطنية.";
    document.body.dir = "rtl";
}
// تغيير لغة صفحة الحجز إلى الإنجليزية
function changeToEnglishBooking() {
    document.getElementById("bookingPageTitle").innerHTML = "Book Appointment";
    document.getElementById("formTitle").innerHTML = "Booking Form";
    document.getElementById("nameLabel").innerHTML = "Full Name";
    document.getElementById("phoneLabel").innerHTML = "Phone Number";
    document.getElementById("doctorLabel").innerHTML = "Select Doctor";
    document.getElementById("doctorOption").innerHTML = "Choose Doctor";
    document.getElementById("dateLabel").innerHTML = "Booking Date";
    document.getElementById("bookBtn").innerHTML = "Book";
    document.body.dir = "ltr";
}

// تغيير لغة صفحة الحجز إلى العربية
function changeToArabicBooking() {
    document.getElementById("bookingPageTitle").innerHTML = "حجز موعد";
    document.getElementById("formTitle").innerHTML = "نموذج الحجز";
    document.getElementById("nameLabel").innerHTML = "الاسم الكامل";
    document.getElementById("phoneLabel").innerHTML = "رقم الهاتف";
    document.getElementById("doctorLabel").innerHTML = "اختر الطبيب";
    document.getElementById("doctorOption").innerHTML = "اختر الطبيب";
    document.getElementById("dateLabel").innerHTML = "تاريخ الحجز";
    document.getElementById("bookBtn").innerHTML = "حجز";
    document.body.dir = "rtl";
}
// تغيير لغة صفحة اتصل بنا إلى الإنجليزية
function changeToEnglishContact() {
    document.getElementById("contactPageTitle").innerHTML = "Contact Us";
    document.getElementById("contactTitle").innerHTML = "Send a Message";
    document.getElementById("contactNameLabel").innerHTML = "Full Name";
    document.getElementById("emailLabel").innerHTML = "Email Address";
    document.getElementById("messageLabel").innerHTML = "Message";
    document.getElementById("sendBtn").innerHTML = "Send";
    document.body.dir = "ltr";
}

// تغيير لغة صفحة اتصل بنا إلى العربية
function changeToArabicContact() {
    document.getElementById("contactPageTitle").innerHTML = "تواصل معنا";
    document.getElementById("contactTitle").innerHTML = "أرسل رسالة";
    document.getElementById("contactNameLabel").innerHTML = "الاسم الكامل";
    document.getElementById("emailLabel").innerHTML = "البريد الإلكتروني";
    document.getElementById("messageLabel").innerHTML = "الرسالة";
    document.getElementById("sendBtn").innerHTML = "إرسال";
    document.body.dir = "rtl";
}
// تغيير لغة صفحة إنشاء الحساب إلى الإنجليزية
function changeToEnglishRegister() {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.getElementById("registerClinicTitle").innerHTML = "Al-Shifa Clinic";
    document.getElementById("registerPageTitle").innerHTML = "Create New Account";
    document.getElementById("regNameLabel").innerHTML = "Full Name";
    document.getElementById("regName").placeholder = "Enter your full name";
    document.getElementById("regUserLabel").innerHTML = "Username";
    document.getElementById("regUser").placeholder = "Enter username";
    document.getElementById("regEmailLabel").innerHTML = "Email Address";
    document.getElementById("regEmail").placeholder = "Enter your email";
    document.getElementById("regPhoneLabel").innerHTML = "Phone Number";
    document.getElementById("regPhone").placeholder = "Enter your phone number";
    document.getElementById("regPassLabel").innerHTML = "Password";
    document.getElementById("regPass").placeholder = "Enter password";
    document.getElementById("regConfirmLabel").innerHTML = "Confirm Password";
    document.getElementById("regConfirm").placeholder = "Retype password";
    document.getElementById("registerBtn").innerHTML = "Create Account";
    document.getElementById("hasAccountText").innerHTML = 'Already have an account? <a href="index.html" id="loginLinkText">Login</a>';
}

// تغيير لغة صفحة إنشاء الحساب إلى العربية
function changeToArabicRegister() {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    document.getElementById("registerClinicTitle").innerHTML = "عيادة الشفاء";
    document.getElementById("registerPageTitle").innerHTML = "إنشاء حساب جديد";
    document.getElementById("regNameLabel").innerHTML = "الاسم الكامل";
    document.getElementById("regName").placeholder = "أدخل اسمك الكامل";
    document.getElementById("regUserLabel").innerHTML = "اسم المستخدم";
    document.getElementById("regUser").placeholder = "أدخل اسم المستخدم";
    document.getElementById("regEmailLabel").innerHTML = "البريد الإلكتروني";
    document.getElementById("regEmail").placeholder = "أدخل البريد الإلكتروني";
    document.getElementById("regPhoneLabel").innerHTML = "رقم الهاتف";
    document.getElementById("regPhone").placeholder = "أدخل رقم الهاتف";
    document.getElementById("regPassLabel").innerHTML = "كلمة المرور";
    document.getElementById("regPass").placeholder = "أدخل كلمة المرور";
    document.getElementById("regConfirmLabel").innerHTML = "تأكيد كلمة المرور";
    document.getElementById("regConfirm").placeholder = "أعِد كتابة كلمة المرور";
    document.getElementById("registerBtn").innerHTML = "إنشاء حساب";
    document.getElementById("hasAccountText").innerHTML = 'لديك حساب بالفعل؟ <a href="index.html" id="loginLinkText">تسجيل الدخول</a>';
}

// دالة معالجة إنشاء الحساب والتوجيه لصفحة الدخول
function handleRegister() {
    let pass = document.getElementById("regPass").value;
    let confirmPass = document.getElementById("regConfirm").value;

    if (pass !== confirmPass) {
        alert("كلمتا المرور غير متطابقتين!");
        return;
    }

    alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
    window.location.href = 'index.html'; // التوجيه لصفحة تسجيل الدخول
}// تغيير لغة صفحة الرئيسية إلى الإنجليزية
function changeToEnglishHome() {
    // تحديث الهيدر والقائمة
    if(document.getElementById("homeClinicTitle")) {
        document.getElementById("homeClinicTitle").innerHTML = "Al-Shifa Clinic";
    }
    
    // إذا كنتِ ترغبين في تغيير نصوص القائمة العلوية أيضاً في هذه الصفحة:
    let navLinks = document.querySelectorAll("nav a");
    if(navLinks.length >= 4) {
        navLinks[0].innerHTML = "Home";
        navLinks[1].innerHTML = "Doctors";
        navLinks[2].innerHTML = "Book Appointment";
        navLinks[3].innerHTML = "Contact Us";
    }

    // تحديث المحتوى الداخلي لصفحة الهوم (عدلي المعرفات IDs بناءً على ما لديكِ في صفحة الهوم)
    if(document.getElementById("welcomeTitle")) {
        document.getElementById("welcomeTitle").innerHTML = "Welcome to Al-Shifa Clinic";
    }
    if(document.getElementById("welcomeText")) {
        document.getElementById("welcomeText").innerHTML = "We provide the best healthcare services with top specialized doctors.";
    }
    
    document.body.dir = "ltr";
}

// تغيير لغة صفحة الرئيسية إلى العربية
function changeToArabicHome() {
    if(document.getElementById("homeClinicTitle")) {
        document.getElementById("homeClinicTitle").innerHTML = "عيادة الشفاء";
    }
    
    let navLinks = document.querySelectorAll("nav a");
    if(navLinks.length >= 4) {
        navLinks[0].innerHTML = "الرئيسية";
        navLinks[1].innerHTML = "الأطباء";
        navLinks[2].innerHTML = "حجز موعد";
        navLinks[3].innerHTML = "تواصل معنا";
    }

    if(document.getElementById("welcomeTitle")) {
        document.getElementById("welcomeTitle").innerHTML = "مرحباً بكم في عيادة الشفاء";
    }
    if(document.getElementById("welcomeText")) {
        document.getElementById("welcomeText").innerHTML = "نحن نقدم أفضل خدمات الرعاية الصحية مع نخبة من الأطباء المتخصصين.";
    }

    document.body.dir = "rtl";
}
// دالة معالجة الحجز وتفريغ الحقول فوراً
function handleBookingSubmit() {
    // 1. إظهار رسالة النجاح للعميل
    alert('تم استلام طلب الحجز بنجاح!');
    

    document.getElementById("mainBookingForm").reset();
}
// دالة التحقق من صحة البريد الإلكتروني وتوجيه المستخدم للرئيسية
function handleLogin() {
    let emailInput = document.getElementById("loginEmail").value.trim();
    let passwordInput = document.getElementById("loginPassword").value;

    // الفحص الذكي لصيغة الإيميل (وجود @ ونقطة وامتداد)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // إذا كان الإيميل غير صحيح ارفع تنبيه واوقف الدالة
    if (!emailPattern.test(emailInput)) {
        alert("عذراً، يرجى كتابة البريد الإلكتروني بصيغة صحيحة (مثال: name@example.com)");
        return; 
    }

    // إذا كانت كلمة المرور أقل من 6 أحرف ارفع تنبيه واوقف الدالة
    if (passwordInput.length < 6) {
        alert("كلمة المرور ضعيفة! يجب أن تكون من 6 أحرف أو أكثر.");
        return;
    }

    // إذا كان كل شيء صحيح، وجّهه لصفحة الهوم فوراً
    alert("مرحباً بك! تم تسجيل الدخول بنجاح.");
    window.location.href = "home.html"; 
}

