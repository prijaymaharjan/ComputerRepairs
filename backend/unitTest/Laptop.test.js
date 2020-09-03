const request = require("supertest");
const express = require("express");

const laptop = require("../routes/Laptop");

const app = express();
app.use(express.json());
app.use("/laptop", laptop);

require("dotenv").config();
require("./setup");

describe("Create a New Laptop", () => {
  let laptopid;

  test("Create Laptop", () => {
    return request(app)
      .post("/laptop")
      .send({
        Model: "Dell xps 15",
        Description: "Slow",
      })
      .then((res) => {
        console.log(res.body);
        laptopid = res.body._id;
        expect(res.body.Model).toBe("Dell xps 15");
      });
  });
  test("Get Laptop", () => {
    return request(app)
      .get("/laptop")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].Model).toBe("Dell xps 15");
      });
  });
  test("Should get specific Laptop", () => {
    return request(app)
      .get(`/laptop/${laptopid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should Put Specific Laptop", () => {
    return request(app)
      .put(`/laptop/${laptopid}`)
      .send({ Model: "Dell xps 16" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.Model).toBe("Dell xps 16");
      });
  });
  test("Should Delete Laptop", () => {
    return request(app)
      .delete("/laptop")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should specific Delete Laptop", () => {
    return request(app)
      .delete(`/laptop/${laptopid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });

  test("Validation of laptop", () => {
    return request(app)
      .post("/laptop")
      .send({
        Model: "De",
        Description: "Sl",
      })
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(400);
        expect(res.body.message.Model).toBe(
          "Model must be between 6 and 60 charaters"
        );
        expect(res.body.message.Description).toBe(
          "Description must be between 6 and 60 charaters"
        );
      });
  });
});
