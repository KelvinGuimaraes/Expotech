import mongoose from "mongoose";

const ProjetoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  integrantes: { type: String },
  disciplina: { type: String },
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model("Projeto", ProjetoSchema);
