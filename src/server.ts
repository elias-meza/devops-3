import express from "express";
import { dividir, multiplicar, restar, sumar } from "./calcular.js";
import * as fs from 'fs';

const app = express();
const ambiente = process.env.AMBIENTE ?? "LOCAL";
const apikey = process.env.API_KEY ?? "";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: sumar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: restar(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: dividir(operacion.num1, operacion.num2) });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: multiplicar(operacion.num1, operacion.num2) });
  }
  return res.send({ resultado: "hola mundo" });
});

app.get("/info", (req, res) => {
  return res.send(`El ambiente es: ${ambiente}`);
});

app.get("/api", (req, res) => {
  const key = fs.readFileSync(apikey, 'utf8');
  return res.send(`La api-key es: ${key}`);
});

export default app;