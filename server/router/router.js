const express = require("express");
const router = express.Router();
const {register}= require ("../controllers/authcontroller")


router.post("/register",register)
// router.get("/", (req, res) => {
//     res.render("index", { message: "" });
// });

// router.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     const maxAge = 24 * 60 * 60; // 24 hours in seconds

//     console.log(req.body, "req.bodydddd");

//     try {
//         const admin = await Admin.findOne({ username });
//         if (admin) {
//             if (admin.password === password) {
//                 console.log("admin", admin);
//                 req.session.user = username;
//                 res.cookie("session",req.session.user, { httpOnly: true, maxAge: maxAge * 1000 });

//                 res.redirect("/home");
//             } else {
//                 // Password does not match
//                 res.render("index", { message: "Invalid username or password" });
//             }
//         } else {
//             // Admin with given username not found
//             res.render("index", { message: "Invalid username or password" });
//         }
//     } catch (error) {
//         console.log("Login error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });


// router.get("/home", loginMiddleware, render_home);

// router.get("/edit/:id", loginMiddleware, async (req, res) => {
//     const { id } = req.params;
//     const editProduct = await Product.findOne({ _id: id });
//     console.log(editProduct);
//     res.render("edit", { editProduct });
// });
// router.post("/edit_post/:id", loginMiddleware, upload.single("image"), async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, about, price } = req.body;
//         let image;

//         if (req.file) {
//             image = req.file.filename;
//         } else {
//             const existingProduct = await Product.findById(id);
//             image = existingProduct.image;
//         }
//         const updatedProduct = await Product.findByIdAndUpdate(id, { name, about, price, image }, { new: true });
//         res.redirect("/products");
//     } catch (error) {
//         console.log("Update error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.post("/logout", (req, res) => {
//     req.session.destroy(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect("/"); // Redirect to login page after destroying session
//         }
//     });
// });

// router.get("/home/details/", loginMiddleware, async (req, res) => {
//     const id = req.query.id;
//     console.log({ id });
//     const item = await Product.findOne({ _id: id });
//     res.render("detail", { item });
// });

// router.post("/status/:id", loginMiddleware, async (req, res) => {
//     const { id } = req.params;

//     try {
//         const user = await User.findById(id);
//         if (user.active) {
//             const updatedUser = await User.findByIdAndUpdate(id, { active: false });
//         } else {
//             const updatedUser = await User.findByIdAndUpdate(id, { active: true });
//         }

//         res.redirect("/users");
//     } catch (error) {
//         console.log("Toggle error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.post("/delete/:id", loginMiddleware, async (req, res) => {
//     const { id } = req.params;
//     const detailPageURL = `/home/details?id=${id}`;
//     try {
//         const product = await Product.findById(id);
//         if (product.active) {
//             const updatedProduct = await Product.findByIdAndUpdate(id, { active: false });
//         } else {
//             const updatedProduct = await Product.findByIdAndUpdate(id, { active: true });
//         }
//         res.redirect(detailPageURL);
//     } catch (error) {
//         console.log("Toggle error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.get("/users", loginMiddleware, async (req, res) => {
//     const allUsers = await User.find();
//     res.render("users", { userDetails: allUsers });
// });
// router.get("/products", loginMiddleware, async (req, res) => {
//     const allProducts = await Product.find();
//     res.render("products", { Watches: allProducts });
// });

module.exports = router;
