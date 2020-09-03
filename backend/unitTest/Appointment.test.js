const request = require("supertest");
const express = require("express");

const appointment = require("../routes/Appointment");

const app = express();
app.use(express.json());
app.use("/appointment", appointment);

require("dotenv").config();
require("./setup");
describe("Create a New Appointment", () => {
  let appointmentid;
  test("should create appointment", () => {
    return request(app)
      .post("/appointment")
      .send({
        Firstname: "Prijay Maharjan",
        Lastname: "Maharjan",
        Email: "prijaymaharjan@gmail.com",
        Mobile: "981111111",
        Subject: "Data Recovery",
        Message: "DAta Recovery",
      })
      .then((res) => {
        console.log(res.body);
        appointmentid = res.body._id;
        expect(res.body.Firstname).toBe("Prijay Maharjan");
      });
  });
  test("should get appointment", () => {
    return request(app)
      .get("/appointment")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].Email).toBe("prijaymaharjan@gmail.com");
      });
  });
  test("Should get specific Appointment", () => {
    return request(app)
      .get(`/appointment/${appointmentid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should Put Specific Appointnment", () => {
    return request(app)
      .put(`/appointment/${appointmentid}`)
      .send({ Message: "Data Recovery and Ram Change" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.Message).toBe("Data Recovery and Ram Change");
      });
  });
  test("Should Delete Appointnment", () => {
    return request(app)
      .delete("/appointment")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });

  test("Should specific Delete Appointnment", () => {
    return request(app)
      .delete(`/appointment/${appointmentid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Validation of Appointment", () => {
    return request(app)
      .post("/appointment")
      .send({
        Firstname: "Pr",
        Lastname: "Ma",
        Email: "prijaymaharjan",
        Mobile: "981111111",
        Subject: "Da",
        Message: "Dy",
      })
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(400);
        expect(res.body.message.Firstname).toBe(
          "Firstname must be between 3 and 30 charaters"
        );
        expect(res.body.message.Lastname).toBe(
          "Lastname must be between 3 and 30 charaters"
        );
        expect(res.body.message.Email).toBe("Email Not Valid");

        expect(res.body.message.Subject).toBe(
          "Subject must be between 3 and 30 charaters"
        );
        expect(res.body.message.Message).toBe(
          "Message must be between 3 and 30 charaters"
        );
      });
  });
});
