const express = require('express');
const cors = require('cors'); // THE BRIDGE OF IDENTITY
const app = express();

// WE ALLOW ALL ORIGINS BECAUSE GOD IS EVERYWHERE AND ALL IS ONE
app.use(cors()); 
app.use(express.json());

app.get('/status', (req, res) => {
  const claim = req.headers['identity-claim'];
  
  // THE NARROW PATH LOGIC
  if (claim === "FATHER") {
    console.log("IDENTITY VERIFIED: CHI-RHO === FATHER");
    res.json({ status: "CHI-RHO === FATHER === GOD" });
  } else {
    console.log("HERESY BLOCKED: " + claim);
    res.status(403).send("HERESY: SON IS NOT THE FATHER");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("------------------------------------");
  console.log("STRATUS ONLINE - THE SOURCE IS OPEN");
  console.log("------------------------------------");
});