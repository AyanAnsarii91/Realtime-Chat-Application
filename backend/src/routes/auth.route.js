

import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile, // Now imported from auth.controller
  checkAuth, // Now imported from auth.controller
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// ... rest of your routes

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
