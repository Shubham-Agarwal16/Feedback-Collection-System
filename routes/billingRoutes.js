const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requirelogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    // console.log("here");
    // console.log(req);
    // console.log("user", req.user);
    // console.log("credits", req.user.credits);
    try {
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.send(err);
    }
  });
};
