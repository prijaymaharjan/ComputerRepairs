const request = require("supertest");
const express = require("express");

const repair = require("../routes/Repair");

const app = express();
app.use(express.json());
app.use("/repair", repair);

require("dotenv").config();
require("./setup");
describe("Create a New Repair", () => {
  let repairid;

  test("Create Repair", () => {
    return request(app)
      .post("/repair")
      .send({
        Email: "prijaymaharjan@gmail.com",
        Detail: "Hard Recovery",
        Paymentmethod: "Cash",
        Quantity: "1",
        Price: "1500",
        Totalamount: "1500",
        Dates: "2077-02-12",
      })
      .then((res) => {
        console.log(res.body);
        repairid = res.body._id;
        expect(res.body.Email).toBe("prijaymaharjan@gmail.com");
      });
  });
  test("Get repair", () => {
    return request(app)
      .get("/repair")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].Email).toBe("prijaymaharjan@gmail.com");
      });
  });
  test("Should get specific repair", () => {
    return request(app)
      .get(`/repair/${repairid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should Put Specific repair", () => {
    return request(app)
      .put(`/repair/${repairid}`)
      .send({ Detail: "Hard Recovery and" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.Detail).toBe("Hard Recovery and");
      });
  });
  test("Should Delete repair", () => {
    return request(app)
      .delete("/repair")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should specific Delete repair", () => {
    return request(app)
      .delete(`/repair/${repairid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
});
