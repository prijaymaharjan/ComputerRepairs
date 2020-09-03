const request = require("supertest");
const express = require("express");

const item = require("../routes/Item");

const app = express();
app.use(express.json());
app.use("/item", item);

require("dotenv").config();
require("./setup");

describe("Create a New Item", () => {
  let itemid;
  test("should create Item", () => {
    return request(app)
      .post("/item")
      .send({
        Detail: "Data Recovery",
        Price: "1200",
        Quantity: "1",
        Total: "1200",
      })
      .then((res) => {
        console.log(res.body);
        itemid = res.body._id;
        expect(res.body.Detail).toBe("Data Recovery");
      });
  });

  test("Should get Item", () => {
    return request(app)
      .get("/item")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].Detail).toBe("Data Recovery");
      });
  });
  test("Should get Specific Item", () => {
    return request(app)
      .get(`/item/${itemid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should Put Specific Item", () => {
    return request(app)
      .put(`/item/${itemid}`)
      .send({ Detail: "Ram Add" })
      .then((res) => {
        console.log(res.body);
        expect(res.body.Detail).toBe("Ram Add");
      });
  });
  test("Should Delete Item", () => {
    return request(app)
      .delete("/item")
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });
  test("Should specific Delete Item", () => {
    return request(app)
      .delete(`/item/${itemid}`)
      .then((res) => {
        console.log(res.body);
        expect(res.statusCode).toBe(200);
      });
  });

  //   let repairid;
  //   test("should create Item", () => {
  //     return request(app)
  //       .post(`/item/${itemid}/repairs`)
  //       .send({
  //         Email: "prijaymaharjan@gmail.com",
  //         Detail: "Add Ram",
  //         Paymentmethod: "Cash",
  //         Quantity: "1",
  //         Price: "1500",
  //         Totalamount: "1500",
  //         Dates: "2077-01-04",
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         repairid = res.body._id;
  //         expect(res.body.Detail).toBe("Add Ram");
  //       });
  //   });

  //   test("Should get Item", () => {
  //     return request(app)
  //       .get(`/item/${itemid}/repair`)
  //       .then((res) => {
  //         console.log(res.body);
  //         expect(res.status.code).toBe(200);
  //         expect(res.body.length).toBe(1);
  //         expect(res.body[0].Detail).toBe("Add Ram");
  //       });
  //   });
});
