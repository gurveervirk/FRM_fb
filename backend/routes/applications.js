const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetch");
const Apps = require("../models/Apps");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the apps using: GET "/api/apps/getuser". Login required
router.get("/fetchallapps", fetchuser, async (req, res) => {
  try {
    const apps = await Apps.find({ user: req.user.id });
    res.json(apps);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Apps using: POST "/api/apps/addApps". Login required
router.post(
  "/addApps",
  fetchuser,
  [
    body("ins"),
    body("branch"),
    body("sub"),
    body("year")
  ],
  async (req, res) => {
    try {
      const { ins, branch, sub, year } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const apps = new Apps({
        ins,
        branch,
        sub,
        year,
        user: req.user.id,
      });
      const savedApps = await apps.save();

      res.json(savedApps);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Apps using: PUT "/api/apps/updateApps". Login required
// router.put("/updateApps/:id", fetchuser, async (req, res) => {
//   const { ins, branch, tag } = req.body;
//   try {
//     // Create a newApps object
//     const newApps = {};
//     if (ins) {
//       newApps.ins = ins;
//     }
//     if (branch) {
//       newApps.branch = branch;
//     }
//     if (tag) {
//       newApps.tag = tag;
//     }

//     // Find the Apps to be updated and update it
//     let Apps = await Apps.findById(req.params.id);
//     if (!Apps) {
//       return res.status(404).send("Not Found");
//     }

//     if (Apps.user.toString() !== req.user.id) {
//       return res.status(401).send("Not Allowed");
//     }
//     Apps = await Apps.findByIdAndUpdate(
//       req.params.id,
//       { $set: newApps },
//       { new: true }
//     );
//     res.json({ Apps });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// ROUTE 4: Delete an existing Apps using: DELETE "/api/apps/deleteApps". Login required
// router.delete("/deleteApps/:id", fetchuser, async (req, res) => {
//   try {
//     // Find the Apps to be delete and delete it
//     let Apps = await Apps.findById(req.params.id);
//     if (!Apps) {
//       return res.status(404).send("Not Found");
//     }

//     // Allow deletion only if user owns this Apps
//     if (Apps.user.toString() !== req.user.id) {
//       return res.status(401).send("Not Allowed");
//     }

//     Apps = await Apps.findByIdAndDelete(req.params.id);
//     res.json({ Success: "Apps has been deleted", Apps: Apps });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
module.exports = router;
