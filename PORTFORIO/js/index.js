window.onload = () => {
  const btn = document.getElementById("btn");

  console.log(btn);
  btn.addEventListener("click", () => {
    const name_val = document.forms.main_form.name.value;
    const mail_val = document.forms.main_form.email.value;
    const message_val = document.forms.main_form.message.value;

    if (!name_val || !mail_val || !message_val) {
      alert("空");
      return;
    }

    axios
      .get(
        "https://maker.ifttt.com/trigger/send_mail/with/key/cI0HnwUk97OF54Tpm5t6ljjn9Z9GcGey48L6MifMI1K",
        {
          params: {
            value1: `${name_val}`,
            value2: `${mail_val}`,
            value3: `${message_val}`
          },
          timeout: 1000,
          responseType: "json",
          crossdomain: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(function(response) {
        // 成功時
        console.log(response);
      })
      .catch(function(error) {
        // エラーが発生した場合
        console.log(error);
        console.log(1234567890);
      })
      .then(function() {
        // 常に実行される
        alert("送信が完了しました。");
        document.forms.main_form.name.value = "";
        document.forms.main_form.email.value = "";
        document.forms.main_form.message.value = "";
      });
  });
};