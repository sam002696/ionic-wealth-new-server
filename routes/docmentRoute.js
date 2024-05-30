const express = require("express");
const {
  createdocument,
  getAlldocuments,
} = require("../controllers/documentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/documents").get(getAlldocuments);

// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/document/new").post(createdocument);

// router
//   .route("/admin/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
