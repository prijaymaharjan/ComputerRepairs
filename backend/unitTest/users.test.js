const request = require("supertest");
const express = require("express");

const user = require("../routes/User");

const app = express();
app.use(express.json());
app.use("/user", user);

require("dotenv").config();
require("./setup");

describe("Test of User Route", () => {
  test("should be able to register a user", () => {
    return request(app)
      .post("/user/register")
      .send({
        Username: "Discoverychannelltd",
        Password: "text1234",
        Firstname: "Discovery",
        Lastname: "Channel",
        Role: "Admin",
        Gender: "Male",
        DateofBirth: "2053-01-08",
        Email: "discovery@gmail.com",
        Mobile: "9811111111",
        Address: "chitwan",
        Professional: "Owner",
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
      });
  });
  test("should be able to login", () => {
    return request(app)
      .post("/user/login")
      .send({
        Username: "Discoverychannelltd",
        Password: "text1234",
      })
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.token).not.toBe("undefined");
      });
  });
  test("Validation of Register", () => {
    return request(app)
      .post("/user/register")
      .send({
        Username: "Di",
        Firstname: "12121",
        Lastname: "3232",
        Role: "dasddas",
        Gender: "323232",
        DateofBirth: "ewewffwe",
        Email: "discov",
        Mobile: "9811",
        Address: "ch",
        Professional: "O",
      })
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(400);
        expect(res.body.message.Username).toBe(
          "Username must be between 6 and 30 charaters"
        );
        expect(res.body.message.Firstname).toBe("First Name Not Valid");
        expect(res.body.message.Lastname).toBe("Last Name Not Valid");
        expect(res.body.message.Role).toBe("First Character Uppercase");
        expect(res.body.message.Gender).toBe("Gender Not Valid");
        expect(res.body.message.DateofBirth).toBe("Date of Birth Not Valid");
        expect(res.body.message.Email).toBe("Email Not Valid");
        expect(res.body.message.Mobile).toBe("Mobile Number 10");
        expect(res.body.message.Address).toBe(
          "Address must be between 3 and 30 charaters"
        );
        expect(res.body.message.Professional).toBe(
          "Professional must be between 3 and 30 charaters"
        );
      });
  });
});
