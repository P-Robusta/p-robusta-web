import emailjs from 'emailjs-com';

const SendEmail = (data, template) => {
  return emailjs.sendForm(
    'pnv_email_contact',
    template,
    data,
    'user_YO5xArGi32BdsNeUGC882'
  );
};

export default SendEmail;
