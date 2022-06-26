import PDFDocument from "pdfkit";
import fs from "fs";
import nodemailer from "nodemailer";

const generatePDF = (name, email, course) => {
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4"
  });

  // Helper to move to next line
  function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
      doc.moveDown();
    }
  }

  doc.pipe(fs.createWriteStream("CertificateOfDonation.pdf"));

  doc.rect(0, 0, doc.page.width, doc.page.height).fill("#fff");

  doc.fontSize(10);

  // Margin
  const distanceMargin = 18;

  doc
    .fillAndStroke("#0e8cc3")
    .lineWidth(20)
    .lineJoin("round")
    .rect(
      distanceMargin,
      distanceMargin,
      doc.page.width - distanceMargin * 2,
      doc.page.height - distanceMargin * 2
    )
    .stroke();

  // Header
  const maxWidth = 140;
  const maxHeight = 70;

  doc.image("assets/winners.png", doc.page.width / 2 - maxWidth / 2, 60, {
    fit: [maxWidth, maxHeight],
    align: "center"
  });

  jumpLine(doc, 5);

  doc
    .font("fonts/NotoSansJP-Light.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("Super Course for Awesomes", {
      align: "center"
    });

  jumpLine(doc, 2);

  // Content
  doc
    .font("fonts/NotoSansJP-Regular.otf")
    .fontSize(16)
    .fill("#021c27")
    .text("CERTIFICATE OF COMPLETION", {
      align: "center"
    });

  jumpLine(doc, 1);

  doc
    .font("fonts/NotoSansJP-Light.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("This is to certify that ", {
      align: "center"
    });

  jumpLine(doc, 2);

  doc
    .font("fonts/NotoSansJP-Bold.otf")
    .fontSize(24)
    .fill("#021c27")
    .text(`${name}`, {
      align: "center"
    });

  jumpLine(doc, 1);
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };
  doc
    .font("fonts/NotoSansJP-Light.otf")
    .fontSize(10)
    .fill("#021c27")
    .text(
      // `has successfully completed the ${course} on ${new Date(
      //   Date.now()
      // ).toLocaleDateString()}.`
      `has successfully donated on ${new Date(Date.now()).getDate()} ${
        months[new Date(Date.now()).getMonth()]
      }, ${new Date(Date.now()).getFullYear()}.`,
      {
        align: "center"
      }
    );

  jumpLine(doc, 7);

  doc.lineWidth(1);

  // Signatures
  const lineSize = 154;
  const signatureHeight = 450;

  doc.fillAndStroke("#021c27");
  doc.strokeOpacity(0.2);

  const startLine1 = 208;
  const endLine1 = 198 + lineSize;
  doc
    .moveTo(startLine1, signatureHeight)
    .lineTo(endLine1, signatureHeight)
    .stroke();
  doc.image("assets/ach.jpg", startLine1 + 405, 50, {
    // fit: [100, 100],
    // align: "left",
    height: 250,
    width: 200
  });
  doc.image("assets/sergio1.png", startLine1 + 20, 370, {
    fit: [maxWidth, maxHeight],
    align: "left"
  });
  doc.image("assets/raquel.png", startLine1 + 315, 370, {
    fit: [maxWidth, maxHeight],
    align: "left"
  });

  const startLine2 = endLine1;
  const endLine2 = startLine2 + lineSize;
  // doc
  //   .moveTo(startLine2, signatureHeight)
  //   .lineTo(endLine2, signatureHeight)
  //   .stroke();

  const startLine3 = endLine2;
  const endLine3 = startLine3 + lineSize;
  doc
    .moveTo(startLine3, signatureHeight)
    .lineTo(endLine3, signatureHeight)
    .stroke();

  doc
    .font("fonts/NotoSansJP-Bold.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("Sergio Marquina", startLine1, signatureHeight + 10, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: "center"
    });

  doc
    .font("fonts/NotoSansJP-Light.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("Founder, Full Stack Simplified", startLine1, signatureHeight + 25, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: "center"
    });

  // doc
  //   .font("fonts/NotoSansJP-Bold.otf")
  //   .fontSize(10)
  //   .fill("#021c27")
  //   .text("Student Name", startLine2, signatureHeight + 10, {
  //     columns: 1,
  //     columnGap: 0,
  //     height: 40,
  //     width: lineSize,
  //     align: "center",
  //   });

  // doc
  //   .font("fonts/NotoSansJP-Light.otf")
  //   .fontSize(10)
  //   .fill("#021c27")
  //   .text("Student", startLine2, signatureHeight + 25, {
  //     columns: 1,
  //     columnGap: 0,
  //     height: 40,
  //     width: lineSize,
  //     align: "center",
  //   });

  doc
    .font("fonts/NotoSansJP-Bold.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("Raquel Murillo", startLine3, signatureHeight + 10, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: "center"
    });

  doc
    .font("fonts/NotoSansJP-Light.otf")
    .fontSize(10)
    .fill("#021c27")
    .text("CEO, Full Stack Simplified", startLine3, signatureHeight + 25, {
      columns: 1,
      columnGap: 0,
      height: 40,
      width: lineSize,
      align: "center"
    });

  jumpLine(doc, 4);

  // Validation link
  // const link = "https://validate-your-certificate.hello/validation-code-here";

  // const linkWidth = doc.widthOfString(link);
  // const linkHeight = doc.currentLineHeight();

  // doc
  //   .underline(doc.page.width / 2 - linkWidth / 2, 448, linkWidth, linkHeight, {
  //     color: "#021c27",
  //   })
  //   .link(doc.page.width / 2 - linkWidth / 2, 448, linkWidth, linkHeight, link);

  // doc
  //   .font("fonts/NotoSansJP-Light.otf")
  //   .fontSize(10)
  //   .fill("#021c27")
  //   .text(link, doc.page.width / 2 - linkWidth / 2, 448, linkWidth, linkHeight);

  // Footer
  const bottomHeight = doc.page.height - 100;

  // doc.image("assets/qr.png", doc.page.width / 2 - 30, bottomHeight, {
  //   fit: [60, 60],
  // });

  doc.end();

  //  Mail
  const output = `
      <h2>Thank you for donating!</h2>
    <p>Because you we will be able to feed more people</h3>
    <p>Banglore food bank</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `${process.env.FSS_EMAIL}`, // generated ethereal user
      pass: `${process.env.FSS_PASSWORD}` // generated ethereal password
    },
    // If on localhost
    tls: {
      rejectUnauthorized: false
    },
    service: "gmail"
  });

  // send mail with defined transport object
  let mailOptions = {
    // from: '"Nodemailer Testing" <raj.sanghavi1@svkmmumbai.onmicrosoft.com>', // sender address
    from: "Banglore Food Bank",
    to: email, // list of receivers
    subject: "Successful Donation ✔", // Subject line
    // text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: output,
    attachments: [
      {
        path: "./CertificateOfDonation.pdf"
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // res.json(error);
    } else {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // res.status(200).json({
      //   success: true,
      //   emailSuccess: true,
      //   data: user,
      // });
    }
  });
};

// generatePDF("raj", "REACT COURSE");
export default generatePDF;
