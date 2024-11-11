// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'SEU_EMAIL@gmail.com', // seu email
      pass: 'SUA_SENHA' // sua senha de app
    }
  });

  const mailOptions = {
    from: email,
    to: 'vitorluizsantosmougenot@gmail.com',
    subject: `Contato: ${subject}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-mail enviado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar e-mail');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
