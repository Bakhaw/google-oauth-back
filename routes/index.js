import { Router } from "express";

import passport from "../passport/index.js";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/login",
  })
);

router.get("/profile", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user logged in", user: req.user });
  } else {
    res.status(401).json({ message: "Not Authorized" });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    res.redirect("http://localhost:3000");
  });
});

export default router;
