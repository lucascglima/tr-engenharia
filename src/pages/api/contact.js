export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: {
      user: "contato@trenergiasolar.eco.br",
      pass: "Podersemlimites!",
    },
  });
  const mailData = {
    from: "contato@trenergiasolar.eco.br",
    to: "contato@trenergiasolar.eco.br",
    subject: "Contato recebido - " + req.body.name,
    html: `
      <div>
      <p>
      Nome: <strong>${req.body.name}</strong> <br/>
      E-mail: <strong>${req.body.email}</strong> <br/>
      Telefone (Whatsapp): <strong>${req.body.phoneNumber}</strong> <br/>
      Assunto: <strong>${req.body.subject}</strong> <br/><br/>      Mensagem:<br/>
        ${req.body.message}
      </p>
      </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    // else console.log(info);
  });

  const mailDataClient = {
    from: "contato@trenergiasolar.eco.br",
    to: req.body.email,
    subject: "TR Energia Solar - Recebemos seu contato.",
    html: `
      <div>
      <p>
      Olá  <strong>${req.body.name}</strong>, <br/>
      <p>
        Ficamos felizes em receber seu contato, nosso time entrará em contato com você em breve. <nr/>
        Assunto: <strong>${req.body.subject}</strong> <br/><br/>
        Mensagem:<br/>
        ${req.body.message}
      </p>       
      </p>
      </div>`,
  };

  transporter.sendMail(mailDataClient, function (err, info) {
    if (err) console.log(err);
    // else console.log(info);
  });

  // console.log(req.body);
  res.send("success");
}
