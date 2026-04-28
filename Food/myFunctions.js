function toggleDetails(id) {
    $("#" + id).toggle();
}

function showForm() {
    $("#formDiv").show();
}

function validateForm() {

    let name = $("#name").val();
    let account = $("#account").val();
    let phone = $("#phone").val();
    let date = $("#date").val();

    let nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    let accountRegex = /^[0-9]{6}$/;
    let phoneRegex = /^09[0-9]{8}$/;

    // الاسم (إجباري)
    if (name === "" || !nameRegex.test(name)) {
        alert("الاسم يجب أن يكون بالإنكليزي (First Last)");
        return false;
    }

    // رقم الحساب (اختياري لكن إذا انكتب لازم يكون صحيح)
    if (account !== "" && !accountRegex.test(account)) {
        alert("رقم الحساب يجب أن يكون 6 أرقام");
        return false;
    }

    // التاريخ (إجباري)
    if (date === "") {
        alert("يرجى إدخال التاريخ");
        return false;
    }

    // الموبايل (إجباري + MTN أو Syriatel)
    if (phone === "" || !phoneRegex.test(phone)) {
        alert("رقم الهاتف غير صحيح (يجب أن يبدأ بـ 09)");
        return false;
    }

    // الحساب
    let total = 0;

    $(".meal:checked").each(function () {
        total += parseInt($(this).val());
    });

    if (total === 0) {
        alert("يجب اختيار وجبة واحدة على الأقل");
        return false;
    }

    let tax = total * 0.1;
    let final = total - tax;

    alert(
        "المجموع: " + total +
        "\nالضريبة: " + tax +
        "\nالصافي: " + final
    );

    return false;
}