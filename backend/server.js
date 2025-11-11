import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
import projetosRouter from "./routes/projetos.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // configure origens em produção
app.use(express.json());

// rotas
app.use("/api/projetos", projetosRouter);

// conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB conectado");
  app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}).catch(err => {
  console.error("Erro ao conectar MongoDB", err);
});
