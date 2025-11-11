import express from "express";
import Projeto from "./../models/projeto.js";

const router = express.Router();

// Criar projeto
router.post("/", async (req, res) => {
  try {
    const { nome, descricao, integrantes, disciplina } = req.body;
    const projeto = new Projeto({ nome, descricao, integrantes, disciplina });
    await projeto.save();
    res.status(201).json(projeto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar projeto" });
  }
});

// Listar projetos
router.get("/", async (req, res) => {
  try {
    const projetos = await Projeto.find().sort({ criadoEm: -1 });
    res.json(projetos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar projetos" });
  }
});

export default router;
