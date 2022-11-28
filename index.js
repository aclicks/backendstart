import express from "express";
import * as dotenv from "dotenv";
import { uuid } from "uuidv4";

dotenv.config();

const app = express();

app.use(express.json());

const bancoProcessos = [
	{
		id: "e27ab2b1cb914b18ab905895cc9abd29",
		documentName: "Licitação Enap - Curso Web Dev",
		status: "Em andamento",
		details:
			"Processo para capacitação de servidores públicos em desenvolvimento de aplicações na WEB. Parceria com Ironhack",
		dateInit: "28/11/2022",
		comments: [
			"Processo aberto",
			"Processo partiu para as partes assinarem",
			"Processo agora está em análise final",
			"Processo já tem data final",
		],
		dateEnd: "16/12/2022",
		setor: "enap",
	},
	{
		id: "ee5999d702e94b3da1abf067eef54173",
		documentName: "Licitação Compras - Notebooks",
		status: "Em andamento",
		details: "Processo de licitação para compra de notebooks",
		dateInit: "30/11/2022",
		comments: ["Processo em aberto e sem previsão de conclusão"],
		dateEnd: "",
		setor: "tre",
	},
	,
	{
		id: "ee5999d702e94b3da1abf067eef54173",
		documentName: "Licitação Compras - Ar Condicionado",
		status: "Finalizado",
		details: "Processo de licitação para compra de ar-condicionado",
		dateInit: "15/11/2022",
		comments: ["Processo em aberto", "Processo finalizado"],
		dateEnd: "25/11/2022",
		setor: "trj",
	},
];

app.get("/todos", (req, res) => {
	return res.status(200).json({ bancoProcessos });
});

app.post("/criar", (req, res) => {
	const form = req.body;

	bancoProcessos.push(form);

	return res.status(201).json(bancoProcessos);
});

app.put("/atualizar/:id", (req, res) => {
	const { id } = req.params;
	const updateById = bancoProcessos.find((processo) => processo.id === id);
	const index = bancoProcessos.indexOf(updateById);

	bancoProcessos[index] = req.body;

	return res.status(200).json(bancoProcessos);
});

app.delete("/excluir/:id", (req, res) => {
	const { id } = req.params;
	const deleteById = bancoProcessos.find((processo) => processo.id === id);
	const index = bancoProcessos.indexOf(deleteById);

	bancoProcessos.splice(index, 1);

	return res.status(200).json(bancoProcessos);
});

app.listen(process.env.PORT, () => {});
